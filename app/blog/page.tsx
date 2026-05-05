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
  {
    title: "Mailbox Companies & DTAA Benefits in India | Tiger Global Supreme Court Ruling 2026",
    desc: "Supreme Court of India in the Tiger Global case reshapes DTAA interpretation, denying treaty benefits to mailbox companies lacking substance. Learn implications for foreign investors and GAAR framework.",
    slug: "mehak",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold">Our Blog</h1>
          <p className="text-gray-500 mt-2">
            Insights on taxation, compliance, and global business
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {blogs.map((blog, i) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <h3 className="font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{blog.desc}</p>

              <Link
                href={`/blog/${blog.slug}`}
                className="text-yellow-500 text-sm flex items-center gap-1 group"
              >
                Read More
                <motion.span
                  whileHover={{ x: 4 }}
                  className="inline-flex"
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
            </motion.div>
          ))}

        </div>

      </div>
    </div>
  )
}