export default function CaseStudiesPage() {
  return (
    <main className="py-24">

      <div className="container mx-auto px-6">

        <h1 className="text-5xl font-bold">
          Case Studies
        </h1>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          <div className="border p-8 rounded-xl">
            <h3 className="font-bold">
              CPA Firm Growth
            </h3>
          </div>

          <div className="border p-8 rounded-xl">
            <h3 className="font-bold">
              Offshore Team Buildout
            </h3>
          </div>

          <div className="border p-8 rounded-xl">
            <h3 className="font-bold">
              India GCC Strategy
            </h3>
          </div>

        </div>

      </div>

    </main>
  )
}