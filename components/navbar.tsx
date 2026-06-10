import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Accounstone"
            width={180}
            height={50}
            priority
          />
        </Link>

        <nav className="hidden lg:flex gap-8 text-sm font-medium">
          <Link href="/solutions">Solutions</Link>
          <Link href="/services">Services</Link>
          <Link href="/markets">Markets</Link>
          <Link href="/technology">Technology</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/about">Company</Link>
        </nav>

        <Link
          href="/contact"
          className="bg-blue-700 text-white px-5 py-3 rounded-lg"
        >
          Schedule Consultation
        </Link>
      </div>
    </header>
  );
}