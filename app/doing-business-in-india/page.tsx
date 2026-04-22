"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"

/* ================= MAIN CONTENT SECTIONS ================= */
const sections = [
  {
    title: "Doing Business in India – Overview",
    content: `
India is one of the fastest-growing major economies globally, offering a large consumer base, skilled workforce, and strong digital infrastructure.

However, entering the Indian market requires structured planning due to regulatory complexity, tax framework, and cultural diversity.

Key highlights:
• Large domestic market with 1.4B+ population  
• Strong IT and services ecosystem  
• Continuous regulatory reforms  
• Attractive FDI environment  
• Rapid digital transformation  

Global investors require a well-planned entry strategy to ensure compliance and long-term success.
    `,
  },
  {
    title: "Challenges of Doing Business in India",
    content: `
While India offers strong growth opportunities, businesses must navigate a complex operating environment.

Key challenges include:

Regulatory Complexity:
Multiple central and state-level regulations requiring continuous compliance monitoring.

Taxation & Compliance:
GST, income tax, transfer pricing, and reporting obligations increase compliance burden.

Infrastructure Variations:
Logistics, transport, and utilities differ across regions impacting operational efficiency.

Cultural Diversity:
Business practices, language, and consumer behavior vary across states.

Labour Laws:
Employment laws, hiring practices, and HR compliance require local expertise.
    `,
  },
  {
    title: "Opportunities in India",
    content: `
India offers significant business opportunities across sectors:

Market Expansion:
Large and rapidly growing middle-class consumption base.

Technology Growth:
Global hub for IT, SaaS, fintech, AI, and digital services.

Manufacturing Push:
Government initiatives like “Make in India” support global manufacturing setup.

FDI Reforms:
Liberalised FDI policy in multiple sectors with simplified entry routes.

Renewable Energy:
Strong focus on solar, wind, EV, and sustainability-driven investments.

India is positioned as a strategic hub for global expansion.
    `,
  },
  {
    title: "Business Entry Structures in India",
    content: `
Foreign companies can enter India through multiple legal structures depending on their business objectives.

Branch Office:
• Revenue-generating presence  
• Export/import and consultancy activities  
• Limited operational scope  

Liaison Office:
• Non-commercial representative office  
• Market research & communication role  
• Cannot earn income  

Project Office:
• Set up for specific project execution  
• Valid only for project duration  

Wholly Owned Subsidiary:
• 100% foreign ownership  
• Separate legal entity in India  
• Most preferred structure  

LLP:
• Flexible structure with lower compliance  
• Suitable for service-based businesses  

Joint Venture:
• Strategic partnership with Indian company  
• Common in regulated sectors  
    `,
  },
  {
    title: "Regulatory & Tax Environment",
    content: `
India operates under a structured regulatory framework governed by multiple authorities.

Key laws include:
• Companies Act, 2013  
• FEMA (Foreign Exchange Management Act)  
• Income Tax Act  
• GST Law  

Regulatory bodies:
• Ministry of Corporate Affairs (MCA)  
• Reserve Bank of India (RBI)  
• DPIIT (FDI Policy authority)  

Tax framework:
• Corporate tax applicable on domestic & foreign entities  
• GST for indirect taxation  
• DTAA benefits for international businesses  
• Transfer pricing compliance for cross-border transactions  
    `,
  },
]

/* ================= AU CORPORATE SUPPORT ================= */
const helpSections = [
  {
    title: "Pre-Incorporation Support",
    services: [
      "Market entry strategy & feasibility analysis",
      "Entity structure selection (BO / LO / WOS / LLP)",
      "Regulatory & tax planning advisory",
      "Name approval & documentation guidance",
    ],
  },
  {
    title: "Incorporation",
    services: [
      "Company / LLP registration with MCA",
      "RBI / FEMA approvals (if applicable)",
      "End-to-end documentation & filing",
      "Government liaison & approvals",
    ],
  },
  {
    title: "Post-Incorporation",
    services: [
      "Tax registrations (PAN, TAN, GST)",
      "Accounting & bookkeeping setup",
      "Payroll & HR compliance",
      "Regulatory & annual filings",
    ],
  },
]

export default function WhyIndiaPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">

        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            src="https://cdn.corenexis.com/files/c/3298128720.jpg"
            alt="India Business"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        <div className="relative max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >

            <span className="text-yellow-400 text-sm tracking-widest">
              GLOBAL EXPANSION
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Doing Business in India
            </h1>

            <p className="mt-4 text-white/80 text-lg">
              India offers unmatched opportunities for global businesses, but requires structured entry planning, compliance, and regulatory understanding.
            </p>

            <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:scale-105 transition">
              Start Your Expansion <ArrowRight size={16} />
            </button>

          </motion.div>

        </div>
      </section>

      {/* ================= ACCORDION ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 space-y-5">

          {sections.map((sec, i) => {
            const isOpen = openIndex === i

            return (
              <motion.div
                key={sec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border rounded-2xl overflow-hidden shadow-sm"
              >

                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-center p-5 hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-[#081a42]">
                    {sec.title}
                  </span>

                  <ChevronDown
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                        {sec.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            )
          })}

        </div>
      </section>

      {/* ================= AU SUPPORT ================= */}
      <section className="py-24 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-[#081a42] mb-14">
            How AU Corporate Supports You
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {helpSections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 border rounded-2xl p-6 hover:shadow-xl transition"
              >

                <h3 className="font-semibold text-[#081a42] mb-4">
                  {section.title}
                </h3>

                <ul className="space-y-3 text-sm text-gray-600">
                  {section.services.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-yellow-500">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-[#081a42] text-white text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto px-6"
        >

          <h2 className="text-3xl font-bold mb-4">
            Ready to Expand into India?
          </h2>

          <p className="text-white/70 mb-6">
            AU Corporate helps global businesses establish, comply, and scale efficiently in India.
          </p>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition">
            Talk to Experts
          </button>

        </motion.div>

      </section>

    </div>
  )
}