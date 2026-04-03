export type EventItem = {
    id: string;
    title: string;
    description: string;
    address: string;
    country: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    category: "A" | "B";
};