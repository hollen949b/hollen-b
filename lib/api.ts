const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
  const headers = { "Content-Type": "application/json" };

  // if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
  //   headers[
  //     "Authorization"
  //   ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  // }

  // console.log(API_URL);
  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL!, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
    next: { tags: ['graphql'] }
  });

  const json = await res.json();


  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getHomePage() {
  const data = await fetchAPI(`
  {
    nodeByUri(uri: "/") {
      __typename
      ... on ContentType {
        id
        name
      }
      ... on Page {
        id
        title
        content
        homePage {
          header {
            title
            subtitle
            content
            buttonLeftLabel
            buttonLeftUrl
            buttonRightLabel
            buttonRightUrl
            backgroundImage {
              node {
                altText
                sourceUrl
              }
            }
          }
          headerBottom {
            title
            content
            backgroundImage {
              node {
                altText
                sourceUrl
              }
            }
          }
          about {
            title
            subtitle
            content
            buttonUrl
            buttonLabel
            backgroundImage {
              node {
                altText
                sourceUrl
              }
            }
          }
          services {
            title
            subtitle
            content
            buttonUrl
            buttonLabel
            sideImage {
              node {
                altText
                sourceUrl
              }
            }
          }
          contact {
            title
            content
            formTitle
            backgroundImage {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
  `);
  return data.nodeByUri;
}

export async function getPageByURI({
  uri
}:{
  uri:string
}) {
  const data = await fetchAPI(`
    query PageData{
      pageBy(uri: "${uri}") {
        id
        title
        content
        pageData {
          header {
            title
            subtitle
            backgroundImage {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }
  `);
  return data.pageBy;
}

export async function getBusinessInfo() {
  const data = await fetchAPI(
    `
    query BusinessInfo {
      businessInfoOptions {
        businessInfo {
          ownerName
          businessName
          businessDescription
          businessPhone
          businessEmail
          businessAddress
          businessHours {
            showHours
            allWeek
            monday
            tuesday
            wednesday
            thursday
            friday
            saturday
            sunday
          }
          businessLogo {
            node {
              altText
              sourceUrl
            }
          }
          socials {
            showSocials
            instagram
            linkedin
          }
        }
      }
    }
  `
  );
  return data?.businessInfoOptions.businessInfo;
}

export async function getPrimaryMenu() {
  const data = await fetchAPI(
    `
    query PrimaryMenu{
      menuItems(where: {location: MENU_1, parentDatabaseId: 0}) {
        nodes {
          id
          label
          path
          url
          childItems {
            nodes {
              id
              label
              path
              url
            }
          }
        }
      }
    }
    `
  );
  return data;
}

export async function getFooterMenu() {
  const data = await fetchAPI(
    `
    query FooterMenu{
      menuItems(where: {location: MENU_2}) {
        nodes {
          id
          label
          path
          url
        }
      }
    }
    `
  );
  return data;
}

// export async function getPreviewPost(id, idType = "DATABASE_ID") {
//   const data = await fetchAPI(
//     `
//     query PreviewPost($id: ID!, $idType: PostIdType!) {
//       post(id: $id, idType: $idType) {
//         databaseId
//         slug
//         status
//       }
//     }`,
//     {
//       variables: { id, idType },
//     },
//   );
//   return data.post;
// }

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.posts;
}

export async function getPostAndMorePosts({
  slug, preview, previewData
}:{
  slug:string;
  preview:boolean;
  previewData:any;
}) {
  const postPreview = preview && previewData?.post;
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug));
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug;
  const isDraft = isSamePost && postPreview?.status === "draft";
  const isRevision = isSamePost && postPreview?.status === "publish";
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ""
        }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? "DATABASE_ID" : "SLUG",
      },
    },
  );

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id;
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node;

    if (revision) Object.assign(data.post, revision);
    delete data.post.revisions;
  }

  // Filter out the main post
  // data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug);
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop();

  return data;
}

export async function getSitemap() {
  const data = await fetchAPI(
    `
    query Sitemap{
      sitemap {
        lastModified
        priority
        url
      }
    }
    `
  );
  return data;
}