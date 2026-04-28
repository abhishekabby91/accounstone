"use client"

import Image from "next/image"

export default function BlogPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">

      {/* HERO IMAGE */}
      <div className="mt-4 relative w-full aspect-[16/9] overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1581091012184-7c4c0b3a6a12?auto=format&fit=crop&w=1600&q=80"
          alt="Construction Arbitration India"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* TITLE */}
      <div className="mt-6 sm:mt-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Construction Arbitration in India: From Winning Claims to Enforcing Awards
        </h1>

        <p className="text-gray-500 mt-3 text-sm sm:text-base">
          Strategic lessons from recent High Court rulings for construction and infrastructure companies.
        </p>
      </div>

      {/* INTRO */}
      <section className="mt-8 space-y-4">
        <p className="text-base sm:text-lg leading-relaxed text-gray-800">
          In India’s rapidly growing infrastructure sector, disputes are not exceptions — they are part of the process.
        </p>

        <p className="text-base sm:text-lg leading-relaxed text-gray-800">
          Large-scale construction projects involve multiple stakeholders, tight timelines, insurance coverage, and evolving site conditions — naturally creating disagreements.
        </p>

        <p className="text-base sm:text-lg leading-relaxed text-gray-800">
          Arbitration is not just about winning — it is about how well the claim is built, how evidence is presented, and whether the award can actually be enforced.
        </p>
      </section>

      {/* IMAGE */}
      <div className="mt-8 relative w-full aspect-[16/9] overflow-hidden rounded-xl">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
          alt="Arbitration Discussion"
          fill
          className="object-cover"
        />
      </div>

      {/* SECTION */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">
          How Arbitration Outcomes Are Actually Determined
        </h2>

        <p className="text-gray-700">
          A recent High Court judgment highlights a key truth: arbitral tribunals focus on commercial reality, not exaggerated claims.
        </p>

        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
          <li>Reject inflated claims without evidence</li>
          <li>Critically evaluate surveyor reports</li>
          <li>Apply proportionality in loss assessment</li>
          <li>Focus on commercially reasonable outcomes</li>
        </ul>

        <p className="text-gray-700">
          Courts typically uphold such awards unless they are irrational or legally flawed.
        </p>
      </section>

      {/* IMAGE */}
      <div className="mt-8 relative w-full aspect-[16/9] overflow-hidden rounded-xl">
        <Image
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1600&q=80"
          alt="Construction Site"
          fill
          className="object-cover"
        />
      </div>

      {/* LESSONS */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Key Lessons for Companies
        </h2>

        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
          <li>Documentation is more powerful than aggressive claims</li>
          <li>Surveyor reports are influential but not final</li>
          <li>Overstated claims reduce credibility</li>
          <li>Actual loss matters more than projections</li>
          <li>Arbitration decisions are rarely revisited</li>
        </ul>
      </section>

      {/* IMAGE */}
      <div className="mt-8 relative w-full aspect-[16/9] overflow-hidden rounded-xl">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80"
          alt="Court Enforcement"
          fill
          className="object-cover"
        />
      </div>

      {/* ENFORCEMENT */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Winning Is Not Enough
        </h2>

        <p className="text-gray-700">
          Even after winning arbitration, enforcement can take years due to legal challenges.
        </p>

        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
          <li>Awards are often challenged in court</li>
          <li>Execution may be delayed</li>
          <li>Courts balance enforcement with fairness</li>
          <li>Timelines are improving but still slow</li>
        </ul>

        <p className="text-gray-700">
          This makes enforcement strategy just as important as winning the dispute.
        </p>
      </section>

      {/* FINAL */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Industry Insight
        </h2>

        <p className="text-gray-800 text-base sm:text-lg">
          Arbitration success depends on preparation, documentation, and execution — but real value comes from converting awards into recovery.
        </p>
      </section>

      {/* AU BLOCK */}
      <section className="border-t mt-10 pt-6 space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold">
          AU Corporate Perspective
        </h2>

        <p className="text-gray-700">
          We treat arbitration as a full lifecycle — from contract structuring to enforcement.
        </p>

        <p className="text-gray-700">
          Our focus is not just winning disputes, but ensuring clients actually recover value.
        </p>
      </section>

      {/* CTA */}
      <div className="mt-10 p-5 sm:p-6 bg-black text-white rounded-xl">
        <p className="font-semibold text-sm sm:text-base">
          Facing a construction dispute?
        </p>

        <p className="mt-2 text-sm text-white/80">
          AU Corporate provides end-to-end arbitration strategy, claim management, and enforcement support.
        </p>
      </div>

    </main>
  )
}