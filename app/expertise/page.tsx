import Link from "next/link"

export default function ExpertisePage() {
  const expertiseAreas = [
    {
      title: "CPA Firm Growth",
      description:
        "Improve profitability, staffing, operations, and long-term firm growth.",
      href: "/expertise/firm-growth",
    },
    {
      title: "Global Delivery",
      description:
        "Build high-performing offshore teams and scalable delivery models.",
      href: "/expertise/global-delivery",
    },
    {
      title: "India Expansion",
      description:
        "Establish GCCs, captive centers, and strategic operations in India.",
      href: "/expertise/india-expansion",
    },
    {
      title: "Operational Excellence",
      description:
        "Optimize processes, workflows, governance, and performance systems.",
      href: "/expertise/operational-excellence",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Expertise
          </span>

          <h1 className="text-5xl font-bold mt-4 mb-6">
            Strategic Advisory for Accounting Firms
          </h1>

          <p className="text-xl text-slate-600">
            808 Strategy helps accounting firms scale through operational
            excellence, offshore talent strategies, and India expansion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {expertiseAreas.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border rounded-2xl p-8 hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-bold mb-3">
                {item.title}
              </h2>

              <p className="text-slate-600">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}