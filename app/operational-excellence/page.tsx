"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

import {
  ArrowRight,
  CheckCircle2,
  Scale,
  FileText,
  Shield,
} from "lucide-react"

export default function ArbitrationServicesPage() {
  return (
    <div className="min-h-screen pt-20">

      {/* ================= HERO ================= */}
      <section className="relative py-24 min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Arbitration Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-2xl"
          >
            Structured financial expertise to support claims, disputes, and arbitration proceedings with clarity and precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6"
          >
            <Button asChild className="bg-yellow-400 text-black">
              <Link href="/contact">
                Request Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gray-700 leading-relaxed mb-6"
          >
            Disputes involving contracts, accounts, valuations, delayed payments, partnerships, commercial transactions, and financial claims often require clear financial analysis and structured presentation of facts.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-700 leading-relaxed mb-6"
          >
            Our Arbitration Services are designed to support businesses, professionals, and legal teams with accurate financial expertise during arbitration proceedings.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-700 leading-relaxed"
          >
            We provide independent, professional, and well-documented assistance to help clients present claims, defend positions, and strengthen their case with credible financial evidence.
          </motion.p>

        </div>
      </section>

      {/* ================= SERVICE 1 ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <img
              src="https://images.unsplash.com/photo-1554224154-26032ffc0d07"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              1. Arbitration Claim Preparation
            </h2>

            <p className="text-gray-600 mb-4">
              A well-prepared claim is critical in any arbitration matter. We assist clients in organizing financial records, quantifying losses, and preparing a clear claim supported by facts and calculations.
            </p>

            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "Review of contracts, invoices, ledgers",
                "Quantification of claims & damages",
                "Interest & delayed payment analysis",
                "Reconciliation of accounts",
                "Claim statements & schedules",
                "Breach-related financial impact",
                "Response to counterclaims",
                "Coordination with legal counsel",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="text-yellow-500 w-4 h-4 mt-1" />
                  {item}
                </li>
              ))}
            </ul>

          </motion.div>

        </div>
      </section>

      {/* ================= SERVICE 2 ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              2. Arbitration Expert Witness Services
            </h2>

            <p className="text-gray-600 mb-4">
              Financial disputes often require expert opinion on accounting, valuation, damages, or commercial losses.
            </p>

            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "Independent expert reports",
                "Loss of profit & damages",
                "Business & asset valuation",
                "Review of opposing claims",
                "Transaction analysis",
                "Accounting opinions",
                "Hearing assistance",
                "Oral testimony support",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="text-yellow-500 w-4 h-4 mt-1" />
                  {item}
                </li>
              ))}
            </ul>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto px-4">

          <h2 className="text-3xl font-bold mb-10">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-left">

            {[
              "Strong expertise in accounting & finance",
              "Practical dispute understanding",
              "Independent & objective approach",
              "Evidence-backed financial analysis",
              "Confidential handling",
              "Timely execution",
            ].map((point) => (
              <div key={point} className="flex gap-3">
                <Shield className="text-yellow-500 mt-1" />
                <p>{point}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-3xl font-bold mb-10">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Manufacturing",
              "Real Estate & Construction",
              "Trading & Distribution",
              "Professional Services",
              "Infrastructure",
              "Partnership Disputes",
              "MSMEs",
              "Growing Businesses",
            ].map((item) => (
              <div key={item} className="p-4 border rounded-lg">
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">
          Confidential & Professional Support
        </h2>

        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          We work closely with clients and legal professionals while maintaining strict confidentiality and high professional standards.
        </p>

        <Button asChild className="bg-yellow-400 text-black">
          <Link href="/contact">
            Speak to an Expert <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>

    </div>
  )
}