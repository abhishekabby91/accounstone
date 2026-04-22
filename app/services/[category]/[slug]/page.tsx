import { notFound } from "next/navigation"

const servicesData: Record<string, any> = {
  "risk-management": {
    "internal-audit": {
      title: "Internal Audit",
      items: [
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
      items: [
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
      items: [
        "Project Audit",
        "Concurrent Audit / Pre-Audit",
        "Fixed Asset Management and Verification",
        "Inventory Control and Stock Audit Service",
        "Agency for Specialized Monitoring (ASM) Mechanism",
      ],
    },
  },

  "taxation-regulatory": {
    "direct-taxation": {
      title: "Direct Taxation",
      items: [
        "International Taxation Services",
        "Advance Pricing Agreement (APA)",
        "Transfer Pricing Services",
        "Corporate Tax",
        "Trust, Family Office & Succession Planning",
      ],
    },

    "gst": {
      title: "Goods & Service Tax",
      items: [
        "GST Registration",
        "GST Compliance",
        "GST Litigation Handling and Advisory Services",
        "GST Refund and Demand Settlement",
        "GST E-Invoice and E-Way Bill",
        "GST Health Check-Up",
        "GST Annual Return and GST Audit",
      ],
    },

    "regulatory-services": {
      title: "Regulatory Services",
      items: [
        "FEMA Compliance Services",
        "FCRA Registration",
        "Trade License Registration",
        "FSSAI Registration",
        "MSME Registration",
        "Import Export Code (IEC) Registration",
      ],
    },

    "secretarial-legal": {
      title: "Secretarial & Legal",
      items: [
        "Company Incorporation & Statutory Registrations",
        "Corporate Secretarial Services",
        "SEBI Compliance Services",
        "Intellectual Property Rights (IPR)",
        "Labour Law Services",
        "Contract Management Services",
        "Corporate Legal Advisory Services",
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

        {/* DESCRIPTION BLOCK */}
        <p className="text-gray-600 mb-10">
          AU Corporate provides expert advisory and compliance solutions across
          taxation, risk, regulatory and governance domains.
        </p>

        {/* LIST */}
        <div className="grid md:grid-cols-2 gap-4">
          {data.items.map((item: string, index: number) => (
            <div
              key={index}
              className="border rounded-lg p-4 hover:shadow-sm transition"
            >
              • {item}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}