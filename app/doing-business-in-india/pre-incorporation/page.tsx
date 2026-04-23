"use client"

const services = [
  {
    title: "Evaluate business feasibility and market entry strategy",
    desc: "In-depth assessment of market viability, demand potential, and strategic entry options for India."
  },
  {
    title: "Analyze competition and industry landscape",
    desc: "Comprehensive competitor benchmarking and sector analysis to identify positioning opportunities."
  },
  {
    title: "Assess FDI (Foreign Investment) eligibility and regulations",
    desc: "Evaluation of foreign investment rules, sectoral caps, and approval requirements under Indian law."
  },
  {
    title: "Design tax-efficient structure for your business",
    desc: "Structuring advisory to optimize tax exposure while ensuring regulatory compliance and efficiency."
  },
  {
    title: "Support in joint ventures and partnerships",
    desc: "Guidance in identifying, structuring, and negotiating strategic Indian partnerships or JV models."
  },
  {
    title: "Develop growth and expansion strategies",
    desc: "Long-term roadmap creation focusing on scalable and sustainable India market expansion."
  },
  {
    title: "Advise on industrial zones and location setup",
    desc: "Location strategy support including SEZs, industrial corridors, and cost-efficient operating hubs."
  },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-white py-20 px-6 max-w-5xl mx-auto">

      <h1 className="text-4xl font-bold text-[#081a42] mb-6">
        Pre-Incorporation Advisory
      </h1>

      <p className="mb-10 text-gray-700">
        Before entering India, it is important to plan your structure, strategy, and compliance approach.
        We help global businesses make informed, risk-aware and tax-efficient entry decisions.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="p-5 border rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-[#081a42] mb-2">
              {s.title}
            </h3>
            <p className="text-sm text-gray-600">
              {s.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}