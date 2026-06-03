import Link from "next/link"
import Image from "next/image"
import { Linkedin, Mail, MapPin, Phone } from "lucide-react"

const quickLinks = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Offshore Staffing",
    href: "/offshore-staffing",
  },
  {
    label: "Operational Excellence",
    href: "/operational-excellence",
  },
  {
    label: "India Expansion",
    href: "/india-expansion",
  },
  {
    label: "Insights",
    href: "/blog",
  },
]

const companyLinks = [
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Terms & Conditions",
    href: "/terms",
  },
]

export function Footer() {
  return (
    <footer className="bg-[#0B1445] text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>

            <Link href="/" className="inline-block mb-6">

              <Image
                src="/logo.png"
                alt="808 Strategy"
                width={220}
                height={70}
                className="h-auto"
              />

            </Link>

            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Helping accounting firms scale through offshore staffing,
              operational excellence, and strategic expansion into India.
            </p>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/70 hover:text-[#F97316] transition"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-lg font-semibold mb-6 text-[#F97316]">
              Solutions
            </h3>

            <ul className="space-y-3">

              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* COMPANY */}
          <div>

            <h3 className="text-lg font-semibold mb-6 text-[#F97316]">
              Company
            </h3>

            <ul className="space-y-3">

              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-lg font-semibold mb-6 text-[#F97316]">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">

                <Mail className="h-5 w-5 text-[#F97316] shrink-0 mt-0.5" />

                <a
                  href="mailto:hello@808strategy.com"
                  className="text-white/70 hover:text-white transition"
                >
                  hello@808strategy.com
                </a>

              </div>

              <div className="flex items-start gap-3">

                <Phone className="h-5 w-5 text-[#F97316] shrink-0 mt-0.5" />

                <span className="text-white/70">
                  +91 99990 10513
                </span>

              </div>

              <div className="flex items-start gap-3">

                <MapPin className="h-5 w-5 text-[#F97316] shrink-0 mt-0.5" />

                <span className="text-white/70 text-sm">
                  New Delhi, India
                  <br />
                  Serving Clients Across
                  USA, UK, Australia & Canada
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}

        <div className="mt-14 pt-8 border-t border-white/10">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} 808 Strategy.
              All Rights Reserved.
            </p>

            <div className="flex items-center gap-6">

              <Link
                href="/privacy"
                className="text-white/50 hover:text-white text-sm transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-white/50 hover:text-white text-sm transition"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  )
}