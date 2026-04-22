import { notFound } from "next/navigation"

const servicesData: Record<string, any> = {
  "risk-management": {
    "internal-audit": {
      title: "Internal Audit",
      sections: [
        "Internal Audit",
        "Internal Audit Transformation",
        "Enterprises Risk Management",
        "Risk and Control Registers",
        "Process Designing and Documentation",
        "SOX/JSOX Reviews - Design and Testing",
        "IFC/ICFR - Design and Testing",
      ],
    },

    "forensic-services": {
      title: "Forensic Services",
      sections: [
        "Fraud Risk Assessments & Investigations",
        "Enforcement Agencies Assistance - CBI, SFIO",
        "Forensic Audit Under RBI Guidelines",
        "Transaction Audit Under IBC 2016",
        "Digital Forensic",
        "Anti Bribery and Corruption",
        "Assets Tracing",
        "AML and KYC Review",
      ],
    },

    "special-audit-review": {
      title: "Special Audit / Review",
      sections: [
        "Project Audit",
        "Concurrent Audit / Pre-Audit",
        "Fixed Asset Management and Verification",
        "Inventory Control and Stock Audit Service",
        "Agency for Specialized Monitoring (ASM) Mechanism",
      ],
    },
  },
}

export default function Page({
  params,
}: {
  params: { category: string; slug: string }
}) {
  const data = servicesData?.[params.category]?.[params.slug]

  if (!data) return notFound()

  return (
    <div className="min-h-screen pt-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-[#081a42] mb-6">
          {data.title}
        </h1>

        {/* INTRO TEXT */}
        <p className="text-gray-600 mb-10">
          AU Corporate delivers structured, compliance-driven and strategic advisory solutions
          across multiple domains of Risk, Audit and Assurance.
        </p>

        {/* CONTENT LIST */}
        <div className="grid md:grid-cols-2 gap-4">
          {data.sections.map((item: string, index: number) => (
            <div
              key={index}
              className="border rounded-lg p-4 hover:shadow-sm transition bg-white"
            >
              <span className="text-gray-700 text-sm">
                • {item}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}