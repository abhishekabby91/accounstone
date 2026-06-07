import Image from "next/image"

export default function AboutPage() {
  return (
    <main>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <span className="text-blue-600 font-semibold">
                About
              </span>

              <h1 className="text-5xl font-bold mt-4">
                Helping Accounting Firms Scale Globally
              </h1>

              <p className="mt-8 text-lg text-slate-600">
                808 Strategy is a global advisory platform focused
                exclusively on helping accounting firms achieve
                sustainable growth through operational excellence,
                global talent strategies, and India expansion.
              </p>

              <p className="mt-6 text-lg text-slate-600">
                Founded by Gaurav Dhawan, 808 Strategy combines
                decades of operational experience with proven
                frameworks to help firms build scalable global
                delivery organizations.
              </p>
            </div>

            <div className="relative h-[600px] rounded-3xl overflow-hidden">
              <Image
                src="/gaurav.jpg"
                alt="Gaurav Dhawan"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>
      </section>

    </main>
  )
}