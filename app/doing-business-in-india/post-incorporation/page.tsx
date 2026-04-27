"use client"

import { motion } from "framer-motion"

const sections = [
  {
    title: "Accounting & Financial Management",
    description:
      "Establishing a robust accounting framework is critical for compliance, transparency, and decision-making in India.",
    services: [
      {
        title: "Accounting Services",
        desc: "End-to-end bookkeeping and accounting support ensuring accuracy and regulatory compliance.",
      },
      {
        title: "MIS Reporting",
        desc: "Periodic management reports providing insights for strategic and operational decisions.",
      },
      {
        title: "Financial Statement Preparation",
        desc: "Preparation of financial statements in accordance with Indian and international standards.",
      },
      {
        title: "Payroll Management",
        desc: "Comprehensive payroll processing including salaries, tax deductions, and statutory compliance.",
      },
      {
        title: "Accounting System Setup",
        desc: "Implementation of scalable accounting systems aligned with business operations.",
      },
    ],
  },
  {
    title: "HR & Expatriate Support",
    description:
      "Managing workforce and expatriate employees effectively is key for smooth business operations in India.",
    services: [
      {
        title: "Expatriate Taxation & Compliance",
        desc: "Managing tax filings and compliance for foreign employees in India.",
      },
      {
        title: "HR Compliance",
        desc: "Ensuring compliance with Indian employment laws and regulations.",
      },
      {
        title: "Payroll Structuring",
        desc: "Designing tax-efficient salary structures for employees.",
      },
      {
        title: "Employee Lifecycle Management",
        desc: "Support across hiring, onboarding, and exit processes.",
      },
    ],
  },

  {
    title: "Taxation & Regulatory Compliance",
    description:
      "India has a dynamic tax environment requiring structured planning and ongoing compliance management.",
    services: [
      {
        title: "International Taxation Advisory",
        desc: "Advisory and litigation support for cross-border tax matters and structuring.",
      },
      {
        title: "Transfer Pricing Services",
        desc: "Ensuring arm’s length compliance and maintaining robust documentation.",
      },
      {
        title: "Advance Pricing Agreements (APA)",
        desc: "Assistance in APA planning to achieve tax certainty and avoid disputes.",
      },
      {
        title: "Corporate Tax Advisory",
        desc: "Strategic tax planning to optimise effective tax rates.",
      },
      {
        title: "Income Tax Litigation",
        desc: "Handling tax disputes, assessments, and appellate proceedings.",
      },
      {
        title: "DTAA Advisory",
        desc: "Optimising cross-border taxation through treaty benefits.",
      },
      {
        title: "Direct Tax Compliance",
        desc: "Accurate filing of income tax returns and regulatory reporting.",
      },
      {
        title: "GST Compliance",
        desc: "End-to-end GST filings, reconciliations, and compliance management.",
      },
      {
        title: "GST Advisory",
        desc: "Expert opinions on complex GST issues and structuring.",
      },
      {
        title: "GST Litigation",
        desc: "Representation in GST disputes and departmental proceedings.",
      },
      {
        title: "GST Refund",
        desc: "Efficient handling of refund claims and follow-ups.",
      },
      {
        title: "GST Audit & Annual Returns",
        desc: "Preparation and filing of annual GST returns and audits.",
      },
      {
        title: "FEMA Compliance",
        desc: "Ensuring adherence to foreign exchange laws and RBI regulations.",
      },
    ],
  },

  {
    title: "Legal & Secretarial Compliance",
    description:
      "Companies operating in India must comply with corporate laws, secretarial requirements, and legal frameworks.",
    services: [
      {
        title: "Corporate Secretarial Services",
        desc: "Managing board meetings, filings, and compliance under Companies Act.",
      },
      {
        title: "Statutory Registrations",
        desc: "Ensuring all required licenses and registrations are obtained and maintained.",
      },
      {
        title: "SEBI Compliance",
        desc: "Regulatory compliance support for listed entities and capital markets.",
      },
      {
        title: "IPR Services",
        desc: "Protection and registration of intellectual property rights.",
      },
      {
        title: "Labour Law Compliance",
        desc: "Advisory and compliance under employment and labour laws.",
      },
      {
        title: "Contract Management",
        desc: "Drafting, reviewing, and managing business agreements.",
      },
      {
        title: "Corporate Legal Advisory",
        desc: "Ongoing legal support for business operations and structuring.",
      },
    ],
  },
]

export default function PostIncorporationPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="bg-[#081a42] text-white py-20 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-4xl font-bold mb-4">
            Post-Incorporation Services
          </h1>
          <p className="max-w-3xl mx-auto text-white/80">
            Once your business is established in India, ongoing compliance,
            financial management, and regulatory adherence become critical.
            AU Corporate provides comprehensive post-incorporation support to
            ensure smooth operations, risk mitigation, and sustainable growth.
          </p>
        </motion.div>
      </section>

      {/* SECTIONS */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          {sections.map((sec) => (
            <div key={sec.title}>

              <h2 className="text-2xl font-semibold text-[#081a42] mb-2">
                {sec.title}
              </h2>

              <p className="text-gray-600 mb-6">
                {sec.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">

                {sec.services.map((service) => (
                  <div
                    key={service.title}
                    className="border rounded-xl p-5 hover:shadow-md transition"
                  >
                    <h3 className="font-semibold mb-2 text-[#081a42]">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {service.desc}
                    </p>
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Stay Compliant. Scale Confidently.
        </h2>
        <p className="text-gray-600 mb-6">
          We manage your compliance so you can focus on growing your business in India.
        </p>
        <button className="bg-[#081a42] text-white px-6 py-3 rounded-lg">
          Talk to Experts
        </button>
      </section>

    </div>
  )
}