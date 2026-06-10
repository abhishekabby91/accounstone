import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-28">
        <div className="max-w-4xl">
          <span className="text-blue-700 font-semibold">
            USA • UK • Australia
          </span>

          <h1 className="text-6xl font-bold mt-6 leading-tight">
            Offshore Accounting & Staffing Solutions
            for Modern Accounting Firms
          </h1>

          <p className="text-xl text-slate-600 mt-6">
            Dedicated accounting professionals supporting CPA firms,
            bookkeeping firms and tax practices with scalable offshore
            accounting solutions.
          </p>

          <div className="flex gap-4 mt-10">
            <Link
              href="/contact"
              className="bg-blue-700 text-white px-6 py-4 rounded-lg"
            >
              Schedule Consultation
            </Link>

            <Link
              href="/services"
              className="border px-6 py-4 rounded-lg"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}