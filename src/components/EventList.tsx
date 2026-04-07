import { EventItem } from "../lib/types";
import { EventCard } from "./EventCard";

type EventListProps = {
  events: EventItem[];
};

export function EventList({ events }: EventListProps) {
  if (events.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed p-6 text-sm text-gray-500">
        No events found.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
