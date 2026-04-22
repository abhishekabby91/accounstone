// app/services/accounting-assurance/page.tsx

export default function Page() {
  const services = [
    "Statutory Audit",
    "Internal Audit",
    "Financial Reporting & Advisory",
    "IFRS / IND-AS Implementation",
    "Management Reporting",
    "Due Diligence",
    "Process & Control Reviews",
    "SOX Compliance & Testing",
  ]

  return (
    <div className="min-h-screen pt-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-[#081a42] mb-6">
          Accounting & Assurance
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-600 mb-12 max-w-3xl">
          Our accounting and assurance services help businesses maintain financial
          transparency, ensure regulatory compliance, and strengthen internal
          controls for sustainable growth.
        </p>

        {/* SERVICES */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Key Services
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {services.map((item, i) => (
              <div key={i} className="border p-4 rounded-lg hover:shadow">
                • {item}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}