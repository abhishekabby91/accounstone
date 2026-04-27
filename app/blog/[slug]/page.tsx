"use client"

import Image from "next/image"

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 pb-16">

      {/* HERO IMAGE (FIXED - NO CONFIG REQUIRED) */}
      <div className="mt-4 relative w-full h-[320px] md:h-[420px] overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1581091012184-7c4c0b3a6a12?auto=format&fit=crop&w=1600&q=80"
          alt="Construction Arbitration India"
          fill
          priority
          unoptimized
          className="object-cover"
        />
      </div>

      {/* TITLE */}
      <div className="mt-8">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Construction Arbitration in India: From Winning Claims to Enforcing Awards
        </h1>

        <p className="text-gray-600 mt-3">
          Strategic lessons from recent High Court rulings for construction and infrastructure companies.
        </p>
      </div>

      {/* INTRO */}
      <section className="mt-10">
        <p className="text-lg leading-relaxed">
          In construction and infrastructure projects, disputes are almost inevitable.
          Arbitration is not just about winning claims — enforcement is equally critical.
        </p>
      </section>

      {/* IMAGE 2 */}
      <div className="mt-10 relative w-full h-[300px] overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
          alt="Arbitration Tribunal"
          fill
          unoptimized
          className="object-cover"
        />
      </div>

      {/* PART 1 */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          How Arbitration Outcomes Are Decided
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Rejected inflated reconstruction costs</li>
          <li>Examined surveyor reports critically</li>
          <li>Applied commercial proportionality</li>
          <li>Delivered balanced award</li>
        </ul>
      </section>

      {/* IMAGE 3 */}
      <div className="mt-10 relative w-full h-[300px] overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1600&q=80"
          alt="Construction Site"
          fill
          unoptimized
          className="object-cover"
        />
      </div>

      {/* KEY LESSONS */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          Key Lessons
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Evidence matters more than claims</li>
          <li>Surveyor reports are not final</li>
          <li>Overvaluation reduces credibility</li>
          <li>Arbitration is not a court retrial</li>
        </ul>
      </section>

      {/* IMAGE 4 */}
      <div className="mt-10 relative w-full h-[300px] overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80"
          alt="Court Enforcement"
          fill
          unoptimized
          className="object-cover"
        />
      </div>

      {/* PART 2 */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          When Winning Is Not Enough
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>₹1.81 crore awarded in arbitration</li>
          <li>Government challenged under Section 34</li>
          <li>Execution delayed significantly</li>
          <li>High Court imposed timelines</li>
        </ul>
      </section>

      {/* FINAL INSIGHT */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          Final Insight
        </h2>

        <p className="text-lg leading-relaxed">
          Arbitration success is not about winning alone — enforcement defines real outcome.
        </p>
      </section>

    </main>
  )
}