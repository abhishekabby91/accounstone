import Link from "next/link"
import {
  TrendingUp,
  Users,
  DollarSign,
  ArrowRight,
  Target,
  Building2,
} from "lucide-react"

export default function FirmGrowthPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}

      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <span className="text-blue-400 font-semibold uppercase tracking-wider">
            CPA Firm Growth
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6 max-w-5xl">
            Build a More Profitable
            <br />
            Accounting Firm
          </h1>

          <p className="text-xl text-slate-300 mt-8 max-w-3xl">
            Discover how leading accounting firms improve profitability,
            strengthen partner economics, optimize staffing, and create
            sustainable growth through operational excellence.
          </p>

        </div>

      </section>

      {/* Challenges */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-blue-600 font-semibold uppercase">
              Common Challenges
            </span>

            <h2 className="text-4xl font-bold mt-4">
              What Holds Firms Back?
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="rounded-2xl border p-8">
              <DollarSign className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl">
                Margin Pressure
              </h3>
              <p className="text-slate-600 mt-3">
                Rising labor costs and inefficient delivery models
                impact profitability.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <Users className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl">
                Talent Shortages
              </h3>
              <p className="text-slate-600 mt-3">
                Firms struggle to recruit and retain qualified talent.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <Building2 className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl">
                Capacity Constraints
              </h3>
              <p className="text-slate-600 mt-3">
                Growth stalls when operational systems cannot scale.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Growth Framework */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <span className="text-blue-600 font-semibold uppercase">
              Growth Framework
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Four Strategic Growth Levers
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {[
              "Profitability",
              "Talent",
              "Technology",
              "Operations",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl border p-8 text-center hover:shadow-lg transition"
              >
                <Target className="h-10 w-10 text-blue-600 mx-auto mb-4" />

                <h3 className="font-bold text-xl">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Strategic Focus */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            <div className="rounded-2xl border p-10">

              <TrendingUp className="h-12 w-12 text-blue-600 mb-6" />

              <h3 className="text-3xl font-bold">
                Revenue & Profitability
              </h3>

              <p className="text-slate-600 mt-4">
                Improve realization rates, pricing models,
                service mix, utilization, and partner economics
                to maximize profitability.
              </p>

            </div>

            <div className="rounded-2xl border p-10">

              <Users className="h-12 w-12 text-blue-600 mb-6" />

              <h3 className="text-3xl font-bold">
                Staffing & Talent
              </h3>

              <p className="text-slate-600 mt-4">
                Build scalable talent models that combine
                local leadership with global delivery capabilities.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Related Resources */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold">
            Related Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <Link
              href="/expertise/global-delivery"
              className="border rounded-2xl p-8 bg-white"
            >
              Global Delivery
            </Link>

            <Link
              href="/expertise/operational-excellence"
              className="border rounded-2xl p-8 bg-white"
            >
              Operational Excellence
            </Link>

            <Link
              href="/podcast"
              className="border rounded-2xl p-8 bg-white"
            >
              Coffee With Dhawan
            </Link>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Ready to Accelerate Growth?
          </h2>

          <p className="text-xl mt-6">
            Discover how 808 Strategy helps accounting firms
            scale profitably and sustainably.
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