export default function ContactPage() {
  return (
    <main className="py-24">

      <div className="container mx-auto px-6 max-w-4xl">

        <h1 className="text-5xl font-bold">
          Contact Us
        </h1>

        <form className="mt-12 space-y-6">

          <input
            className="w-full border rounded-lg p-4"
            placeholder="Name"
          />

          <input
            className="w-full border rounded-lg p-4"
            placeholder="Email"
          />

          <textarea
            className="w-full border rounded-lg p-4 h-40"
            placeholder="Message"
          />

          <button
            className="bg-blue-600 text-white px-8 py-4 rounded-lg"
          >
            Submit
          </button>

        </form>

      </div>

    </main>
  )
}