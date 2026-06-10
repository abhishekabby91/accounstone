import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-6 py-32">

          <span className="inline-block bg-white/10 px-4 py-2 rounded-full text-sm">
            USA • UK • Australia
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold max-w-4xl">
            Offshore Accounting &
            <span className="text-orange-400">
              {" "}Staffing Solutions
            </span>
          </h1>

          <p className="mt-6 text-xl text-slate-200 max-w-2xl">
            Helping CPA Firms, Accounting Practices and Businesses
            scale through dedicated offshore accounting teams.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              href="/contact"
              className="bg-orange-500 px-6 py-4 rounded-xl"
            >
              Schedule Consultation
            </Link>

            <Link
              href="/services"
              className="border border-white/20 px-6 py-4 rounded-xl"
            >
              Explore Services
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}