import Link from "next/link"
import {
  Globe,
  Users,
  Shield,
  CheckCircle,
  ArrowRight,
  Building2,
} from "lucide-react"

export default function GlobalDeliveryPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}

      <section className="bg-linear-to-r from-slate-950 via-slate-900 to-blue-950 text-white">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <span className="text-blue-400 font-semibold uppercase tracking-wider">
            Global Delivery
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6 max-w-5xl">
            Build High-Performance
            Global Delivery Teams
          </h1>

          <p className="text-xl text-slate-300 mt-8 max-w-3xl">
            Design scalable offshore operations, improve delivery
            capacity, and build world-class accounting teams across
            borders.
          </p>

        </div>

      </section>

      {/* Core Pillars */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <span className="text-blue-600 font-semibold uppercase">
              Core Pillars
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Building Global Delivery Excellence
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="border rounded-2xl p-8 hover:shadow-xl transition">

              <Users className="h-10 w-10 text-blue-600 mb-5" />

              <h3 className="font-bold text-2xl mb-3">
                Offshore Staffing
              </h3>

              <p className="text-slate-600">
                Access highly skilled accounting professionals
                and reduce dependency on local hiring markets.
              </p>

            </div>

            <div className="border rounded-2xl p-8 hover:shadow-xl transition">

              <Building2 className="h-10 w-10 text-blue-600 mb-5" />

              <h3 className="font-bold text-2xl mb-3">
                Team Leadership
              </h3>

              <p className="text-slate-600">
                Build accountability, communication,
                culture, and retention within distributed teams.
              </p>

            </div>

            <div className="border rounded-2xl p-8 hover:shadow-xl transition">

              <Shield className="h-10 w-10 text-blue-600 mb-5" />

              <h3 className="font-bold text-2xl mb-3">
                Delivery Excellence
              </h3>

              <p className="text-slate-600">
                Standardize workflows, quality reviews,
                documentation, and compliance controls.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Framework */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <span className="text-blue-600 font-semibold uppercase">
              808 Framework
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Four Components of Global Delivery
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {[
              "Talent",
              "Process",
              "Technology",
              "Governance",
            ].map((item) => (
              <div
                key={item}
                className="bg-white border rounded-2xl p-8 text-center hover:shadow-lg transition"
              >
                <CheckCircle className="h-10 w-10 text-blue-600 mx-auto mb-4" />

                <h3 className="font-bold text-xl">
                  {item}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Benefits */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            <div className="border rounded-2xl p-10">

              <Globe className="h-12 w-12 text-blue-600 mb-5" />

              <h3 className="text-3xl font-bold">
                Scale Faster
              </h3>

              <p className="mt-4 text-slate-600">
                Increase capacity and improve client service
                without significantly increasing overhead.
              </p>

            </div>

            <div className="border rounded-2xl p-10">

              <Shield className="h-12 w-12 text-blue-600 mb-5" />

              <h3 className="text-3xl font-bold">
                Reduce Risk
              </h3>

              <p className="mt-4 text-slate-600">
                Build structured delivery systems with quality,
                compliance, and governance at the center.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Resources */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold">
            Related Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <Link
              href="/expertise/firm-growth"
              className="bg-white border rounded-2xl p-8 hover:shadow-lg transition"
            >
              CPA Firm Growth
            </Link>

            <Link
              href="/expertise/operational-excellence"
              className="bg-white border rounded-2xl p-8 hover:shadow-lg transition"
            >
              Operational Excellence
            </Link>

            <Link
              href="/expertise/india-expansion"
              className="bg-white border rounded-2xl p-8 hover:shadow-lg transition"
            >
              India Expansion
            </Link>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-linear-to-r from-blue-600 to-cyan-600 text-white py-24">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Build Your Global Team
          </h2>

          <p className="text-xl mt-6">
            Learn how leading accounting firms create scalable
            offshore delivery models.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-700 px-8 py-4 rounded-xl font-bold mt-8"
          >
            Schedule Strategy Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

        </div>

      </section>

    </main>
  )
}