```tsx
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

import {
  ArrowRight,
  CheckCircle2,
  Shield,
  TrendingUp,
  Target,
} from "lucide-react"

export default function OperationalExcellencePage() {
  return (
    <div className="min-h-screen pt-20">

      {/* ================= HERO ================= */}
      <section className="relative py-24 min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000"
            alt="Operational Excellence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Operational Excellence Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-3xl text-lg"
          >
            Helping organizations improve efficiency, optimize processes,
            reduce operational costs, and build sustainable business
            performance through structured operational excellence initiatives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-300">
              <Link href="/contact">
                Request Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gray-700 leading-relaxed mb-6"
          >
            In today’s competitive business environment, organizations must
            continuously improve processes, eliminate inefficiencies, and
            maximize value delivered to customers and stakeholders.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-700 leading-relaxed mb-6"
          >
            Our Operational Excellence Services help businesses streamline
            operations, strengthen internal systems, improve productivity,
            and create a culture of continuous improvement across the
            organization.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-700 leading-relaxed"
          >
            We work closely with leadership teams to identify improvement
            opportunities, implement practical solutions, and achieve
            measurable operational results.
          </motion.p>

        </div>
      </section>

      {/* ================= SERVICE 1 ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200"
              alt="Business Process Optimization"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-yellow-500" />
              <h2 className="text-3xl font-bold">
                Business Process Optimization
              </h2>
            </div>

            <p className="text-gray-600 mb-6">
              We evaluate existing business processes and identify
              opportunities to improve efficiency, reduce waste,
              optimize resources, and strengthen operational performance.
            </p>

            <ul className="space-y-3 text-gray-600">
              {[
                "Business process mapping",
                "Workflow redesign",
                "Process efficiency assessment",
                "Cost reduction initiatives",
                "Resource optimization",
                "Bottleneck identification",
                "Standard Operating Procedures (SOPs)",
                "Performance improvement plans",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-0.5" />
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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-yellow-500" />
              <h2 className="text-3xl font-bold">
                Performance & Continuous Improvement
              </h2>
            </div>

            <p className="text-gray-600 mb-6">
              Sustainable operational excellence requires continuous
              monitoring, accountability, and performance improvement
              across all business functions.
            </p>

            <ul className="space-y-3 text-gray-600">
              {[
                "KPI development and monitoring",
                "Operational performance reviews",
                "Continuous improvement frameworks",
                "Risk and control enhancement",
                "Productivity measurement",
                "Management reporting systems",
                "Change management support",
                "Operational governance frameworks",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
              alt="Performance Improvement"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>

        </div>
      </section>

      {/* ================= FRAMEWORK ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Our Operational Excellence Framework
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-16">
            A structured methodology focused on continuous improvement
            and measurable business outcomes.
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">

            {[
              "Assess",
              "Analyze",
              "Improve",
              "Implement",
              "Monitor",
              "Sustain",
            ].map((step, index) => (
              <div
                key={step}
                className="bg-white rounded-xl p-6 shadow-sm border"
              >
                <div className="w-12 h-12 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold">{step}</h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">

            {[
              "Practical business improvement expertise",
              "Data-driven decision making",
              "Focus on measurable outcomes",
              "Industry-specific operational insights",
              "Process and performance optimization",
              "Sustainable improvement strategies",
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold mb-12">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Manufacturing",
              "Infrastructure",
              "Construction",
              "Retail & Distribution",
              "Healthcare",
              "Technology",
              "Professional Services",
              "Growing Businesses",
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition"
              >
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-white">
        <div className="max-w-3xl mx-auto px-4">

          <h2 className="text-4xl font-bold mb-4">
            Build a High-Performance Organization
          </h2>

          <p className="text-gray-600 mb-8">
            Unlock operational efficiency, improve business performance,
            and create sustainable competitive advantage through our
            Operational Excellence Services.
          </p>

          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-300">
            <Link href="/contact">
              Speak to an Expert
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

        </div>
      </section>

    </div>
  )
}
```
