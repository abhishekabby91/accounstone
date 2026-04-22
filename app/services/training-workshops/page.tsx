// app/services/training-workshops/page.tsx

export default function Page() {
  const services = [
    "Compliances Training under Corporate & Tax Laws",
    "Project Management Training",
    "Internal Audit Training",
    "SME - IPO Readiness",
    "Anti-Money Laundering (AML)",
  ]

  return (
    <div className="min-h-screen pt-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-[#081a42] mb-6">
          Training & Workshops
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-600 mb-12 max-w-3xl">
          Our Training & Workshop programs are designed to equip professionals
          and organizations with practical knowledge in compliance, finance,
          audit, and business management, ensuring improved efficiency and
          regulatory adherence.
        </p>

        {/* KEY SERVICES */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">
            Key Services
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {services.map((item, i) => (
              <div
                key={i}
                className="border p-4 rounded-lg hover:shadow transition"
              >
                • {item}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}