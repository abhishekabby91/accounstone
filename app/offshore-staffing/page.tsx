import Link from "next/link"
import { Button } from "@/components/ui/button"

import {
  Globe,
  Users,
  CheckCircle2,
  ArrowRight,
  Building2,
  Clock3,
  DollarSign,
  ShieldCheck,
  Briefcase,
  FileSpreadsheet,
  Calculator,
  LineChart,
} from "lucide-react"

export default function OffshoreStaffingPage() {
  const services = [
    "Bookkeeping",
    "Tax Preparation",
    "Accounts Payable",
    "Accounts Receivable",
    "Audit Support",
    "Payroll Processing",
    "Management Reporting",
    "Financial Analysis",
  ]

  const process = [
    "Discovery & Requirement Analysis",
    "Candidate Shortlisting",
    "Technical Assessment",
    "Client Interviews",
    "Onboarding & Training",
    "Ongoing Performance Management",
  ]

  return (
    <div className="min-h-screen pt-20">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0B1445] text-white py-28">

        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1445] to-[#0072BC]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="max-w-4xl">

            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-[#F97316] text-sm font-semibold">
              Offshore Staffing Solutions
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
              Build Your Global Accounting Team
              <span className="block text-[#F97316]">
                Through India
              </span>
            </h1>

            <p className="mt-8 text-xl text-white/80 max-w-3xl">
              808 Strategy helps accounting firms scale efficiently by building
              dedicated offshore teams in India while maintaining quality,
              compliance, and operational excellence.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Button
                asChild
                size="lg"
                className="bg-[#F97316] hover:bg-[#ea580c]"
              >
                <Link href="/contact">
                  Schedule Consultation
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
              >
                <Link href="/about">
                  Learn More
                </Link>
              </Button>

            </div>

          </div>

        </div>

      </section>

      {/* WHY OFFSHORE */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-[#0B1445]">
              Why Offshore Staffing?
            </h2>

            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Accounting firms worldwide are leveraging offshore talent to
              overcome staffing shortages, improve profitability, and increase
              service capacity.
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              {
                icon: DollarSign,
                title: "Reduce Costs",
                text: "Lower operational expenses without compromising quality.",
              },
              {
                icon: Users,
                title: "Access Talent",
                text: "Large pool of qualified accounting professionals.",
              },
              {
                icon: Clock3,
                title: "Faster Turnaround",
                text: "Extended workday through global delivery models.",
              },
              {
                icon: ShieldCheck,
                title: "Operational Control",
                text: "Dedicated teams integrated into your workflows.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl border hover:shadow-xl transition duration-300"
              >
                <item.icon className="w-10 h-10 text-[#F97316] mb-4" />

                <h3 className="font-semibold text-xl mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-[#0B1445]">
              Roles We Support
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {services.map((service) => (
              <div
                key={service}
                className="bg-white p-6 rounded-xl border"
              >
                <CheckCircle2 className="text-[#F97316] mb-3" />

                <h3 className="font-semibold">
                  {service}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* STAFFING MODELS */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-[#0B1445]">
              Flexible Staffing Models
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-8 border rounded-2xl">
              <Users className="w-10 h-10 text-[#F97316] mb-4" />
              <h3 className="font-bold text-xl mb-3">
                Dedicated Staff
              </h3>
              <p>
                Full-time professionals exclusively aligned with your firm.
              </p>
            </div>

            <div className="p-8 border rounded-2xl">
              <Briefcase className="w-10 h-10 text-[#F97316] mb-4" />
              <h3 className="font-bold text-xl mb-3">
                Managed Teams
              </h3>
              <p>
                Entire offshore departments managed and monitored by us.
              </p>
            </div>

            <div className="p-8 border rounded-2xl">
              <Building2 className="w-10 h-10 text-[#F97316] mb-4" />
              <h3 className="font-bold text-xl mb-3">
                Build Operate Transfer
              </h3>
              <p>
                Establish your own India delivery center with our support.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* PROCESS */}

      <section className="py-24 bg-[#0B1445] text-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Our 6-Step Process
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {process.map((step, index) => (
              <div
                key={step}
                className="bg-white/10 backdrop-blur p-8 rounded-2xl"
              >
                <div className="text-[#F97316] text-4xl font-bold mb-4">
                  0{index + 1}
                </div>

                <h3 className="font-semibold text-xl">
                  {step}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* WHY INDIA */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="text-4xl font-bold text-[#0B1445] mb-6">
                Why India?
              </h2>

              <p className="text-gray-600 mb-6">
                India offers one of the world's largest pools of accounting,
                finance, and technology professionals.
              </p>

              <ul className="space-y-4">

                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#F97316]" />
                  Strong accounting & finance talent pool
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#F97316]" />
                  English-speaking professionals
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#F97316]" />
                  Significant cost efficiencies
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#F97316]" />
                  Global accounting expertise
                </li>

              </ul>
            </div>

            <div className="bg-gray-50 p-10 rounded-3xl">

              <Globe className="w-16 h-16 text-[#F97316] mb-4" />

              <h3 className="text-2xl font-bold mb-4">
                Global Delivery Excellence
              </h3>

              <p className="text-gray-600">
                Supporting firms across USA, UK, Australia and Canada with
                scalable offshore staffing solutions.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-[#F97316] text-white text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-5xl font-bold mb-6">
            Ready to Scale?
          </h2>

          <p className="text-xl mb-10">
            Build your offshore accounting team with 808 Strategy.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-white text-[#0B1445] hover:bg-gray-100"
          >
            <Link href="/contact">
              Talk To Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

        </div>

      </section>

    </div>
  )
}