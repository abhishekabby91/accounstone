"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const blogs = [
  {
    title: "Doing Business in India: Key Considerations",
    desc: "Understand regulatory, tax, and compliance landscape before entering India.",
    slug: "doing-business-in-india",
  },
  {
    title: "Transfer Pricing Trends in 2025",
    desc: "Explore latest TP regulations and global compliance requirements.",
    slug: "transfer-pricing-trends",
  },
  {
    title: "Payroll Compliance in India",
    desc: "Key statutory requirements every company must follow in India.",
    slug: "payroll-compliance",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold">Our Blog</h1>
          <p className="text-gray-500 mt-2">
            Insights on taxation, compliance, and global business
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {blogs.map((blog, i) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{blog.desc}</p>

              <Link
                href={`/blog/${blog.slug}`}
                className="text-yellow-500 text-sm flex items-center gap-1"
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