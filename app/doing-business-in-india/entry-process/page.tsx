"use client"

export default function Page() {
  return (
    <div className="min-h-screen bg-white py-20 px-6 max-w-5xl mx-auto">

      <h1 className="text-4xl font-bold text-[#081a42] mb-6">
        Entry Process & Business Structures
      </h1>

      <p className="mb-6 text-gray-700">
        Setting up a business in India involves a structured process. We guide you through each step to ensure a smooth entry.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Step-by-Step Entry Process</h2>

      <ul className="space-y-3 text-gray-700 mb-8">
        <li><strong>1. Feasibility Analysis:</strong> Understanding your business model and market potential.</li>
        <li><strong>2. Structure Selection:</strong> Choosing the right legal entity for your operations.</li>
        <li><strong>3. Regulatory Approvals:</strong> Compliance with authorities such as RBI (central bank) and government bodies.</li>
        <li><strong>4. Incorporation:</strong> Registering your business and starting operations.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Common Business Structures</h2>

      <ul className="space-y-3 text-gray-700">
        <li><strong>Wholly Owned Subsidiary:</strong> Full ownership with limited liability protection.</li>
        <li><strong>LLP (Limited Liability Partnership):</strong> Flexible structure with lower compliance.</li>
        <li><strong>Joint Venture:</strong> Partnership with an Indian company.</li>
        <li><strong>Branch / Liaison Office:</strong> For representation or limited business activities.</li>
      </ul>

    </div>
  )
}