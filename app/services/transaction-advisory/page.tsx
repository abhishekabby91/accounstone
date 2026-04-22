export default function Page() {
  const services = [
    "Due Diligence Services",
    "Merger & Acquisition Advisory",
    "Business and Asset Valuations",
    "Debts & Equity Financing Solutions",
    "Seed and Venture Capital (VC) Funding",
    "Strategic Corporate Restructuring",
    "IPO Listing & Consulting - SME",
    "IPO Listing & Consulting - Main Board",
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
          Our transaction advisory services support businesses through complex
          financial decisions including mergers, fundraising, restructuring,
          and capital market transactions.
        </p>

        {/* SERVICES */}
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

      </div>
    </div>
  )
}