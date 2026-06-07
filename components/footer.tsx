import Link from "next/link"
import {
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Top Section */}

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Brand */}

          <div className="lg:col-span-2">

            <div>

              <h2 className="text-4xl font-bold text-blue-500">
                808
              </h2>

              <p className="tracking-[0.35em] text-xs text-slate-400">
                STRATEGY
              </p>

            </div>

            <p className="mt-6 text-slate-400 leading-relaxed max-w-md">
              Helping accounting firms scale through operational excellence,
              global talent strategies, offshore delivery models,
              and India expansion using the ONEGD™ Framework.
            </p>

            <div className="mt-8 space-y-3">

              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="h-4 w-4" />
                hello@808strategy.com
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="h-4 w-4" />
                +91 00000 00000
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="h-4 w-4" />
                New Delhi, India
              </div>

            </div>

            <div className="mt-8">

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>

            </div>

          </div>

          {/* Expertise */}

          <div>

            <h3 className="font-semibold text-white mb-6">
              Expertise
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <Link href="/expertise/firm-growth">
                  CPA Firm Growth
                </Link>
              </li>

              <li>
                <Link href="/expertise/global-delivery">
                  Global Delivery
                </Link>
              </li>

              <li>
                <Link href="/expertise/operational-excellence">
                  Operational Excellence
                </Link>
              </li>

              <li>
                <Link href="/expertise/india-expansion">
                  India Expansion
                </Link>
              </li>

            </ul>

          </div>

          {/* ONEGD */}

          <div>

            <h3 className="font-semibold text-white mb-6">
              ONEGD™
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <Link href="/onegd">
                  Framework
                </Link>
              </li>

              <li>
                <Link href="/onegd/talent">
                  Talent
                </Link>
              </li>

              <li>
                <Link href="/onegd/operations">
                  Operations
                </Link>
              </li>

              <li>
                <Link href="/onegd/technology">
                  Technology
                </Link>
              </li>

              <li>
                <Link href="/onegd/governance">
                  Governance
                </Link>
              </li>

            </ul>

          </div>

          {/* Media */}

          <div>

            <h3 className="font-semibold text-white mb-6">
              Insights
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <Link href="/podcast">
                  Coffee With Dhawan
                </Link>
              </li>

              <li>
                <Link href="/insights">
                  Articles
                </Link>
              </li>

              <li>
                <Link href="/insights/case-studies">
                  Case Studies
                </Link>
              </li>

              <li>
                <Link href="/insights/reports">
                  Reports
                </Link>
              </li>

              <li>
                <Link href="/about">
                  About Gaurav Dhawan
                </Link>
              </li>

            </ul>

          </div>

        </div>

      </div>

      {/* CTA Band */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>

            <h3 className="text-xl font-semibold">
              Ready to Scale Your Accounting Firm?
            </h3>

            <p className="text-slate-400 mt-2">
              Build a stronger global delivery model with 808 Strategy.
            </p>

          </div>

          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-medium"
          >
            Schedule Strategy Call
          </Link>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} 808 Strategy. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-500">

            <Link href="/privacy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms & Conditions
            </Link>

            <Link href="/contact">
              Contact
            </Link>

          </div>

        </div>

      </div>

    </footer>
  )
}