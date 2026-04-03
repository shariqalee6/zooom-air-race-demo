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
        async function fetchEvents() {
            try {
                setLoading(true);
                const response = await fetch("/api/events");

                if (!response.ok) {
                    throw new Error("Request failed");
                }

                const data: EventsResponse = await response.json();
                setEvents(data.events);
            } catch {
                setError("Failed to load events");
            } finally {
                setLoading(false);
            }
        }

        fetchEvents();
    }, []);

    return { events, loading, error };
}