export default function Page() {
  const services = [
    "Assurance Service",
    "Agreed Upon Procedures",
    "Management Reporting",
    "International Financial Reporting Standards (IFRS) & IND-AS Implementation",
    "Accounting Advisory Services",
    "Financial Statement Preparations",
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
          We provide reliable accounting and assurance services to enhance
          financial transparency, strengthen governance, and support informed
          decision-making.
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