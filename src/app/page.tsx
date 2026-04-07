"use client";

import { useState } from "react";
import { useEvents } from "../hooks/useEvents";
import { EventList } from "../components/EventList";
import { CategoryFilter } from "../components/CategoryFilter";

type Category = "ALL" | "A" | "B";

export default function Home() {
  const { events, loading, error } = useEvents();

  const [activeCategory, setActiveCategory] = useState<Category>("ALL");

  const filteredEvents =
    activeCategory === "ALL"
      ? events
      : events.filter((e) => e.category === activeCategory);

  return (
    <main className="min-h-screen p-6">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold tracking-tight">
          Air Race Events Overview
        </h1>

        <div className="mt-4">
          <CategoryFilter
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        <div className="mt-6">
          {loading && (
            <p className="text-sm text-gray-500">Loading events...</p>
          )}

          {error && <p className="text-sm text-red-600">{error}</p>}

          {!loading && !error && <EventList events={filteredEvents} />}
        </div>
      </section>
    </main>
  );
}
