"use client"

import { MessageCircle, Linkedin, Mail } from "lucide-react"

export function Sidebar() {
  return (
    <div className="hidden sm:flex fixed right-4 top-1/2 -translate-y-1/2 flex-col gap-4 z-[60]">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919999010513"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group bg-green-500 text-white p-3 rounded-full shadow-lg
        animate-float-slow hover:scale-110 hover:shadow-green-400/50 transition-all duration-300"
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
        className="group bg-blue-600 text-white p-3 rounded-full shadow-lg
        animate-float-medium hover:scale-110 hover:shadow-blue-400/50 transition-all duration-300"
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
        className="group bg-red-500 text-white p-3 rounded-full shadow-lg
        animate-float-fast hover:scale-110 hover:shadow-red-400/50 transition-all duration-300"
      >
        <Mail
          size={18}
          className="group-hover:rotate-12 transition-transform duration-300"
        />
      </a>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        @keyframes floatMedium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes floatFast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        .animate-float-slow {
          animation: floatSlow 4s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: floatMedium 3s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: floatFast 2.5s ease-in-out infinite;
        }
      `}</style>

    </div>
  )
}