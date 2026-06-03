import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Globe, Briefcase, TrendingUp } from "lucide-react"

export const metadata = {
  title: "About Us",
  description:
    "Learn about 808 Strategy and how we help accounting firms scale through offshore staffing, operational excellence, and India expansion.",
}

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1445] via-[#0072BC] to-[#0B1445]" />

        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About 808 Strategy
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-white/80">
            Helping accounting firms unlock scalable growth through
            offshore talent, operational excellence, and strategic
            expansion into India.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1445] mb-6">
                Who We Are
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                808 Strategy is a growth-focused consulting firm helping
                accounting practices build sustainable and scalable
                businesses through strategic offshore staffing and
                operational transformation.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                We partner with firms across the United States, United
                Kingdom, Australia, and Canada to create efficient
                operating models that support growth without increasing
                operational complexity.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Our approach combines talent strategy, process
                optimization, and practical execution to help firms
                improve profitability and scale confidently.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  alt="808 Strategy Team"
                  width={900}
                  height={700}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1445] mb-4">
              What Drives Us
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto">
              We believe growth should be strategic, sustainable, and
              supported by the right people and systems.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <Users className="h-10 w-10 text-[#0072BC] mb-4" />
              <h3 className="font-semibold text-xl mb-3">
                People First
              </h3>
              <p className="text-gray-600">
                Building exceptional teams that support long-term
                business success.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <TrendingUp className="h-10 w-10 text-[#0072BC] mb-4" />
              <h3 className="font-semibold text-xl mb-3">
                Growth Focused
              </h3>
              <p className="text-gray-600">
                Helping firms achieve scalable and profitable growth.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <Globe className="h-10 w-10 text-[#0072BC] mb-4" />
              <h3 className="font-semibold text-xl mb-3">
                Global Mindset
              </h3>
              <p className="text-gray-600">
                Connecting international firms with world-class talent.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <Briefcase className="h-10 w-10 text-[#0072BC] mb-4" />
              <h3 className="font-semibold text-xl mb-3">
                Execution Excellence
              </h3>
              <p className="text-gray-600">
                Practical strategies backed by measurable outcomes.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-24">

        <div className="max-w-6xl mx-auto px-4">

          <div className="bg-white border rounded-3xl p-10 md:p-14 shadow-lg">

            <div className="text-center">

              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1445] mb-6">
                Leadership
              </h2>

              <h3 className="text-2xl font-semibold mb-4">
                Gaurav Dhawan
              </h3>

              <p className="text-[#0072BC] font-medium mb-6">
                Founder & Strategic Advisor
              </p>

              <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Gaurav works with accounting firms to design scalable
                growth strategies through offshore staffing, operational
                excellence, and international expansion. His focus is on
                helping firms build stronger teams, streamline
                operations, and create sustainable growth models.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0B1445]">

        <div className="max-w-5xl mx-auto px-4 text-center text-white">

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Scale Your Accounting Firm?
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Discover how offshore talent, operational excellence,
            and strategic growth planning can transform your firm.
          </p>

          <Button
            asChild
            className="bg-[#F97316] hover:bg-[#EA580C] text-white"
          >
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

        </div>

      </section>

    </div>
  )
}