"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { useEvents } from "../hooks/useEvents";
import { EventList } from "../components/EventList";
import { CategoryFilter } from "../components/CategoryFilter";
import { SearchBar } from "../components/SearchBar";
import { EventFilterCategory, EventItem } from "../lib/types";
import { filterEvents } from "../lib/eventFilters";

const MapView = dynamic(() => import("../components/MapView"), {
  ssr: false,
});

export default function Home() {
  const { events, loading, error } = useEvents();
  const [activeCategory, setActiveCategory] =
    useState<EventFilterCategory>("ALL");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = useMemo(() => {
    return filterEvents(events, activeCategory, searchQuery);
  }, [events, activeCategory, searchQuery]);
  const isReady = !loading && !error;
  const hasVisibleEvents = filteredEvents.length > 0;

  function clearInteractionState() {
    setSelectedId(null);
    setHoveredId(null);
  }

  function handleSelect(event: EventItem) {
    setSelectedId(event.id);
  }

  function handleHover(event: EventItem | null) {
    setHoveredId(event ? event.id : null);
  }

  function handleCategoryChange(category: EventFilterCategory) {
    setActiveCategory(category);
    clearInteractionState();
  }

  function handleSearchChange(value: string) {
    setSearchQuery(value);
    clearInteractionState();
  }

  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <section className="mx-auto max-w-7xl">
        <header className="rounded-2xl border bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            Air Race Events Overview
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Explore global events through a structured list and map view.
          </p>

          <div className="mt-4 text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {filteredEvents.length}
            </span>{" "}
            event{filteredEvents.length !== 1 ? "s" : ""}
          </div>
        </header>

        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <CategoryFilter
            activeCategory={activeCategory}
            onChange={handleCategoryChange}
          />

          <SearchBar value={searchQuery} onChange={handleSearchChange} />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(360px,0.9fr)] lg:items-start">
          <div className="lg:sticky lg:top-6">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Map view
              </h2>
            </div>

            {loading && (
              <p className="rounded-2xl border bg-white p-6 text-sm text-gray-500">
                Loading events...
              </p>
            )}
            {error && (
              <p className="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-600">
                {error}
              </p>
            )}
            {isReady && (
              <MapView
                events={filteredEvents}
                selectedId={selectedId}
                hoveredId={hoveredId}
                onSelect={handleSelect}
                onHover={handleHover}
              />
            )}
          </div>

          <div className="min-h-0">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Event list
              </h2>
              {isReady && hasVisibleEvents && (
                <span className="text-xs text-gray-500">
                  Scroll to browse all events
                </span>
              )}
            </div>

            {isReady && (
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
