const resources = [
  "CPA Growth Playbook",
  "Offshore Readiness Assessment",
  "India Expansion Guide",
  "Operational Excellence Checklist",
]

export default function ResourcesPage() {
  return (
    <main className="py-24">

      <div className="container mx-auto px-6">

        <h1 className="text-5xl font-bold">
          Resources
        </h1>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {resources.map((resource) => (
            <div
              key={resource}
              className="border rounded-xl p-8"
            >
              <h3 className="text-xl font-bold">
                {resource}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </main>
  )
}