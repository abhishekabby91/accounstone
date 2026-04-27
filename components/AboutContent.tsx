'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Target,
  Eye,
  Award,
  Users,
  Shield,
  Lightbulb,
} from 'lucide-react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function AboutContent() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">
              About AU Corporate
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="text-[#081a42]">Growing Together</span>,
              <span className="text-gold"> Building in India</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-6">
              AU Corporate is an esteemed firm based in New Delhi with a diversified team of Chartered Accountants, CPAs, Company Secretaries, Cost Accountants, Lawyers, Industry Specialists, Ex-Bankers, and MBAs.
            </p>

            <p className="text-muted-foreground mb-6">
              Established in 2016, we provide innovative solutions to complex business challenges and act as a catalyst for our clients' growth across India.
            </p>

            <Button className="bg-gold text-black px-6 py-3">
              <Link href="/contact">
                Know More <ArrowRight className="inline ml-2" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/about-image.jpg"
              alt="AU Corporate"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Vision Mission Why */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-8">
          {[{
            icon: Eye,
            title: 'Our Vision',
            text: 'To fulfill every client requirement through tailored solutions while continuously evolving with market trends and maintaining ethical business practices.'
          }, {
            icon: Target,
            title: 'Our Mission',
            text: 'To maximize client value and future opportunities by delivering high-quality, value-driven services with strong professional ethics.'
          }, {
            icon: Award,
            title: 'Why AU?',
            text: 'We uphold integrity, confidentiality, and excellence with dedicated experts and a strong track record of satisfied clients.'
          }].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 bg-white rounded-xl border hover:shadow-xl transition"
            >
              <item.icon className="text-gold mb-4" />
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            What We Do
          </motion.h2>

          <motion.p
            className="text-muted-foreground"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            Our services include India Entry Strategy, Business Setup, Accounting, Virtual CFO, Tax Advisory, FEMA & RBI Compliance, Transaction Advisory, Audit, M&A, and Litigation Support.
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-4 gap-8">
          {[{
            icon: Shield,
            title: 'Integrity',
            desc: 'Highest standards of ethics and transparency.'
          }, {
            icon: Lightbulb,
            title: 'Practical Approach',
            desc: 'Solutions tailored to Indian regulations.'
          }, {
            icon: Users,
            title: 'Client Partnership',
            desc: 'Long-term client relationships.'
          }, {
            icon: Award,
            title: 'Excellence',
            desc: 'Consistent high-quality delivery.'
          }].map((v, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className="p-6 bg-white rounded-xl border text-center hover:shadow-lg"
            >
              <v.icon className="text-gold mx-auto mb-4" />
              <h4 className="font-semibold mb-2">{v.title}</h4>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Let's Build Your India Presence
        </motion.h2>

        <motion.p
          className="text-muted-foreground mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Partner with AU Corporate for seamless advisory, compliance, and execution support.
        </motion.p>

        <Button className="bg-gold text-black px-6 py-3">
          <Link href="/contact">
            Get in Touch <ArrowRight className="inline ml-2" />
          </Link>
        </Button>
      </section>
    </div>
  )
}
