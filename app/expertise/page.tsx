import Link from "next/link"

const services = [
  {
    title: "Firm Growth Strategy",
    href: "/expertise/firm-growth",
    description:
      "Scale profitability, improve operations and optimize firm performance.",
  },
  {
    title: "Global Delivery Strategy",
    href: "/expertise/global-delivery",
    description:
      "Build and manage high-performing offshore teams.",
  },
  {
    title: "India Expansion & GCC",
    href: "/expertise/india-expansion",
    description:
      "Launch and scale operations in India.",
  },
  {
    title: "Operational Excellence",
    href: "/expertise/operational-excellence",
    description:
      "Improve process maturity, governance and execution.",
  },
]

export default function ExpertisePage() {
  return (
    <main className="py-24">

      <div className="container mx-auto px-6">

        <h1 className="text-5xl font-bold">
          Expertise
        </h1>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {services.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="border rounded-2xl p-8 hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-bold">
                {item.title}
              </h2>

              <p className="mt-4 text-slate-600">
                {item.description}
              </p>
            </Link>
          ))}

        </div>

      </div>

    </main>
  )
}