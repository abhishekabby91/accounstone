// app/services/risk-management/page.tsx

export default function Page() {
  const riskManagement = [
    "Internal Audit",
    "Internal Audit Transformation",
    "Enterprises Risk Management",
    "Risk and Control Registers",
    "Process Designing and Documentation",
    "SOX/JSOX Reviews - Design and Testing",
    "IFC/ICFR - Design and Testing",
  ]

  const forensic = [
    "Fraud Risk Assessments & Investigations",
    "Enforcement Agencies Assistance - CBI, SFIO",
    "Forensic Audit Under RBI Guidelines",
    "Transaction Audit Under IBC 2016",
    "Digital Forensic",
    "Anti Bribery and Corruption",
    "Assets Tracing",
    "AML and KYC Review",
  ]

  const audit = [
    "Project Audit",
    "Concurrent Audit / Pre-Audit",
    "Fixed Asset Management and Verification",
    "Inventory Control and Stock Audit Service",
    "Agency for Specialized Monitoring (ASM)",
  ]

  return (
    <div className="min-h-screen pt-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-[#081a42] mb-6">
          Risk Management
        </h1>

        <p className="text-gray-600 mb-12 max-w-3xl">
          We provide comprehensive risk management services to help organizations identify, assess, and mitigate risks while strengthening internal controls and enhancing governance frameworks.
        </p>

        {/* SECTION 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Risk Management</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {riskManagement.map((item, i) => (
              <div key={i} className="border p-4 rounded-lg hover:shadow">
                • {item}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Forensic Services</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {forensic.map((item, i) => (
              <div key={i} className="border p-4 rounded-lg hover:shadow">
                • {item}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Special Audit / Review
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {audit.map((item, i) => (
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