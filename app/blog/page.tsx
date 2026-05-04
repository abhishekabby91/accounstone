"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const blogs = [
  {
    title: "Construction Arbitration in India: From Winning Claims to Enforcing Awards",
    desc: "Understand regulatory, tax, and compliance landscape before entering India.",
    slug: "construction-arbitration-in-india",
  },
  {
    title: "Arbitration Enforcement India",
    desc: "A Practical Overview of Legal Procedures, Challenges, and Strategic Considerations in India",
    slug: "arbitration-enforcement-india",
  },
  {
    title: "Doing Business in India",
    desc: "A Structured Approach to Navigating India’s Regulatory, Tax, and Compliance Landscape",
    slug: "doing-business-india",
  },
  {
    title: "FDI in India: Green Channel vs Brown Channel",
    desc: "Explore FDI in India, including regulatory framework, automatic vs government route, and Green Channel vs Brown Channel approvals. Expert insights by AU Corporate.",
    slug: "fdi-green-vs-brown-channel",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold">Our Blog</h1>
          <p className="text-gray-500 mt-2">
            Insights on taxation, compliance, and global business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {blogs.map((blog, i) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{blog.desc}</p>

              <Link
                href={`/blog/${blog.slug}`}
                className="text-yellow-400 text-sm flex items-center gap-1 hover:gap-2 transition-all"
              >
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}

        </div>

      </div>
    </div>
  )
}