"use client"

const services = [
  {
    title: "Company Incorporation & Legal Registration",
    desc: "End-to-end incorporation support in India including entity structuring, name approval, documentation, and registration with regulatory authorities for seamless setup.",
  },
  {
    title: "FDI & Regulatory Compliance",
    desc: "Comprehensive advisory on foreign direct investment regulations, FEMA compliance, and sector-specific approvals ensuring smooth investment entry into India.",
  },
  {
    title: "GST Registration & Licensing",
    desc: "Complete GST registration support along with applicable business licenses and registrations required for compliant operations in India.",
  },
  {
    title: "Accounting & Financial Reporting Setup",
    desc: "Design and implementation of robust accounting systems aligned with Indian regulations and global reporting standards for accurate financial control.",
  },
  {
    title: "Regulatory Filings & Approvals",
    desc: "Ongoing support for statutory filings, ROC compliance, and coordination with regulatory bodies to ensure timely and accurate compliance management.",
  },
  {
    title: "Corporate Governance Framework",
    desc: "Setup of board structure, governance policies, and internal control systems to ensure strong corporate oversight and compliance discipline.",
  },
  {
    title: "Audit & Statutory Compliance",
    desc: "Initial audit support and compliance readiness review to identify risks and ensure full alignment with statutory requirements from the outset.",
  },
  {
    title: "Expatriate Support Services",
    desc: "End-to-end assistance for expatriates including visa advisory, tax structuring, payroll setup, and relocation support for smooth transition into India.",
  },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-white py-20 px-6 max-w-5xl mx-auto">

      <h1 className="text-4xl font-bold text-[#081a42] mb-6">
        Incorporation Services
      </h1>

      <p className="mb-10 text-gray-700">
        We handle the entire setup process so you can focus on your business. From incorporation to compliance, we ensure a seamless and fully compliant entry into India.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((item) => (
          <div
            key={item.title}
            className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg text-[#081a42] mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}