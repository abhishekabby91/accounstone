const episodes = [
  {
    title: "Building Global Accounting Teams",
  },
  {
    title: "Future of Offshore Delivery",
  },
  {
    title: "Scaling CPA Firms Successfully",
  },
]

export default function PodcastPage() {
  return (
    <main>

      <section className="py-24">

        <div className="container mx-auto px-6">

          <h1 className="text-5xl font-bold">
            Coffee With Dhawan
          </h1>

          <p className="text-xl text-slate-600 mt-6">
            Executive conversations on growth,
            leadership, offshore strategy and
            global accounting operations.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            {episodes.map((episode) => (
              <div
                key={episode.title}
                className="border rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold">
                  {episode.title}
                </h3>

                <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded">
                  Watch Episode
                </button>
              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  )
}