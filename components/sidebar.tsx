"use client"

import { MessageCircle, Linkedin, Mail } from "lucide-react"

export function Sidebar() {
  return (
    <div className="hidden sm:flex fixed right-4 top-1/2 -translate-y-1/2 flex-col gap-3 z-[60]">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919999010513"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <MessageCircle size={18} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/company/28753559"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <Linkedin size={18} />
      </a>

      {/* Email */}
      <a
        href="mailto:partner@theaucorp.com"
        aria-label="Email"
        className="bg-red-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <Mail size={18} />
      </a>

    </div>
  )
}