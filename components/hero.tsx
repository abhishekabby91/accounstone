"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, PlayCircle } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              Global Growth Advisory for Accounting Firms
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
              Scale Your
              <span className="text-blue-400">
                {" "}Accounting Firm
              </span>
              <br />
              Globally
            </h1>

            <p className="mt-8 text-xl text-slate-300 max-w-2xl">
              Helping accounting firms build high-performance global teams,
              improve operational excellence, and expand into India through
              the ONEGD™ Framework.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 transition"
              >
                Schedule Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/insights"
                className="inline-flex items-center rounded-xl border border-slate-700 px-8 py-4 font-semibold hover:bg-slate-800 transition"
              >
                Explore Insights
              </Link>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16">

              <div>
                <h3 className="text-3xl font-bold text-blue-400">
                  100+
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  Growth Projects
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-orange-400">
                  20+
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  Countries Served
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-cyan-400">
                  500+
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  Offshore Professionals
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">

              <div className="border-b border-white/10 pb-6">
                <h3 className="text-2xl font-bold">
                  ONEGD™ Framework
                </h3>

                <p className="text-slate-400 mt-2">
                  One Global Delivery Framework for accounting firms.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">

                {[
                  "Talent",
                  "Operations",
                  "Technology",
                  "Governance",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-white/5 border border-white/10 p-5 text-center hover:bg-white/10 transition"
                  >
                    <p className="font-semibold">
                      {item}
                    </p>
                  </div>
                ))}

              </div>

              <div className="mt-10 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 p-6">

                <div className="flex items-center justify-between">

                  <div>
                    <h4 className="font-bold text-lg">
                      Coffee With Dhawan
                    </h4>

                    <p className="text-sm text-white/80">
                      Podcast & Leadership Insights
                    </p>
                  </div>

                  <Link href="/podcast">
                    <PlayCircle className="h-10 w-10" />
                  </Link>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}