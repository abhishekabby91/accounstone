import Link from "next/link"
import Hero from "@/components/hero"
import {
  ArrowRight,
  Globe,
  Users,
  Building2,
  TrendingUp,
  Mic,
  BookOpen,
} from "lucide-react"

export default function HomePage() {
  return (
    <main>

      <Hero />

      {/* Expertise Pillars */}
      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Expertise
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Strategic Growth Areas
            </h2>

            <p className="text-slate-600 mt-6">
              Helping accounting firms scale through operational excellence,
              global delivery, and India expansion strategies.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            <Link
              href="/expertise/firm-growth"
              className="group bg-white rounded-2xl border p-8 hover:shadow-xl transition"
            >
              <TrendingUp className="h-10 w-10 text-blue-600 mb-5" />

              <h3 className="text-xl font-bold">
                CPA Firm Growth
              </h3>

              <p className="text-slate-600 mt-3">
                Improve profitability, staffing,
                client acquisition and firm operations.
              </p>

              <span className="flex items-center mt-5 text-blue-600">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>

            <Link
              href="/expertise/global-delivery"
              className="group bg-white rounded-2xl border p-8 hover:shadow-xl transition"
            >
              <Users className="h-10 w-10 text-blue-600 mb-5" />

              <h3 className="text-xl font-bold">
                Global Delivery
              </h3>

              <p className="text-slate-600 mt-3">
                Build scalable offshore teams and
                modern delivery capabilities.
              </p>

              <span className="flex items-center mt-5 text-blue-600">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>

            <Link
              href="/expertise/india-expansion"
              className="group bg-white rounded-2xl border p-8 hover:shadow-xl transition"
            >
              <Globe className="h-10 w-10 text-blue-600 mb-5" />

              <h3 className="text-xl font-bold">
                India Expansion
              </h3>

              <p className="text-slate-600 mt-3">
                Establish GCCs, captive centers
                and long-term India operations.
              </p>

              <span className="flex items-center mt-5 text-blue-600">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>

            <Link
              href="/expertise/operational-excellence"
              className="group bg-white rounded-2xl border p-8 hover:shadow-xl transition"
            >
              <Building2 className="h-10 w-10 text-blue-600 mb-5" />

              <h3 className="text-xl font-bold">
                Operational Excellence
              </h3>

              <p className="text-slate-600 mt-3">
                Streamline workflows, governance,
                systems and performance.
              </p>

              <span className="flex items-center mt-5 text-blue-600">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>

          </div>

        </div>

      </section>

      {/* ONEGD Section */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="text-blue-600 font-semibold uppercase">
                ONEGD™ Framework
              </span>

              <h2 className="text-5xl font-bold mt-4">
                One Global Delivery Framework
              </h2>

              <p className="text-slate-600 mt-6 text-lg">
                A proven framework helping accounting firms
                build sustainable global delivery models through
                Talent, Operations, Technology and Governance.
              </p>

              <Link
                href="/onegd"
                className="inline-flex items-center mt-8 text-blue-600 font-semibold"
              >
                Explore Framework
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

            </div>

            <div className="grid grid-cols-2 gap-6">

              {[
                "Talent",
                "Operations",
                "Technology",
                "Governance",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border p-8 text-center bg-slate-50 hover:bg-blue-50 transition"
                >
                  <h3 className="font-bold text-xl">
                    {item}
                  </h3>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* Coffee With Dhawan */}

      <section className="py-24 bg-slate-900 text-white">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <Mic className="mx-auto h-14 w-14 text-orange-400" />

          <h2 className="text-5xl font-bold mt-6">
            Coffee With Dhawan
          </h2>

          <p className="text-slate-300 mt-6 max-w-3xl mx-auto">
            Conversations on accounting firm growth,
            offshore staffing, leadership, technology,
            and global expansion strategies.
          </p>

          <Link
            href="/podcast"
            className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold"
          >
            Explore Podcast
          </Link>

        </div>

      </section>

      {/* Insights */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between">

            <div>

              <span className="text-blue-600 font-semibold uppercase">
                Insights & Intelligence
              </span>

              <h2 className="text-4xl font-bold mt-3">
                Latest Thinking
              </h2>

            </div>

            <Link
              href="/insights"
              className="text-blue-600 font-semibold"
            >
              View All
            </Link>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {[
              "CPA Firm Growth Strategies",
              "Building Offshore Teams",
              "India GCC Expansion Guide",
            ].map((article) => (
              <div
                key={article}
                className="border rounded-2xl p-8 hover:shadow-lg transition"
              >
                <BookOpen className="h-8 w-8 text-blue-600 mb-4" />

                <h3 className="font-bold text-xl">
                  {article}
                </h3>

                <p className="text-slate-600 mt-3">
                  Strategic insights and practical
                  frameworks for growth.
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Ready to Scale Your Firm?
          </h2>

          <p className="mt-6 text-xl">
            Build a stronger global delivery model and unlock
            sustainable growth with 808 Strategy.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold"
          >
            Schedule Strategy Call
          </Link>

        </div>

      </section>

    </main>
  )
}