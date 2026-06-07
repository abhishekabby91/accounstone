'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Globe,
  TrendingUp,
  Users,
  Shield,
  Lightbulb,
  Building2,
} from 'lucide-react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function AboutHero() {
  return (
    <div className="min-h-screen pt-20">

      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
              About 808 Strategy
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
              Building High-Performance
              <span className="text-blue-600">
                {" "}Global Accounting Firms
              </span>
            </h1>

            <p className="text-lg text-slate-600 mb-6">
              808 Strategy helps accounting firms scale through operational excellence,
              offshore talent strategies, and India expansion.
            </p>

            <p className="text-slate-600 mb-8">
              Founded by Gaurav Dhawan, 808 Strategy provides practical
              advisory, proven frameworks, and strategic guidance to help
              accounting firms overcome talent shortages, improve profitability,
              and build scalable global delivery capabilities.
            </p>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/contact">
                Schedule A Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/gaurav.jpg"
              alt="Gaurav Dhawan"
              width={700}
              height={800}
              className="rounded-3xl shadow-2xl object-cover"
            />
          </motion.div>

        </div>
      </section>

      {/* Mission / Positioning */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-8">

          {[
            {
              icon: TrendingUp,
              title: 'Firm Growth',
              text: 'Helping accounting firms improve profitability, scalability, and operational performance.',
            },
            {
              icon: Users,
              title: 'Global Talent',
              text: 'Building high-performing offshore teams and scalable delivery organizations.',
            },
            {
              icon: Globe,
              title: 'India Expansion',
              text: 'Supporting firms with India strategy, GCC planning, and long-term growth initiatives.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border hover:shadow-xl transition"
            >
              <item.icon className="h-10 w-10 text-blue-600 mb-5" />

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-slate-600">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ONEGD Framework */}
      <section className="py-24 bg-white">

        <div className="mx-auto max-w-5xl px-4 text-center">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-4xl font-bold mb-6"
          >
            The ONEGD Framework
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-slate-600 max-w-3xl mx-auto"
          >
            ONEGD (One Global Delivery) is the proprietary framework
            developed to help accounting firms build scalable global
            operations through Talent, Operations, Technology, and Governance.
          </motion.p>

        </div>

        <div className="mx-auto max-w-7xl px-4 mt-16 grid md:grid-cols-4 gap-8">

          {[
            {
              icon: Users,
              title: 'Talent',
              desc: 'Hiring, leadership, retention and team development.',
            },
            {
              icon: Building2,
              title: 'Operations',
              desc: 'Process optimization and scalable delivery models.',
            },
            {
              icon: Lightbulb,
              title: 'Technology',
              desc: 'Automation, cloud systems and AI adoption.',
            },
            {
              icon: Shield,
              title: 'Governance',
              desc: 'Security, compliance and performance management.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className="border rounded-2xl p-8 text-center hover:shadow-lg transition"
            >
              <item.icon className="mx-auto h-10 w-10 text-blue-600 mb-4" />

              <h4 className="font-bold text-lg mb-2">
                {item.title}
              </h4>

              <p className="text-sm text-slate-600">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-950 text-center text-white">

        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Ready to Scale Your Accounting Firm?
        </motion.h2>

        <motion.p
          className="text-slate-300 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Explore how operational excellence, global talent strategies,
          and India expansion can accelerate sustainable growth.
        </motion.p>

        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Link href="/contact">
            Schedule A Strategy Call
            <ArrowRight className="ml-2 h-4 w-4 inline" />
          </Link>
        </Button>

      </section>

    </div>
  )
}