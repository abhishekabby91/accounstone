"use client"

const services = [
  "Evaluate business feasibility and market entry strategy",
  "Analyze competition and industry landscape",
  "Assess FDI (Foreign Investment) eligibility and regulations",
  "Design tax-efficient structure for your business",
  "Support in joint ventures and partnerships",
  "Develop growth and expansion strategies",
  "Advise on industrial zones and location setup",
]

export default function Page() {
  return (
    <div className="min-h-screen bg-white py-20 px-6 max-w-5xl mx-auto">

      <h1 className="text-4xl font-bold text-[#081a42] mb-6">
        Pre-Incorporation Advisory
      </h1>

      <p className="mb-8 text-gray-700">
        Before entering India, it is important to plan your structure, strategy, and compliance approach. We help you make informed decisions.
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