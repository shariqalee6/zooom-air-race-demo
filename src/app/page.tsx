"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { useEvents } from "../hooks/useEvents";
import { EventList } from "../components/EventList";
import { CategoryFilter } from "../components/CategoryFilter";
import { SearchBar } from "../components/SearchBar";
import { EventItem } from "../lib/types";
import { filterEvents } from "../lib/eventFilters";

type Category = "ALL" | "A" | "B";

const MapView = dynamic(() => import("../components/MapView"), {
  ssr: false,
});

export default function Home() {
  const { events, loading, error } = useEvents();
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = useMemo(() => {
    return filterEvents(events, activeCategory, searchQuery);
  }, [events, activeCategory, searchQuery]);

  function handleSelect(event: EventItem) {
    setSelectedId(event.id);
  }

  function handleHover(event: EventItem | null) {
    setHoveredId(event ? event.id : null);
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <section className="mx-auto max-w-7xl">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight">
            Air Race Events Overview
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Explore global events through a structured list and map view.
          </p>
        </header>

        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <CategoryFilter
            activeCategory={activeCategory}
            onChange={(category) => {
              setActiveCategory(category);
              setSelectedId(null);
              setHoveredId(null);
            }}
          />

          <SearchBar
            value={searchQuery}
            onChange={(value) => {
              setSearchQuery(value);
              setSelectedId(null);
              setHoveredId(null);
            }}
          />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div>
            {loading && (
              <p className="text-sm text-gray-500">Loading events...</p>
            )}
            {error && <p className="text-sm text-red-600">{error}</p>}
            {!loading && !error && (
              <MapView
                events={filteredEvents}
                selectedId={selectedId}
                hoveredId={hoveredId}
                onSelect={handleSelect}
                onHover={handleHover}
              />
            )}
          </div>

          <div>
            {!loading && !error && (
              <EventList
                events={filteredEvents}
                selectedId={selectedId}
                hoveredId={hoveredId}
                onSelect={handleSelect}
                onHover={handleHover}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
