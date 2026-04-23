"use client"

import Image from "next/image"

const sectors = [
  {
    title: "Chemicals",
    image: "https://cdn.corenexis.com/files/c/1846253720.jpg",
    points: [
      "USD 304 Bn market size by 2025",
      "Contributes ~3% to global chemical industry",
    ],
  },
  {
    title: "Pharmaceuticals",
    image: "https://cdn.corenexis.com/files/c/8581953720.jpg",
    points: [
      "20% of global generic medicine supply",
      "Market expected to reach USD 130 Bn by 2030",
      "USD 16.2 Bn FDI inflow",
    ],
  },
  {
    title: "IT - BPM",
    image: "https://cdn.corenexis.com/files/c/4374972720.jpg",
    points: [
      "Accounts for ~8% of GDP",
      "Expected to reach USD 350 Bn by 2025",
      "No.1 global IT sourcing destination",
    ],
  },
  {
    title: "Automobile / EV",
    image: "https://cdn.corenexis.com/files/c/3863859720.jpg",
    points: [
      "4th largest automotive market globally",
      "Largest 2-wheeler manufacturer",
      "Growing EV ecosystem",
    ],
  },
  {
    title: "Electronics",
    image: "https://cdn.corenexis.com/files/c/8554366720.jpg",
    points: [
      "268+ manufacturing units established",
      "Rapid growth in mobile production",
    ],
  },
  {
    title: "Construction",
    image: "https://cdn.corenexis.com/files/c/7788446720.jpg",
    points: [
      "USD 1 Trillion market by 2025",
      "Major GDP contributor",
    ],
  },
  {
    title: "Food Processing",
    image: "https://cdn.corenexis.com/files/c/2612556720.jpg",
    points: [
      "2nd largest food producer globally",
      "Mega food parks boosting investment",
    ],
  },
  {
    title: "Healthcare",
    image: "https://cdn.corenexis.com/files/c/4785839720.jpg",
    points: [
      "Fast-growing sector",
      "Expected to reach USD 372 Bn",
    ],
  },
  {
    title: "Renewable Energy",
    image: "https://cdn.corenexis.com/files/c/6554291720.jpg",
    points: [
      "1000+ GW potential",
      "Strong government push",
    ],
  },
]

export default function SectorSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-3xl font-bold text-center mb-4">
          Sector Wise Opportunities in India
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore high-growth sectors in India offering strong investment potential,
          policy support, and global competitiveness.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >

              {/* IMAGE */}
              <div className="relative h-48 w-full">
                <Image
                  src={sector.image}
                  alt={sector.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3">
                  {sector.title}
                </h3>

                <ul className="text-sm text-gray-600 space-y-2">
                  {sector.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}