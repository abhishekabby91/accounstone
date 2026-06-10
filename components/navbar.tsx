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
          />
        </Link>

        <nav className="hidden lg:flex gap-8">

          <Link href="/solutions">
            Solutions
          </Link>

          <Link href="/services">
            Services
          </Link>

          <Link href="/markets">
            Markets
          </Link>

          <Link href="/technology">
            Technology
          </Link>

          <Link href="/resources">
            Resources
          </Link>

          <Link href="/about">
            Company
          </Link>

        </nav>

        <Link
          href="/contact"
          className="bg-orange-500 text-white px-5 py-3 rounded-xl"
        >
          Schedule Consultation
        </Link>

      </div>
    </header>
  );
}