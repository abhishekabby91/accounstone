import Link from 'next/link'
import { Linkedin, Mail, MapPin } from 'lucide-react'

const quickLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Why India', href: '/why-india' },
  { label: 'Arbitration Services', href: '/arbitration-services' },
  { label: 'HR Services', href: '/hr-services' },
  { label: 'Global Support', href: '/outsourcing' },
]

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/career' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">

            <Link href="/" className="flex flex-col mb-6">
              <span className="text-2xl font-bold tracking-wide text-gold">
                AU Corporate
              </span>
              <span className="text-[10px] text-blue tracking-[0.25em] uppercase font-medium">
                Growing Together
              </span>
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Supporting global businesses in establishing and operating in India through expert advisory, compliance, and outsourcing solutions.
            </p>

            <a
              href="https://www.linkedin.com/company/a-u-corporate/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors duration-200"
            >
              <Linkedin className="h-5 w-5" />
              <span className="text-sm">Follow us on LinkedIn</span>
            </a>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-gold hover:pl-2 transition-all duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gold font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-gold hover:pl-2 transition-all duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gold font-semibold mb-6">Contact Us</h3>

            <ul className="space-y-4">

              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <a
                  href="mailto:partner@theaucorp.com"
                  className="text-muted-foreground hover:text-gold transition-colors duration-200 text-sm"
                >
                  partner@theaucorp.com
                </a>
              </li>

              {/* LOCATION UPDATED */}
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  New Delhi & Haryana, India
                </span>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} AU Corporate. All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-gold text-sm"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-muted-foreground hover:text-gold text-sm"
              >
                Terms of Service
              </Link>
            </div>

          </div>
        </div>

      </div>
    </footer>
  )
}