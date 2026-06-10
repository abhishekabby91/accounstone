import Link from "next/link"
import {
  ArrowRight,
  Shield,
  Users,
  Globe,
  CheckCircle,
} from "lucide-react"

export default function HomePage() {
  return (
    <main>

      {/* HERO */}

      <section className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="max-w-4xl">

            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm mb-6">
              Serving USA • UK • Australia
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Offshore Accounting &
              <span className="text-orange-400">
                {" "}Staffing Solutions
              </span>
            </h1>

            <p className="mt-8 text-xl text-slate-200 max-w-3xl">
              Dedicated accounting professionals supporting
              CPA firms, accounting practices and businesses
              with bookkeeping, tax, payroll and financial
              reporting services.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 px-6 py-4 rounded-xl font-semibold flex items-center gap-2"
              >
                Schedule Consultation
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services"
                className="border border-white/20 px-6 py-4 rounded-xl"
              >
                Explore Services
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* TRUST BAR */}

      <section className="bg-slate-50 border-y">
        <div className="max-w-7xl mx-auto px-6 py-8">

          <div className="text-center text-sm font-medium text-slate-500 mb-6">
            SOFTWARE EXPERTISE
          </div>

          <div className="flex flex-wrap justify-center gap-10 font-semibold text-slate-700">
            <span>QuickBooks</span>
            <span>Xero</span>
            <span>NetSuite</span>
            <span>Sage</span>
            <span>MYOB</span>
            <span>Drake Tax</span>
            <span>CCH</span>
          </div>

        </div>
      </section>

      {/* SOLUTIONS */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Flexible Engagement Models
            </h2>

            <p className="text-slate-600 mt-4">
              Scale your accounting operations with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Offshore Accounting Support",
              "Staff Augmentation",
              "Dedicated Accounting Teams",
              "Back Office Support",
            ].map((item) => (
              <div
                key={item}
                className="border rounded-2xl p-6 hover-lift"
              >
                <h3 className="font-semibold text-lg">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WHY ACCOUNSTONE */}

      <section className="section-gradient py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold">
              Why Accounstone
            </h2>

            <p className="text-slate-600 mt-4">
              Trusted offshore accounting partner for modern firms.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="text-center">
              <Users className="mx-auto text-orange-500 mb-4" />
              <h3 className="font-semibold">
                Skilled Professionals
              </h3>
            </div>

            <div className="text-center">
              <Shield className="mx-auto text-orange-500 mb-4" />
              <h3 className="font-semibold">
                Data Security
              </h3>
            </div>

            <div className="text-center">
              <Globe className="mx-auto text-orange-500 mb-4" />
              <h3 className="font-semibold">
                Global Delivery
              </h3>
            </div>

            <div className="text-center">
              <CheckCircle className="mx-auto text-orange-500 mb-4" />
              <h3 className="font-semibold">
                Quality Assurance
              </h3>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta-gradient text-white py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Build Your Offshore Accounting Team
          </h2>

          <p className="mt-6 text-xl text-white/80">
            Access skilled accounting professionals
            while reducing operational costs.
          </p>

          <Link
            href="/contact"
            className="inline-flex mt-10 bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold"
          >
            Schedule Consultation
          </Link>

        </div>

      </section>

    </main>
  )
}