export default function FirmGrowthPage() {
  return (
    <main className="min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <span className="text-blue-600 font-semibold uppercase tracking-wider">
          CPA Firm Growth
        </span>

        <h1 className="text-5xl font-bold mt-4 mb-6">
          Build a More Profitable Accounting Firm
        </h1>

        <p className="text-xl text-slate-600 max-w-3xl">
          Learn how leading accounting firms improve profitability,
          optimize operations, strengthen partner economics, and
          create sustainable growth.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="border rounded-xl p-8">
            <h3 className="font-bold text-2xl mb-3">
              Revenue & Profitability
            </h3>

            <p className="text-slate-600">
              Improve realization rates, pricing strategy,
              utilization, and profitability.
            </p>
          </div>

          <div className="border rounded-xl p-8">
            <h3 className="font-bold text-2xl mb-3">
              Staffing & Talent
            </h3>

            <p className="text-slate-600">
              Build scalable teams and solve talent shortages.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}