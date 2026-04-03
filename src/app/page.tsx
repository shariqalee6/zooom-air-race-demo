"use client";

import { useEvents } from "../hooks/useEvents";

export default function Home() {
  const { events, loading, error } = useEvents();

  return (
    <main className="min-h-screen p-6">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold tracking-tight">
          Air Race Events Overview
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Explore global events through a structured list and map view.
        </p>

        <div className="mt-6">
          {loading && (
            <p className="text-sm text-gray-500">Loading events...</p>
          )}

          {error && <p className="text-sm text-red-600">{error}</p>}

          {!loading && !error && (
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="rounded-lg border p-4 shadow-sm">
                  <h2 className="text-lg font-medium">{event.title}</h2>
                  <p className="text-sm text-gray-600">{event.description}</p>
                  <p className="mt-2 text-xs text-gray-500">
                    {event.address}, {event.country}
                  </p>
                  <p className="mt-2 text-xs font-semibold">
                    Category: {event.category}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
