export type PageData = {
    content:string; 
    primaryMenu: {
        menuItems: {
            nodes: [{
                id:string | null;
                label:string | null;
                url:string | null;
                path:string | null;
                childItems: {
                    nodes: [{
                        id:string | null;
                        label:string | null;
                        url:string | null;
                        path:string | null;
                    }]
                }
            }]
        }
    }
    footerMenu: {
        menuItems: {
            nodes: [{
                id:string | null;
                label:string | null;
                url:string | null;
                path:string | null;
            }]
        }
    }
    pages: {
        id:string | null;
        title:string | null;
        content:string | null;
        pageData: {
          header: {
            title:string | null;
            subtitle:string | null;
            backgroundImage:{ 
                node: {
                    altText:string | null;
                    sourceUrl:string | null;
                } 
            } | null ;
          }
        }
    }
    homePage: {
        header:{
            title:string | null;
            subtitle:string | null;
            content:string | null;
            buttonLeftLabel:string | null;
            buttonLeftUrl:string | null;
            buttonRightLabel:string | null;
            buttonRightUrl:string | null;
            backgroundImage:{ 
                node: {
                    altText:string | null;
                    sourceUrl:string | null;
                } 
            } | null ;
        }
        headerBottom : {
            title:string | null;
            content:string | null;
            backgroundImage : {
              node : {
                altText:string | null;
                sourceUrl:string | null;
              }
            } | null ;
        }
        about : {
            title:string | null;
            subtitle:string | null;
            content:string | null;
            buttonUrl:string | null;
            buttonLabel:string | null;
            backgroundImage : {
                node : {
                    altText:string | null;
                    sourceUrl:string | null;
                } | null;
            }
        }
        services : {
            title:string | null;
            subtitle:string | null;
            content:string | null;
            buttonUrl:string | null;
            buttonLabel:string | null;
            sideImage: {
                node: {
                    altText:string | null;
                    sourceUrl:string | null;
                }
            } | null ;
        }
        contact : {
            title:string | null;
            content:string | null;
            formTitle:string | null;
            backgroundImage:{ 
                node: {
                    altText:string | null;
                    sourceUrl:string | null;
                } 
            } | null ;
        }
    }
    businessInfo : {
        ownerName:string | null;
        businessName:string | null;
        businessDescription:string | null;
        businessPhone:string | null;
        businessEmail:string | null;
        businessAddress:string | null;
        businessHours : {
            showHours:boolean | null;
            allWeek:string | null;
            monday:string | null;
            tuesday:string | null;
            wednesday:string | null;
            thursday:string | null;
            friday:string | null;
            saturday:string | null;
            sunday:string | null;
        }
        businessLogo : {
            node : {
                altText:string | null;
                sourceUrl:string | null;
            }
        }
        socials : {
            showSocials: boolean | null;
            instagram:string | null;
            linkedin:string | null;
        }
    }
    sitemap: {
        url:string | null;
        priority:string | null;
        lastModified:string | null;
    }
} | null;