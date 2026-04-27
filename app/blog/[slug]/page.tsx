"use client"

import { useParams } from "next/navigation"

export default function BlogDetail() {
  const { slug } = useParams()

  return (
    <div className="min-h-screen py-24 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        {slug?.toString().replaceAll("-", " ").toUpperCase()}
      </h1>

      <p className="text-gray-600">
        This is your blog detail page. You can replace this with real content.
      </p>
    </div>
  )
}