"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Target,
  Eye,
  Award,
  Users,
  Building,
  Globe,
} from "lucide-react"
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
}

export default function AboutHero() {
  return (
    <div className="min-h-screen pt-20">

      {/* HERO */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-12 items-center">

          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">
              About Us
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              AU Corporate – Trusted Advisory Partner
            </h1>

            <p className="text-muted-foreground mb-4">
              AU Corporate is an esteemed multidisciplinary consultancy firm based in New Delhi with a diversified team of Chartered Accountants, CPAs, Company Secretaries, Cost Accountants, Lawyers, Industry Specialists, Ex-Bankers, and MBAs.
            </p>

            <p className="text-muted-foreground mb-6">
              Established in 2016, we provide innovative solutions to complex business challenges and act as a catalyst for the business growth of our clients across India and globally.
            </p>

            <Link href="/contact">
              <Button className="bg-gold text-black px-6 py-3">
                Get in Touch <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Image
              src="/about-image.jpg"
              alt="About AU Corporate"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-12 items-center">

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-muted-foreground mb-4">
              AU Corporate was established with a vision to provide innovative, practical, and result-oriented solutions to businesses facing complex regulatory and operational challenges.
            </p>
            <p className="text-muted-foreground">
              With deep domain expertise and a client-first approach, we serve as a strategic partner for businesses looking to establish, operate, and scale in India.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} initial="hidden" whileInView="visible">
            <Image
              src="/about2.jpg"
              alt="Team work"
              width={500}
              height={350}
              className="rounded-xl shadow"
            />
          </motion.div>

        </div>
      </section>

      {/* VISION MISSION WHY */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-10">

          {/* Vision */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="p-8 border rounded-xl hover:shadow-xl">
            <Image src="/vision.jpg" alt="Vision" width={400} height={200} className="rounded mb-4" />
            <Eye className="text-gold mb-3" />
            <h3 className="font-bold text-lg mb-2">Our Vision</h3>
            <p className="text-sm text-muted-foreground">
              Our Vision is to fulfil the requirements of every customer by offering them individually tailored solutions for their businesses. Our primary objective is to become an all-encompassing resource for each of our clients' accounting, taxation, and various other needs while simultaneously evolving our company necessary for maintaining up with constantly changing trends in the market. We enthusiastically endorse ethical business conduct and continuous professional development.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="p-8 border rounded-xl hover:shadow-xl">
            <Image src="/mission.jpg" alt="Mission" width={400} height={200} className="rounded mb-4" />
            <Target className="text-gold mb-3" />
            <h3 className="font-bold text-lg mb-2">Our Mission</h3>
            <p className="text-sm text-muted-foreground">
              Our mission is to maximise our clients' value while simultaneously helping them enhance their future business opportunities. We accomplish this by adding professional value to every service we execute while ensuring strong alignment, ethics, quality, and long-term relationships.
            </p>
          </motion.div>

          {/* Why AU */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="p-8 border rounded-xl hover:shadow-xl">
            <Image src="/whyau.jpg" alt="Why AU" width={400} height={200} className="rounded mb-4" />
            <Award className="text-gold mb-3" />
            <h3 className="font-bold text-lg mb-2">Why AU?</h3>
            <p className="text-sm text-muted-foreground">
              As a leading multidisciplinary consultancy, AU Corporate upholds the highest levels of integrity, independence, and confidentiality. Our dedicated experts ensure excellence, while our long-standing client relationships reflect our commitment to quality and reliability.
            </p>
          </motion.div>

        </div>
      </section>

      {/* SERVICES SNAPSHOT */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-4 gap-8">

          {[
            { icon: Building, title: "Business Setup" },
            { icon: Globe, title: "Global Expansion" },
            { icon: Users, title: "Advisory Services" },
            { icon: Award, title: "Compliance & Tax" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className="p-6 bg-white rounded-xl border text-center hover:shadow-lg"
            >
              <item.icon className="text-gold mx-auto mb-3" />
              <p className="font-medium">{item.title}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-6">
          {["/about1.jpg", "/about2.jpg", "/about3.jpg"].map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <Image src={img} alt="About visuals" width={400} height={300} className="rounded-xl object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <motion.h2 className="text-3xl font-bold mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          Let’s Build Your India Presence
        </motion.h2>

        <motion.p className="text-muted-foreground mb-8 max-w-xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          Partner with AU Corporate for seamless advisory, compliance, and execution support.
        </motion.p>

        <Link href="/contact">
          <Button className="bg-gold text-black px-6 py-3">
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </section>

    </div>
  )
}