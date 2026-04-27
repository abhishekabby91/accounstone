"use client"

import Image from "next/image"

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 pb-16">

      {/* HERO IMAGE */}
      <div className="mt-4 relative w-full h-[320px] md:h-[420px] overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1581091012184-7c4c0b3a6a12?auto=format&fit=crop&w=1600&q=80"
          alt="Construction Arbitration India"
          fill
          priority
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
          alt="Arbitration Tribunal Discussion"
          fill
          className="object-cover"
        />
      </div>

      {/* PART 1 */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          How Arbitration Outcomes Are Actually Decided
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Rejected inflated reconstruction cost claims</li>
          <li>Critically examined surveyor reports</li>
          <li>Applied commercial proportionality principles</li>
          <li>Delivered balanced evidence-based award</li>
        </ul>
      </section>

      {/* IMAGE 3 */}
      <div className="mt-10 relative w-full h-[300px] overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1600&q=80"
          alt="Construction Site Infrastructure"
          fill
          className="object-cover"
        />
      </div>

      {/* KEY LESSONS */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          Key Lessons for Construction Companies
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Evidence is more important than contractual claims</li>
          <li>Surveyor reports are not final or binding</li>
          <li>Overstated claims reduce credibility</li>
          <li>Arbitration is not a second court trial</li>
        </ul>
      </section>

      {/* IMAGE 4 */}
      <div className="mt-10 relative w-full h-[300px] overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80"
          alt="Court Enforcement Legal System"
          fill
          className="object-cover"
        />
      </div>

      {/* PART 2 */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          When Winning Arbitration Is Not Enough
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>₹1.81 crore awarded in arbitration (2014)</li>
          <li>Government challenged award under Section 34</li>
          <li>Execution delayed for years</li>
          <li>High Court imposed strict timelines</li>
        </ul>
      </section>

      {/* FINAL INSIGHT */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          Final Insight
        </h2>

        <p className="text-lg leading-relaxed">
          Arbitration success is not about winning alone — enforcement defines the real outcome.
        </p>
      </section>

    </main>
  )
}