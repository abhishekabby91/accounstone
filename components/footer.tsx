import Link from "next/link"
import { Linkedin, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Why India", href: "/doing-business-in-india" },
  { label: "Arbitration Services", href: "/arbitration-services" },
  { label: "HR Services", href: "/hr-services" },
  { label: "Global Support", href: "/outsourcing" },
]

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/career" },
  { label: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">

          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-1">

            <Link href="/" className="flex flex-col mb-4">
              <span className="text-xl sm:text-2xl font-bold tracking-wide text-gold">
                AU Corporate
              </span>
              <span className="text-[10px] sm:text-[11px] text-blue tracking-[0.25em] uppercase font-medium">
                Growing Together
              </span>
            </Link>

            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Supporting global businesses in establishing and operating in India through expert advisory, compliance, and outsourcing solutions.
            </p>

            <a
              href="https://www.linkedin.com/company/a-u-corporate/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-yellow-500 transition"
            >
              <Linkedin className="h-5 w-5" />
              <span className="text-sm">LinkedIn</span>
            </a>

          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-yellow-500 font-semibold mb-4 text-sm sm:text-base">
              Quick Links
            </h3>

            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-yellow-500 text-sm transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-yellow-500 font-semibold mb-4 text-sm sm:text-base">
              Company
            </h3>

            <ul className="space-y-2 sm:space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-yellow-500 text-sm transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-yellow-500 font-semibold mb-4 text-sm sm:text-base">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                <a
                  href="mailto:partner@theaucorp.com"
                  className="text-gray-500 hover:text-yellow-500 text-sm break-all"
                >
                  partner@theaucorp.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                <span className="text-gray-500 text-sm">
                  222, First Floor, World Trade Tower, Barakhamba Road, Connaught Place, New Delhi – 110001
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">

            <p className="text-gray-400 text-xs sm:text-sm">
              © {new Date().getFullYear()} AU Corporate. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-yellow-500 text-xs sm:text-sm">
                Privacy
              </Link>

              <Link href="/terms" className="text-gray-400 hover:text-yellow-500 text-xs sm:text-sm">
                Terms
              </Link>
            </div>

          </div>

        </div>

      </div>

    </footer>
  )
}