"use client"

import { MessageCircle, Linkedin, Mail } from "lucide-react"

export function Sidebar() {
  return (
    <div className="hidden sm:flex fixed right-4 top-1/2 -translate-y-1/2 flex-col gap-4 z-60">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919990597192"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-accent-light text-white p-3 rounded-full shadow-lg
        hover:shadow-lg transition-all duration-300"
      >
        <div className="animate-float-slow group-hover:scale-110 transition-transform">
          <MessageCircle size={18} className="group-hover:rotate-12 transition" />
        </div>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/company/accounstone/?viewAsMember=true"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-primary text-white p-3 rounded-full shadow-lg
        hover:shadow-lg transition-all duration-300"
      >
        <div className="animate-float-medium group-hover:scale-110 transition-transform">
          <Linkedin size={18} className="group-hover:-rotate-12 transition" />
        </div>
      </a>

      {/* Email */}
      <a
        href="mailto:partner@accounstone.com"
        className="group bg-primary-dark text-white p-3 rounded-full shadow-lg
        hover:shadow-lg transition-all duration-300"
      >
        <div className="animate-float-fast group-hover:scale-110 transition-transform">
          <Mail size={18} className="group-hover:rotate-12 transition" />
        </div>
      </a>

      {/* GLOBAL ANIMATIONS */}
      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes floatMedium {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes floatFast {
          0%, 100% { transform: translateY(0); }
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