import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.theaucorp.com"

  const staticRoutes = [
    "",
    "/blog",
    "/why-india",
    "/services",
  ]

  const serviceRoutes = [
    "/services/company-formation-india",
    "/services/gst-registration",
    "/services/fema-compliance",
    "/services/foreign-subsidiary-india",
  ]

  const blogRoutes = [
    "/blog/company-formation-india-guide",
    "/blog/fema-compliance-explained",
    "/blog/gst-for-foreign-companies",
  ]

  const allRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...blogRoutes,
  ]

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,

    lastModified: new Date(),

    changeFrequency:
      route.includes("/blog")
        ? "weekly"
        : route.includes("/services")
        ? "monthly"
        : "weekly",

    priority:
      route === ""
        ? 1
        : route.includes("/services")
        ? 0.9
        : route.includes("/blog")
        ? 0.8
        : 0.7,
  }))
}