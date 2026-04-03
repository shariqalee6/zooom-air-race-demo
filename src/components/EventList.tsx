import { EventItem } from "../lib/types";
import { EventCard } from "./EventCard";

type EventListProps = {
  events: EventItem[];
};

export function EventList({ events }: EventListProps) {
  return (
    <div className="space-y-4">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
