```tsx
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Shield, TrendingUp, Target } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function OperationalExcellencePage() {
  const processServices = [
    "Business process mapping",
    "Workflow redesign",
    "Process efficiency assessment",
    "Cost reduction initiatives",
    "Resource optimization",
    "Bottleneck identification",
    "Standard Operating Procedures (SOPs)",
    "Performance improvement plans",
  ]

  const performanceServices = [
    "KPI development and monitoring",
    "Operational performance reviews",
    "Continuous improvement frameworks",
    "Risk and control enhancement",
    "Productivity measurement",
    "Management reporting systems",
    "Change management support",
    "Operational governance frameworks",
  ]

  const benefits = [
    "Practical business improvement expertise",
    "Data-driven decision making",
    "Focus on measurable outcomes",
    "Industry-specific operational insights",
    "Process and performance optimization",
    "Sustainable improvement strategies",
  ]

  const industries = [
    "Manufacturing",
    "Infrastructure",
    "Construction",
    "Retail & Distribution",
    "Healthcare",
    "Technology",
    "Professional Services",
    "Growing Businesses",
  ]

  const framework = [
    "Assess",
    "Analyze",
    "Improve",
    "Implement",
    "Monitor",
    "Sustain",
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/operational-hero.jpg"
            alt="Operational Excellence"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Operational Excellence Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="max-w-3xl text-lg text-white/85"
          >
            Helping organizations improve efficiency, optimize
            processes, reduce operational costs, and build
            sustainable business performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              <Link href="/contact">
                Request Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-gray-700 leading-relaxed mb-6">
            In today’s competitive environment, organizations must
            continuously improve processes, eliminate inefficiencies,
            and maximize value delivered to customers and stakeholders.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Our Operational Excellence Services help businesses
            streamline operations, strengthen systems, improve
            productivity, and establish a culture of continuous
            improvement.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We work closely with leadership teams to identify
            opportunities, implement practical solutions, and
            achieve measurable operational results.
          </p>
        </div>
      </section>

      {/* Service 1 */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="/images/process-optimization.jpg"
            alt="Process Optimization"
            className="rounded-2xl shadow-xl"
          />

          <div>
            <div className="flex items-center gap-3 mb-5">
              <TrendingUp className="h-8 w-8 text-orange-500" />
              <h2 className="text-3xl font-bold">
                Business Process Optimization
              </h2>
            </div>

            <p className="text-gray-600 mb-6">
              We evaluate business processes and identify
              opportunities to improve efficiency, reduce waste,
              optimize resources, and strengthen performance.
            </p>

            <ul className="space-y-3">
              {processServices.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service 2 */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Target className="h-8 w-8 text-orange-500" />
              <h2 className="text-3xl font-bold">
                Performance & Continuous Improvement
              </h2>
            </div>

            <p className="text-gray-600 mb-6">
              Sustainable operational excellence requires
              continuous monitoring, accountability, and
              performance improvement across all functions.
            </p>

            <ul className="space-y-3">
              {performanceServices.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <img
            src="/images/performance-improvement.jpg"
            alt="Performance Improvement"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Framework */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Our Operational Excellence Framework
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-14">
            A structured methodology focused on continuous
            improvement and measurable business outcomes.
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {framework.map((step, index) => (
              <div
                key={step}
                className="bg-white border rounded-xl p-6 shadow-sm"
              >
                <div className="h-12 w-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mx-auto mb-4">
                  {index + 1}
                </div>

                <h3 className="font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            {benefits.map((item) => (
              <div key={item} className="flex gap-3">
                <Shield className="h-5 w-5 text-orange-500 mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <div
                key={industry}
                className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Build a High-Performance Organization
          </h2>

          <p className="text-gray-600 mb-8">
            Unlock operational efficiency, improve business
            performance, and create sustainable competitive
            advantage through our Operational Excellence Services.
          </p>

          <Button
            asChild
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
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
