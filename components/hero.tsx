import Link from "next/link"

export default function Hero() {
  return (
    <section className="py-28">

      <div className="container mx-auto px-6 max-w-7xl">

        <div className="max-w-4xl">

          <span className="text-blue-600 font-semibold">
            Global Growth Advisory
          </span>

          <h1 className="text-6xl font-bold mt-4 leading-tight">

            Building High-Performance
            Global Accounting Firms

          </h1>

          <p className="text-xl text-slate-600 mt-8">

            Helping accounting firm leaders
            unlock growth through operational
            excellence, global talent strategies,
            and scalable delivery models.

          </p>

          <div className="flex gap-4 mt-10">

            <Link
              href="/schedule-call"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg"
            >
              Schedule A Strategy Call
            </Link>

            <Link
              href="/insights"
              className="border px-8 py-4 rounded-lg"
            >
              Explore Insights
            </Link>

          </div>

        </div>

      </div>

    </section>
  )
}