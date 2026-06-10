import Link from "next/link"
import {
  Globe,
  Building2,
  Users,
  Landmark,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

export default function IndiaExpansionPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}

      <section className="bg-linear-to-r from-slate-950 via-slate-900 to-blue-950 text-white">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <span className="text-blue-400 font-semibold uppercase tracking-wider">
            India Expansion
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6 max-w-5xl">
            Expand Into India
            <br />
            With Confidence
          </h1>

          <p className="text-xl text-slate-300 mt-8 max-w-3xl">
            Establish scalable operations, access world-class talent,
            and create a long-term strategic advantage through India.
          </p>

        </div>

      </section>

      {/* Why India */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <span className="text-blue-600 font-semibold uppercase">
              Why India
            </span>

            <h2 className="text-4xl font-bold mt-4">
              A Global Growth Platform
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="border rounded-2xl p-8 hover:shadow-xl transition">

              <Users className="h-10 w-10 text-blue-600 mb-5" />

              <h3 className="font-bold text-2xl mb-3">
                Deep Talent Pool
              </h3>

              <p className="text-slate-600">
                Access highly qualified accountants, finance
                professionals, analysts, and operational talent.
              </p>

            </div>

            <div className="border rounded-2xl p-8 hover:shadow-xl transition">

              <Building2 className="h-10 w-10 text-blue-600 mb-5" />

              <h3 className="font-bold text-2xl mb-3">
                Scalable Operations
              </h3>

              <p className="text-slate-600">
                Build delivery centers capable of supporting
                long-term growth and expansion.
              </p>

            </div>

            <div className="border rounded-2xl p-8 hover:shadow-xl transition">

              <Globe className="h-10 w-10 text-blue-600 mb-5" />

              <h3 className="font-bold text-2xl mb-3">
                Global Advantage
              </h3>

              <p className="text-slate-600">
                Strengthen competitiveness while improving
                service delivery and operational efficiency.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Expansion Models */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <span className="text-blue-600 font-semibold uppercase">
              Expansion Models
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Choose The Right Structure
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-10 mt-16">

            <div className="bg-white border rounded-2xl p-10">

              <Building2 className="h-12 w-12 text-blue-600 mb-5" />

              <h3 className="text-3xl font-bold">
                GCC Strategy
              </h3>

              <p className="text-slate-600 mt-4">
                Build a dedicated Global Capability Center
                with complete operational control, culture,
                and scalability.
              </p>

            </div>

            <div className="bg-white border rounded-2xl p-10">

              <Landmark className="h-12 w-12 text-blue-600 mb-5" />

              <h3 className="text-3xl font-bold">
                India Entity Setup
              </h3>

              <p className="text-slate-600 mt-4">
                Establish a local legal presence and build
                a long-term platform for growth and hiring.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Roadmap */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <span className="text-blue-600 font-semibold uppercase">
              Expansion Roadmap
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Four Steps To Success
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {[
              "Strategy",
              "Entity Setup",
              "Talent Acquisition",
              "Scale Operations",
            ].map((step) => (
              <div
                key={step}
                className="border rounded-2xl p-8 text-center hover:shadow-lg transition"
              >
                <CheckCircle className="h-10 w-10 text-blue-600 mx-auto mb-4" />

                <h3 className="font-bold text-xl">
                  {step}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Internal Links */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold">
            Related Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <Link
              href="/expertise/global-delivery"
              className="bg-white border rounded-2xl p-8 hover:shadow-lg transition"
            >
              Global Delivery
            </Link>

            <Link
              href="/expertise/operational-excellence"
              className="bg-white border rounded-2xl p-8 hover:shadow-lg transition"
            >
              Operational Excellence
            </Link>

            <Link
              href="/onegd"
              className="bg-white border rounded-2xl p-8 hover:shadow-lg transition"
            >
              ONEGD™ Framework
            </Link>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-linear-to-r from-blue-600 to-cyan-600 text-white py-24">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Ready To Build In India?
          </h2>

          <p className="text-xl mt-6">
            Create a scalable India strategy that supports
            growth, talent acquisition, and operational excellence.
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