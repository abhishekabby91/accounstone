// app/services/taxation-regulatory/page.tsx

export default function Page() {
  const directTax = [
    "International Taxation Services",
    "Advance Pricing Agreement (APA)",
    "Transfer Pricing Services",
    "Corporate Tax",
    "Trust, Family Office & Succession Planning",
  ]

  const gst = [
    "GST Registration",
    "GST Compliance",
    "GST Litigation Handling and Advisory Services",
    "GST Refund and Demand Settlement",
    "GST E-Invoice and E-Way Bill",
    "GST Health Check-Up",
    "GST Annual Return and GST Audit",
  ]

  const regulatory = [
    "FEMA Compliance Services",
    "FCRA Registration",
    "Trade License Registration",
    "FSSAI Registration",
    "MSME Registration",
    "Import-Export Code (IEC) Registration",
  ]

  const legal = [
    "Company Incorporation & Statutory Registrations",
    "Corporate Secretarial Services",
    "SEBI Compliance Services",
    "Intellectual Property Rights (IPR) Services",
    "Labour Law Services",
    "Contract Management Services",
    "Corporate Legal Advisory Services",
  ]

  return (
    <div className="min-h-screen pt-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-[#081a42] mb-6">
          Taxation & Regulatory Services
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-600 mb-12 max-w-3xl">
          We provide end-to-end taxation and regulatory advisory services to help
          businesses stay compliant, optimize tax structures, and navigate
          complex legal frameworks efficiently.
        </p>

        {/* DIRECT TAX */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Direct Taxation</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {directTax.map((item, i) => (
              <div key={i} className="border p-4 rounded-lg hover:shadow">
                • {item}
              </div>
            ))}
          </div>
        </section>

        {/* GST */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Goods & Service Tax (GST)
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {gst.map((item, i) => (
              <div key={i} className="border p-4 rounded-lg hover:shadow">
                • {item}
              </div>
            ))}
          </div>
        </section>

        {/* REGULATORY */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Regulatory Services
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {regulatory.map((item, i) => (
              <div key={i} className="border p-4 rounded-lg hover:shadow">
                • {item}
              </div>
            ))}
          </div>
        </section>

        {/* SECRETARIAL & LEGAL */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Secretarial & Legal
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {legal.map((item, i) => (
              <div key={i} className="border p-4 rounded-lg hover:shadow">
                • {item}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}