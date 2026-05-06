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
        className="group bg-green-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-green-400/50 animate-bounce-slow"
      >
        <MessageCircle
          size={18}
          className="group-hover:rotate-12 transition-transform duration-300"
        />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/company/au-corporate/?viewAsMember=true"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="group bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-blue-400/50"
      >
        <Linkedin
          size={18}
          className="group-hover:-rotate-12 transition-transform duration-300"
        />
      </a>

      {/* Email */}
      <a
        href="mailto:partner@theaucorp.com"
        aria-label="Email"
        className="group bg-red-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-red-400/50"
      >
        <Mail
          size={18}
          className="group-hover:rotate-12 transition-transform duration-300"
        />
      </a>

      {/* Floating pulse ring effect */}
      <style jsx>{`
        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .animate-bounce-slow {
          animation: bounceSlow 3s infinite ease-in-out;
        }
      `}</style>

    </div>
  )
}