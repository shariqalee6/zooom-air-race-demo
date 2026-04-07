import { EventItem } from "./types";

type Category = "ALL" | "A" | "B";

export function filterEvents(
    events: EventItem[],
    activeCategory: Category,
    searchQuery: string
) {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return events.filter((event) => {
        const matchesCategory =
            activeCategory === "ALL" || event.category === activeCategory;

        const matchesSearch =
            normalizedQuery.length === 0 ||
            event.title.toLowerCase().includes(normalizedQuery) ||
            event.address.toLowerCase().includes(normalizedQuery) ||
            event.country.toLowerCase().includes(normalizedQuery);

        return matchesCategory && matchesSearch;
    });
}