"use client"

const services = [
  "Company incorporation and legal registration in India",
  "Compliance with foreign investment (FDI) regulations",
  "Registration for GST (Goods & Services Tax) and licenses",
  "Setup of accounting and reporting systems",
  "Regulatory filings and approvals",
  "Board setup and corporate governance compliance",
  "Initial audit and statutory compliance",
  "Expatriate support (visa, tax, relocation)",
]

export default function Page() {
  return (
    <div className="min-h-screen bg-white py-20 px-6 max-w-5xl mx-auto">

      <h1 className="text-4xl font-bold text-[#081a42] mb-6">
        Incorporation Services
      </h1>

      <p className="mb-8 text-gray-700">
        We handle the entire setup process so you can focus on your business. From registration to compliance, everything is managed seamlessly.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {services.map((s) => (
          <div key={s} className="p-5 border rounded-xl shadow-sm">
            {s}
          </div>
        ))}
      </div>

    </div>
  )
}