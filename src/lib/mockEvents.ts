import { EventItem } from "./types";

export const mockEvents: EventItem[] = [
    {
        id: "1",
        title: "Vienna Air Race",
        description: "High-speed race over Vienna skyline",
        address: "Vienna City Center",
        country: "Austria",
        coordinates: { lat: 48.2082, lng: 16.3738 },
        category: "A",
    },
    {
        id: "2",
        title: "Dubai Desert Race",
        description: "Extreme race in desert conditions",
        address: "Dubai Marina",
        country: "UAE",
        coordinates: { lat: 25.2048, lng: 55.2708 },
        category: "B",
    },
    {
        id: "3",
        title: "New York Sky Challenge",
        description: "Urban skyline air race",
        address: "Manhattan",
        country: "USA",
        coordinates: { lat: 40.7128, lng: -74.006 },
        category: "A",
    },
    {
        id: "4",
        title: "Tokyo Precision Race",
        description: "Technical race with tight turns",
        address: "Tokyo Bay",
        country: "Japan",
        coordinates: { lat: 35.6762, lng: 139.6503 },
        category: "B",
    },
];