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
              AU Corporate is a multidisciplinary consultancy firm based in New Delhi, offering end-to-end business advisory, taxation, compliance, and strategic solutions.
            </p>

            <p className="text-muted-foreground mb-6">
              With a strong team of professionals including Chartered Accountants, Lawyers, and Industry Experts, we help businesses navigate complex regulatory landscapes and scale efficiently.
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

      {/* ABOUT DETAILS */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 text-center">

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            Who We Are
          </motion.h2>

          <motion.p
            className="text-muted-foreground"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            Established in 2016, AU Corporate was founded with a vision to provide innovative and practical solutions to businesses. We act as a catalyst for growth by combining technical expertise with deep industry insights.
          </motion.p>

        </div>
      </section>

      {/* VISION / MISSION / WHY */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-8">

          {[
            {
              icon: Eye,
              title: "Our Vision",
              text: "To be a one-stop solution for businesses by delivering tailored advisory while maintaining the highest ethical standards.",
            },
            {
              icon: Target,
              title: "Our Mission",
              text: "To maximize client value through high-quality services, innovation, and long-term partnerships.",
            },
            {
              icon: Award,
              title: "Why AU?",
              text: "We combine expertise, integrity, and a client-first approach to deliver reliable and impactful solutions.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className="p-8 border rounded-xl hover:shadow-xl"
            >
              <item.icon className="text-gold mb-4" />
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}

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
              className="p-6 bg-white rounded-xl border text-center"
            >
              <item.icon className="text-gold mx-auto mb-3" />
              <p className="font-medium">{item.title}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* IMAGE BAND */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-6">
          {["/about1.jpg", "/about2.jpg", "/about3.jpg"].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <Image
                src={img}
                alt="About visuals"
                width={400}
                height={300}
                className="rounded-xl object-cover"
              />
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
          Let’s Build Your India Presence
        </motion.h2>

        <motion.p
          className="text-muted-foreground mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
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