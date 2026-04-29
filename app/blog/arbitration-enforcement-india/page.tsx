"use client"

import Image from "next/image"

export default function BlogPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">

      {/* HERO IMAGE */}
      <div className="mt-4 relative w-full aspect-[16/9] overflow-hidden rounded-2xl">
        <Image
          src="https://cdn.corenexis.com/files/c/6482191720.webp"
          alt="Arbitration Enforcement India"
          fill
          priority
          unoptimized
          className="object-cover"
        />
      </div>

      {/* TITLE */}
      <div className="mt-6 sm:mt-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          When Winning an Arbitration Case Isn’t Enough: Lessons from Executive Engineer (CCW), All India Radio v. M/s B Prasad & Co. (2026)
        </h1>
      </div>

      {/* INTRO */}
      <section className="mt-6 space-y-4 text-gray-800 text-base sm:text-lg leading-relaxed">
        <p>
          In the construction industry, arbitration is widely viewed as the final step in resolving disputes. Yet, in practice, securing a favourable arbitral award does not always result in immediate recovery of money.
        </p>

        <p>
          A recent judgment of the Patna High Court in Executive Engineer (Civil Construction Wing), All India Radio v. M/s B Prasad & Co. (2026) underscores a crucial reality for contractors and infrastructure companies: the real challenge often begins after the award is passed.
        </p>

        <p>
          The decision offers important insight into how Indian courts approach enforcement of arbitral awards, particularly in construction disputes involving government entities.
        </p>
      </section>

      {/* IMAGE */}
      <div className="mt-8 relative w-full aspect-[16/9] overflow-hidden rounded-xl">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
          alt="Legal Discussion"
          fill
          unoptimized
          className="object-cover"
        />
      </div>

      {/* BACKGROUND */}
      <section className="mt-8 space-y-4 text-gray-700">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Background of the Case
        </h2>

        <p>
          The dispute arose out of a construction contract awarded in 2007 by the Civil Construction Wing of All India Radio for the construction of 38 staff quarters in Patna. The contract, valued at approximately ₹3.4 crore, was scheduled for completion in 2009.
        </p>

        <p>
          Due to delays, the contract was ultimately terminated in 2012. Aggrieved by the termination, the contractor, M/s B Prasad & Co., invoked arbitration.
        </p>

        <p>
          By an award dated 10 May 2014, the arbitral tribunal held that the delay was attributable to the government department and allowed the contractor’s claims. The tribunal awarded approximately ₹1.81 crore (inclusive of interest), along with future interest at the rate of 15% per annum until payment.
        </p>

        <p>
          However, the dispute did not conclude with the award.
        </p>

        <p>
          The government challenged the award under Section 34 of the Arbitration and Conciliation Act, 1996. Simultaneously, the contractor initiated execution proceedings to enforce the award.
        </p>
      </section>

      {/* IMAGE */}
      <div className="mt-8 relative w-full aspect-[16/9] overflow-hidden rounded-xl">
        <Image
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1600&q=80"
          alt="Construction Project"
          fill
          unoptimized
          className="object-cover"
        />
      </div>

      {/* COURT ISSUE */}
      <section className="mt-8 space-y-4 text-gray-700">
        <h2 className="text-xl sm:text-2xl font-semibold">
          What Led to the High Court Proceedings
        </h2>

        <p>
          Over the years, the challenge proceedings remained pending. In the meantime, the contractor continued to pursue enforcement.
        </p>

        <p>
          In June 2025, the executing court ordered attachment of the government department’s bank accounts due to non-payment of the awarded amount.
        </p>

        <p>
          The government challenged this order before the High Court, contending that:
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>The arbitral award was still under challenge</li>
          <li>Attachment of bank accounts would severely disrupt public functions</li>
          <li>The order was disproportionate and premature</li>
        </ul>

        <p>
          Key Issue Before the Court
        </p>

        <p>
          The principal question before the Court was:
        </p>

        <p>
          Can coercive steps such as attachment of bank accounts be taken to enforce an arbitral award while a challenge to that award is still pending?
        </p>
      </section>

      {/* IMAGE */}
      <div className="mt-8 relative w-full aspect-[16/9] overflow-hidden rounded-xl">
        <Image
          src="https://cdn.corenexis.com/files/c/6121698720.jpg"
          alt="Court Judgment"
          fill
          unoptimized
          className="object-cover"
        />
      </div>

      {/* DECISION */}
      <section className="mt-8 space-y-4 text-gray-700">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Decision of the Court
        </h2>

        <p>
          The High Court adopted a balanced and pragmatic approach.
        </p>

        <p>
          It stayed the execution proceedings, including the attachment of bank accounts, and directed the concerned court to expeditiously decide:
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>The Section 34 challenge to the award</li>
          <li>The application for stay under Section 36</li>
        </ul>

        <p>
          Importantly, the Court imposed a strict timeline of 80 working days for disposal of these proceedings.
        </p>

        <p>
          Through this approach, the Court sought to ensure that:
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>The contractor’s right to enforcement is preserved</li>
          <li>The government is not subjected to irreversible financial consequences before final adjudication</li>
        </ul>
      </section>

      {/* TAKEAWAYS */}
      <section className="mt-8 space-y-4 text-gray-700">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Key Legal Takeaways
        </h2>

        <p>1. An Arbitral Award Does Not Ensure Immediate Recovery</p>

        <ul className="list-disc pl-5 space-y-2">
          <li>Enforcement may be contested</li>
          <li>Recovery can be delayed for years</li>
        </ul>

        <p>2. A Section 34 Challenge Does Not Automatically Stay Enforcement</p>

        <ul className="list-disc pl-5 space-y-2">
          <li>Filing a challenge does not render the award unenforceable</li>
          <li>A separate application under Section 36 is required to seek a stay</li>
        </ul>

        <p>3. Courts Exercise Discretion in Enforcement</p>

        <ul className="list-disc pl-5 space-y-2">
          <li>Whether the award is under challenge</li>
          <li>The financial and operational impact on parties</li>
          <li>Broader public interest</li>
        </ul>

        <p>4. Delay Can Undermine the Value of an Award</p>

        <p>5. Government Contracts Involve Additional Complexities</p>
      </section>

      {/* FINAL */}
      <section className="mt-8 space-y-4 text-gray-800">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Conclusion
        </h2>

        <p>
          An arbitral award is only as effective as its enforcement.
        </p>

        <p>
          For construction and infrastructure companies, dispute resolution does not end with arbitration. It extends into the enforcement stage—where legal strategy, timing, and execution ultimately determine the real outcome of the dispute.
        </p>
      </section>

      {/* CTA */}
      <div className="mt-10 p-6 bg-black text-white rounded-xl">
        <p className="font-semibold">
          Need help with arbitration enforcement?
        </p>
        <p className="mt-2 text-white/80 text-sm">
          AU Corporate assists with end-to-end dispute resolution and enforcement strategy.
        </p>
      </div>

    </main>
  )
}