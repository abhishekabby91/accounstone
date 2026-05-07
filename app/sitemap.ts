import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.theaucorp.com"

  // STATIC PAGES
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/blog",
    "/why-india",
    "/services",
  ]

  // SERVICE PAGES
  const serviceRoutes = [
    "/services/company-formation-india",
    "/services/gst-registration",
    "/services/fema-compliance",
    "/services/foreign-subsidiary-india",
    "/services/accounting-outsourcing",
    "/services/payroll-services",
    "/services/virtual-cfo",
  ]

  // BLOG PAGES
  const blogRoutes = [
    "/blog/company-formation-india-guide",
    "/blog/fema-compliance-explained",
    "/blog/gst-for-foreign-companies",
    "/blog/india-entry-strategy",
    "/blog/rbi-reporting-india",
  ]

  // COMBINE ALL ROUTES
  const allRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...blogRoutes,
  ]

  // GENERATE SITEMAP
  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,

    lastModified: "2026-05-07",

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