import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold">Accounstone</h3>

        <p className="mt-4 text-slate-300">
          Offshore Accounting & Staffing Solutions for
          USA, UK and Australia.
        </p>

        <div className="mt-8 flex gap-6">
          <a
            href="https://www.linkedin.com/company/accounstone/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-10 text-sm text-slate-400">
          © 2026 Accounstone. All rights reserved.
        </div>
      </div>
    </footer>
  );
}