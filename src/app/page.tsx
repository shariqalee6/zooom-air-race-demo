import { mockEvents } from "@/src/lib/mockEvents";

export default function Home() {
  return (
    <main className="min-h-screen p-6">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold tracking-tight">
          Air Race Events Overview
        </h1>

        <div className="mt-6 space-y-4">
          {mockEvents.map((event) => (
            <div key={event.id} className="border rounded-lg p-4 shadow-sm">
              <h2 className="text-lg font-medium">{event.title}</h2>
              <p className="text-sm text-gray-600">{event.description}</p>

              <p className="text-xs text-gray-500 mt-2">
                {event.address}, {event.country}
              </p>

              <span className="text-xs font-semibold mt-2 inline-block">
                Category: {event.category}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
