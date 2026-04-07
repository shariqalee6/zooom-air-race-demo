"use client";

import { useEffect, useState } from "react";
import { EventItem } from "../lib/types";

type EventsResponse = {
  events: EventItem[];
};

export function useEvents() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchEvents() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/api/events", {
          signal: abortController.signal,
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        const data: EventsResponse = await response.json();
        setEvents(data.events);
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          setError("Failed to load events");
        }
      } finally {
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchEvents();

    return () => {
      abortController.abort();
    };
  }, []);

  return { events, loading, error };
}
