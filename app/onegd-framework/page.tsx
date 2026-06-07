export default function OneGDPage() {
  return (
    <main>

      <section className="py-24">

        <div className="container mx-auto px-6 max-w-6xl">

          <span className="text-blue-600 font-semibold">
            Proprietary Framework
          </span>

          <h1 className="text-5xl font-bold mt-4">
            ONEGD Framework
          </h1>

          <p className="text-xl text-slate-600 mt-8">
            ONEGD (One Global Delivery) is a strategic framework
            designed to help accounting firms build scalable,
            efficient and secure global operations.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

            <div className="border rounded-xl p-8">
              <h3 className="font-bold text-xl">
                Talent
              </h3>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="font-bold text-xl">
                Operations
              </h3>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="font-bold text-xl">
                Technology
              </h3>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="font-bold text-xl">
                Governance
              </h3>
            </div>

          </div>

        </div>

      </section>
    </main>
  )
}