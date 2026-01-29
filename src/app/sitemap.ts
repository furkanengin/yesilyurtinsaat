import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://yesilyurtinsaat.com",
            lastModified: new Date(),
        },
        {
            url: "https://yesilyurtinsaat.com/kentsel-donusum",
            lastModified: new Date(),
        },
    ];
}
