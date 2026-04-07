export type EventCategory = "Championship" | "Challenger";

export type EventFilterCategory = "ALL" | EventCategory;

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
  category: EventCategory;
};
