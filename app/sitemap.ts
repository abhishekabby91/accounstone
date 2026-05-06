export default function sitemap() {
  const baseUrls = [
    "https://theaucorp.com",
    "https://www.theaucorp.com",
  ]

  const routes = [
    "",
    "/blog",
    "/why-india",
    "/services",
  ]

  const urls = baseUrls.flatMap((baseUrl) =>
    routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    }))
  )

  return urls
}