// app/services/transaction-advisory/page.tsx

export default function Page() {
  const services = [
    "Mergers & Acquisitions Advisory",
    "Financial Due Diligence",
    "Business Valuation",
    "Corporate Restructuring",
    "Investment Advisory",
    "Deal Structuring",
    "Strategic Advisory Services",
    "Fund Raising & Capital Structuring",
  ]

  return (
    <div className="min-h-screen pt-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-[#081a42] mb-6">
          Transaction Advisory Services
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-600 mb-12 max-w-3xl">
          We assist businesses in making informed strategic decisions through
          expert advisory on mergers, acquisitions, valuations, and financial
          restructuring.
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