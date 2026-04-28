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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
}

export default function AboutHero() {
  return (
    <div className="min-h-screen pt-16 sm:pt-20">

      {/* HERO */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-center">

          <motion.div initial="hidden" animate="visible" variants={fadeUp}>

            <span className="text-black text-xs sm:text-sm font-semibold uppercase tracking-wider">
              About Us
            </span>

            <h1 className="text-gold text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
              AU Corporate
            </h1>

            <p className="text-gray-500 text-sm sm:text-base mb-4">
              AU Corporate is an esteemed multidisciplinary consultancy firm based in New Delhi with a diversified team of Chartered Accountants, CPAs, Company Secretaries, Cost Accountants, Lawyers, Industry Specialists, Ex-Bankers, and MBAs.
            </p>

            <p className="text-gray-500 text-sm sm:text-base mb-6">
              Established in 2016, we provide innovative solutions to complex business challenges and act as a catalyst for the business growth of our clients across India and globally.
            </p>

            <Link href="/contact">
              <Button className="bg-gold text-black px-5 sm:px-6 py-2 sm:py-3">
                Get in Touch <ArrowRight className="ml-2" />
              </Button>
            </Link>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
              alt="About AU Corporate"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </motion.div>

        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-12 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-center">

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Who We Are
            </h2>

            <p className="text-gray-500 text-sm sm:text-base mb-4">
              AU Corporate was established with a vision to provide innovative, practical, and result-oriented solutions to businesses facing complex regulatory and operational challenges.
            </p>

            <p className="text-gray-500 text-sm sm:text-base">
              With deep domain expertise and a client-first approach, we serve as a strategic partner for businesses looking to establish, operate, and scale in India.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} initial="hidden" whileInView="visible">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Team work"
              width={500}
              height={350}
              className="rounded-xl shadow w-full h-auto"
            />
          </motion.div>

        </div>
      </section>

      {/* VISION / MISSION / WHY */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">

          {[
            {
              icon: Eye,
              title: "Our Vision",
              text: "Our Vision is to fulfil client requirements with tailored solutions while maintaining ethical practices and continuous growth."
            },
            {
              icon: Target,
              title: "Our Mission",
              text: "Maximize client value through quality service, ethics, and long-term relationships."
            },
            {
              icon: Award,
              title: "Why AU?",
              text: "Integrity, independence, confidentiality, and expert-driven execution define our approach."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className="p-5 sm:p-8 border rounded-xl hover:shadow-xl bg-white"
            >
              <item.icon className="text-gold mb-3" />
              <h3 className="font-bold text-base sm:text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* SERVICES SNAPSHOT */}
      <section className="py-12 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">

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
              className="p-4 sm:p-6 bg-white rounded-xl border text-center hover:shadow-lg"
            >
              <item.icon className="text-gold mx-auto mb-2 sm:mb-3" />
              <p className="font-medium text-sm sm:text-base">
                {item.title}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-white text-center px-4">

        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Let’s Build Your India Presence
        </h2>

        <p className="text-gray-500 mb-8 max-w-xl mx-auto text-sm sm:text-base">
          Partner with AU Corporate for seamless advisory, compliance, and execution support.
        </p>

        <Link href="/contact">
          <Button className="bg-gold text-black px-6 py-3">
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </Link>

      </section>

    </div>
  )
}