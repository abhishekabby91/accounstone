import Hero from "@/components/hero"

export default function HomePage() {
  return (
    <main>

      <Hero />

      <section className="py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold">
            Core Areas of Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

            <div className="border p-8 rounded-xl">
              <h3 className="font-bold text-xl">
                Firm Growth Strategy
              </h3>
            </div>

            <div className="border p-8 rounded-xl">
              <h3 className="font-bold text-xl">
                Global Delivery
              </h3>
            </div>

            <div className="border p-8 rounded-xl">
              <h3 className="font-bold text-xl">
                India Expansion
              </h3>
            </div>

            <div className="border p-8 rounded-xl">
              <h3 className="font-bold text-xl">
                Operational Excellence
              </h3>
            </div>

          </div>

        </div>
      </section>

    </main>
  )
}