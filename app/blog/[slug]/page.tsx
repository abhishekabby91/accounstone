"use client"

import Image from "next/image"

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">

      {/* HERO IMAGE */}
      <div className="mb-10">
        <Image
          src="https://images.unsplash.com/photo-1581091012184-7c4c0b3a6a12"
          alt="Construction Arbitration India"
          width={1200}
          height={600}
          className="rounded-2xl shadow-lg"
        />
      </div>

      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
        Construction Arbitration in India: From Winning Claims to Enforcing Awards
      </h1>

      <p className="text-gray-600 mb-10">
        Strategic lessons from recent High Court rulings for construction and infrastructure companies.
      </p>

      {/* INTRO */}
      <section className="mb-12">
        <p className="text-lg leading-relaxed">
          In construction and infrastructure projects, disputes are almost inevitable.
          But what many companies often realize—sometimes too late—is that arbitration is not a single event,
          but a two-stage reality: first winning the claim, and then enforcing it.
        </p>
      </section>

      {/* IMAGE 2 */}
      <div className="mb-10">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
          alt="Arbitration Tribunal Discussion"
          width={1200}
          height={600}
          className="rounded-2xl"
        />
      </div>

      {/* PART 1 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          How Arbitration Outcomes Are Actually Decided
        </h2>

        <p className="mb-4">
          A recent Himachal Pradesh High Court ruling in a bridge collapse insurance dispute highlights
          how arbitral tribunals actually decide construction cases.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Rejected inflated reconstruction cost claims</li>
          <li>Critically examined surveyor reports</li>
          <li>Applied commercial proportionality principles</li>
          <li>Delivered balanced, evidence-based award</li>
        </ul>

        <p className="mt-4">
          The High Court later refused to interfere, reinforcing that courts will not re-evaluate evidence
          if the arbitrator’s view is plausible.
        </p>
      </section>

      {/* IMAGE 3 */}
      <div className="mb-10">
        <Image
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744"
          alt="Construction Site Infrastructure"
          width={1200}
          height={600}
          className="rounded-2xl"
        />
      </div>

      {/* KEY LESSONS */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Key Lessons for Construction Companies
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Evidence is more important than contractual claims</li>
          <li>Surveyor reports are not final or binding</li>
          <li>Overstated claims reduce credibility</li>
          <li>Arbitration is not a second trial in court</li>
        </ul>
      </section>

      {/* IMAGE 4 */}
      <div className="mb-10">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
          alt="Court Enforcement Legal System"
          width={1200}
          height={600}
          className="rounded-2xl"
        />
      </div>

      {/* PART 2 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          When Winning Arbitration Is Not Enough
        </h2>

        <p className="mb-4">
          A Patna High Court ruling involving All India Radio highlights a critical issue:
          even after winning arbitration, enforcement can take years.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>₹1.81 crore awarded in arbitration (2014)</li>
          <li>Government challenged award under Section 34</li>
          <li>Execution initiated but delayed significantly</li>
          <li>High Court imposed strict timelines for disposal</li>
        </ul>

        <p className="mt-4">
          The case shows that arbitration success does not automatically translate into recovery.
        </p>
      </section>

      {/* FINAL INSIGHT */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          What This Means for Construction Companies
        </h2>

        <p className="text-lg leading-relaxed">
          Arbitration success is not just about winning—it is about ensuring recovery.
          Evidence wins claims, but enforcement determines real commercial outcomes.
        </p>
      </section>

      {/* AU CORPORATE */}
      <section className="border-t pt-8 mt-10">
        <h2 className="text-xl font-semibold mb-3">AU Corporate Perspective</h2>

        <p className="text-gray-700">
          At AU Corporate, arbitration is treated as a full-cycle strategic process—from contract structuring
          to enforcement. Our focus is simple: legal victory must translate into commercial recovery.
        </p>
      </section>

      {/* CTA */}
      <div className="mt-10 p-6 bg-gray-100 rounded-xl">
        <p className="font-semibold">
          Facing a construction dispute or arbitration issue?
        </p>
        <p className="text-gray-700 mt-2">
          AU Corporate provides end-to-end arbitration and dispute resolution support for infrastructure companies.
        </p>
      </div>

    </main>
  )
}