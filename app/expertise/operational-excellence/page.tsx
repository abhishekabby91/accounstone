"use client"

import Link from "next/link"
import {
  Workflow,
  Bot,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Layers,
  Gauge,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Workflow,
    title: "Process Optimization",
    desc: "Streamline workflows, eliminate inefficiencies, and standardize execution across teams.",
  },
  {
    icon: Bot,
    title: "Automation Systems",
    desc: "Deploy intelligent automation to reduce manual work and improve operational speed.",
  },
  {
    icon: BarChart3,
    title: "Performance Intelligence",
    desc: "Real-time dashboards and KPIs that drive data-backed decision making.",
  },
  {
    icon: ShieldCheck,
    title: "Governance & Control",
    desc: "Build structured governance models ensuring compliance and consistency.",
  },
]

const benefits = [
  "Reduce operational costs by up to 40%",
  "Increase delivery speed and efficiency",
  "Improve cross-team alignment",
  "Enhance visibility across processes",
  "Minimize operational risks",
]

export default function OperationalExcellencePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-linear-to-r from-slate-950 via-slate-900 to-blue-950 text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.4),transparent_60%)]" />

        <div className="max-w-7xl mx-auto px-6 py-24 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-blue-300 mb-4">
              <Layers className="w-5 h-5" />
              <span className="text-sm tracking-widest uppercase">
                Operational Excellence
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Build scalable, efficient, and intelligent operations
            </h1>

            <p className="mt-6 text-lg text-slate-300">
              Transform your business operations with structured systems, automation,
              and performance intelligence designed for enterprise-scale growth.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Strategy Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>

              <Link href="/contact">
                <Button variant="outline" className="text-white border-white/30">
                  Talk to Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE STATS */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            { label: "Efficiency Gain", value: "40%" },
            { label: "Cost Reduction", value: "35%" },
            { label: "Process Automation", value: "70%" },
          ].map((item, i) => (
            <Card key={i} className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <p className="text-3xl font-bold text-blue-600">{item.value}</p>
                <p className="text-slate-600 mt-2">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold">Core Capabilities</h2>
            <p className="text-slate-600 mt-3">
              A structured approach to operational transformation built for scale.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <Card key={i} className="rounded-2xl hover:shadow-md transition">
                <CardContent className="p-6">
                  <f.icon className="w-8 h-8 text-blue-600" />
                  <h3 className="font-semibold mt-4">{f.title}</h3>
                  <p className="text-sm text-slate-600 mt-2">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <Gauge className="w-5 h-5" />
              <span className="uppercase text-sm tracking-widest">
                Methodology
              </span>
            </div>

            <h2 className="text-3xl font-bold">
              A structured 4-step operational transformation model
            </h2>

            <p className="mt-4 text-slate-300">
              We follow a proven framework designed to analyze, optimize, automate,
              and scale your business operations.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Diagnose operational bottlenecks",
                "Redesign processes for efficiency",
                "Implement automation systems",
                "Continuously monitor performance",
              ].map((step, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-200">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <Sparkles className="w-10 h-10 text-blue-400" />

            <h3 className="text-xl font-semibold mt-4">
              Enterprise Impact
            </h3>

            <p className="text-slate-300 mt-3">
              Operational excellence directly improves profitability, scalability,
              and customer satisfaction across all business units.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <div className="bg-slate-900 p-4 rounded-xl">
                <p className="text-2xl font-bold text-blue-400">2-3x</p>
                <p className="text-xs text-slate-400">Faster Delivery</p>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl">
                <p className="text-2xl font-bold text-blue-400">-50%</p>
                <p className="text-xs text-slate-400">Operational Waste</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold">
            Ready to transform your operations?
          </h2>
          <p className="text-slate-600 mt-4">
            Build a scalable operational backbone for your business with GrowthVerse strategy systems.
          </p>

          <div className="mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Start Transformation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

    </main>
  )
}