"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from "framer-motion"

import {
  ArrowRight,
  Calculator,
  Headphones,
  Database,
  TrendingUp,
  CheckCircle2,
  Globe,
  Clock,
  Users,
  Zap,
  BarChart3
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
}

const services = [
  {
    icon: Calculator,
    title: 'Finance & Accounting BPO',
    description: 'Complete finance and accounting outsourcing from bookkeeping to financial analysis.',
    features: [
      'Accounts payable/receivable',
      'Financial reporting',
      'Reconciliation services',
      'Month-end close support',
      'Financial analysis',
    ],
  },
  {
    icon: Database,
    title: 'Back Office Operations',
    description: 'Streamlined back-office services to enhance operational efficiency.',
    features: [
      'Data entry and management',
      'Document processing',
      'Records management',
      'Administrative support',
      'Order processing',
    ],
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    description: 'Multi-channel customer support services to enhance customer experience.',
    features: [
      'Inbound/outbound support',
      'Technical helpdesk',
      'Email support',
      'Chat support',
      'Social media management',
    ],
  },
  {
    icon: Zap,
    title: 'Process Optimization',
    description: 'Business process reengineering and optimization for maximum efficiency.',
    features: [
      'Process assessment',
      'Workflow automation',
      'Quality assurance',
      'Continuous improvement',
      'Performance monitoring',
    ],
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Cost Efficiency',
    value: '40-60%',
    description: 'Reduce operational costs while maintaining quality standards.',
  },
  {
    icon: Clock,
    title: '24/7 Operations',
    value: '24/7',
    description: 'Round-the-clock operations for continuous business support.',
  },
  {
    icon: Users,
    title: 'Skilled Workforce',
    value: '500+',
    description: 'Access to trained professionals across various domains.',
  },
  {
    icon: BarChart3,
    title: 'Scalability',
    value: '3x',
    description: 'Flexible scaling to meet your business demands.',
  },
]

const industries = [
  'Financial Services',
  'Healthcare',
  'Retail & E-commerce',
  'Technology',
  'Manufacturing',
]

const software = [
  {
    name: "QuickBooks",
    logo: "https://cdn.corenexis.com/files/c/6948898720.png",
  },
  {
    name: "Xero",
    logo: "https://cdn.corenexis.com/files/c/4477229720.png",
  },
  {
    name: "Zoho Books",
    logo: "https://cdn.corenexis.com/files/c/1937144720.jpg",
  },
  {
    name: "SAP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
  },
  {
    name: "Oracle NetSuite",
    logo: "https://cdn.corenexis.com/files/c/9951218720.png",
  },
  {
    name: "Tally",
    logo: "https://cdn.corenexis.com/files/c/7416121720.png",
  },
]

export default function OutsourcingPage() {
  return (
    <div className="min-h-screen pt-20">

            {/* HERO */}
      <section className="relative py-24 min-h-[80vh] flex items-center overflow-hidden">

        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6 }}
            src="https://cdn.corenexis.com/files/c/6433487720.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" /> 
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-white">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <span className="text-gold text-sm font-semibold uppercase">
              Business Process
            </span>

            <h1 className="text-5xl font-bold mt-4 mb-6">
              Outsourcing <span className="text-gold">Solutions</span>
            </h1>

            <p className="text-white/80 mb-8 max-w-2xl">
              Scalable outsourcing solutions to optimize operations, reduce costs, and drive efficiency.
            </p>

            <div className="flex gap-4">
              <Button asChild className="bg-gold text-black">
                <Link href="/contact">Start Outsourcing</Link>
              </Button>

              <Button asChild className="bg-gold text-black">
                <Link href="/why-india">Why India</Link>
              </Button>
            </div>
          </motion.div>
        </div>

      </section> {/* ✅ HERO CLOSED HERE */}


      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-12"
          >
            Why Choose AU Corporate
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Domain Expertise",
                desc: "Deep specialization across finance, tax, and operations.",
              },
              {
                title: "Global Delivery",
                desc: "Seamless execution across multiple geographies.",
              },
              {
                title: "Technology Driven",
                desc: "Automation-first approach using modern tools.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="p-6 border rounded-xl"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">

          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-white border rounded-xl text-center"
            >
              <b.icon className="text-gold mx-auto mb-3" />
              <div className="text-2xl font-bold text-gold">{b.value}</div>
              <div>{b.title}</div>
              <p className="text-xs text-muted-foreground">{b.description}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-12">How We Work</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Understand Requirements",
              "Design Process",
              "Execute & Manage",
              "Optimize Continuously"
            ].map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="text-gold font-bold text-lg mb-2">
                  0{i + 1}
                </div>
                <p>{step}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-16">
            Comprehensive Outsourcing Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border rounded-xl bg-secondary"
              >
                <s.icon className="text-gold mb-4" />

                <h3 className="text-xl font-semibold">{s.title}</h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {s.description}
                </p>

                <ul className="space-y-2 text-sm">
                  {s.features.map(f => (
                    <li key={f} className="flex gap-2">
                      <CheckCircle2 className="text-gold w-4 h-4 mt-1" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

          </div>
        </div>
      </section>
      {/* DELIVERY MODEL */}
<section className="py-24 bg-secondary/50">
  <div className="max-w-7xl mx-auto px-4 text-center">

    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-3xl font-bold mb-12"
    >
      Our Delivery Model
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-8">

      {[
        "Strategy & Consulting",
        "Execution & Processing",
        "Monitoring & Optimization",
      ].map((step, i) => (
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          className="p-8 bg-white border rounded-xl"
        >
          <div className="text-gold font-bold text-xl mb-2">
            0{i + 1}
          </div>
          <p>{step}</p>
        </motion.div>
      ))}

    </div>
  </div>
</section>

      {/* SOFTWARE EXPERTISE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Accounting & Tax Software Expertise
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            We work with leading global accounting and tax platforms for seamless compliance and reporting.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">

            {software.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 bg-gray-50 border rounded-xl flex items-center justify-center hover:shadow-md transition"
              >
                <img
                  src={s.logo}
                  alt={s.name}
                  className="h-10 object-contain grayscale hover:grayscale-0 transition"
                />
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-12">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-5 gap-4 text-center">

            {industries.map(i => (
              <div key={i} className="p-4 bg-white border rounded-lg">
                <Globe className="mx-auto text-gold mb-2" />
                {i}
              </div>
            ))}

          </div>

        </div>
      </section>
{/* RESULTS */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 text-center">

    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-3xl font-bold mb-12"
    >
      Proven Results
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-8">

      {[
        { value: "60%", label: "Cost Reduction" },
        { value: "3x", label: "Efficiency Increase" },
        { value: "99%", label: "Accuracy" },
      ].map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.2 }}
          className="p-8 border rounded-xl"
        >
          <div className="text-3xl font-bold text-gold mb-2">
            {item.value}
          </div>
          <p>{item.label}</p>
        </motion.div>
      ))}

    </div>
  </div>
</section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Optimize Your Operations?
        </h2>

        <Button asChild className="bg-gold text-black">
          <Link href="/contact">
            Get Started <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </section>

    </div>
  )
}