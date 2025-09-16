import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    
        return [{
            url: `https://${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        }]
}