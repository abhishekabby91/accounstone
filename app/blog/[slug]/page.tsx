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
          In India’s rapidly growing infrastructure sector, disputes are not exceptions — they are part of the process.
          Large-scale construction projects often involve multiple stakeholders, tight timelines, insurance coverage,
          and evolving site conditions. Naturally, this creates disagreements.
        </p>

        <p className="mt-4 text-lg leading-relaxed">
          However, what many companies underestimate is that arbitration is not just about winning a dispute.
          It is about how well the claim is built, how evidence is presented, and ultimately, whether the award can actually be enforced.
        </p>
      </section>

      {/* IMAGE */}
      <div className="mt-10 relative w-full h-[300px] overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
          alt="Arbitration Discussion"
          fill
          className="object-cover"
        />
      </div>

      {/* SECTION 1 */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          How Arbitration Outcomes Are Actually Determined
        </h2>

        <p className="mb-4">
          A recent Himachal Pradesh High Court judgment involving a bridge collapse dispute highlights a key truth:
          arbitral tribunals are increasingly driven by commercial reality, not exaggerated claims.
        </p>

        <p className="mb-4">
          In this case, the tribunal carefully evaluated both the contractor’s claim and the insurer’s surveyor report.
          Instead of blindly accepting either position, it adopted a balanced approach.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Rejected inflated reconstruction cost claims that lacked proper justification</li>
          <li>Scrutinized surveyor reports for inconsistencies and gaps</li>
          <li>Applied proportionality principles under insurance frameworks</li>
          <li>Arrived at a commercially reasonable, evidence-based award</li>
        </ul>

        <p className="mt-4">
          The High Court later upheld this approach, reinforcing a strong principle:
          courts will not interfere with arbitration unless the decision is irrational or perverse.
        </p>
      </section>

      {/* IMAGE */}
      <div className="mt-10 relative w-full h-[300px] overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1600&q=80"
          alt="Construction Site"
          fill
          className="object-cover"
        />
      </div>

      {/* KEY LESSONS */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          Key Lessons for Construction & Infrastructure Companies
        </h2>

        <p className="mb-4">
          The biggest takeaway from modern arbitration trends is simple:
          success depends less on contractual wording and more on execution discipline.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Strong documentation is more valuable than aggressive claims</li>
          <li>Surveyor reports are persuasive but not conclusive</li>
          <li>Overvaluation of claims can weaken credibility in arbitration</li>
          <li>Tribunals prioritize actual loss over theoretical estimations</li>
          <li>Arbitration is not a second trial — it is final adjudication in most cases</li>
        </ul>
      </section>

      {/* IMAGE */}
      <div className="mt-10 relative w-full h-[300px] overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80"
          alt="Court Enforcement"
          fill
          className="object-cover"
        />
      </div>

      {/* PART 2 */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          When Winning Arbitration Is Not Enough
        </h2>

        <p className="mb-4">
          A separate Patna High Court case involving All India Radio highlights another reality:
          even after winning an arbitral award, enforcement can take years of litigation.
        </p>

        <p className="mb-4">
          In that matter, a contractor secured a favourable award of approximately ₹1.81 crore in 2014.
          However, the award was immediately challenged under Section 34 of the Arbitration and Conciliation Act, 1996.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Arbitral award passed in favour of contractor (2014)</li>
          <li>Government initiated challenge under Section 34</li>
          <li>Execution proceedings delayed due to pending challenge</li>
          <li>Court emphasized balance between enforcement and fairness</li>
          <li>Strict timelines imposed for disposal of proceedings</li>
        </ul>

        <p className="mt-4">
          This reflects a critical reality — arbitration does not automatically translate into payment.
          Enforcement strategy is equally important as winning the case itself.
        </p>
      </section>

      {/* FINAL INSIGHT */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          What This Means for the Construction Industry
        </h2>

        <p className="text-lg leading-relaxed">
          Arbitration in India is evolving into a system where preparation, evidence quality, and strategy determine outcomes.
          But equally important is the understanding that a favourable award is only the beginning.
        </p>

        <p className="mt-4 text-lg leading-relaxed">
          The real challenge lies in converting legal success into financial recovery — and that requires foresight even before disputes arise.
        </p>
      </section>

      {/* AU CORPORATE */}
      <section className="border-t mt-12 pt-6">
        <h2 className="text-xl font-semibold mb-3">
          AU Corporate Perspective
        </h2>

        <p className="text-gray-700">
          At AU Corporate, we view arbitration as a lifecycle process — from contract structuring and risk allocation
          to dispute strategy and final enforcement.
        </p>

        <p className="text-gray-700 mt-3">
          Our approach ensures that clients are not only prepared to win disputes but are also positioned to recover value efficiently,
          minimizing commercial disruption in large infrastructure projects.
        </p>
      </section>

      {/* CTA */}
      <div className="mt-10 p-6 bg-gray-100 rounded-xl">
        <p className="font-semibold">
          Facing a construction dispute or arbitration issue?
        </p>

        <p className="text-gray-700 mt-2">
          AU Corporate provides end-to-end arbitration strategy, claim management, and enforcement support for infrastructure companies across India.
        </p>
      </div>

    </main>
  )
}