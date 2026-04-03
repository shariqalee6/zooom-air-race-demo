import { EventItem } from "../lib/types";

type EventCardProps = {
  event: EventItem;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="rounded-lg border p-4 shadow-sm transition hover:shadow-md">
      <h2 className="text-lg font-medium">{event.title}</h2>
      <p className="text-sm text-gray-600">{event.description}</p>

      <p className="mt-2 text-xs text-gray-500">
        {event.address}, {event.country}
      </p>

      <p className="mt-2 text-xs font-semibold">Category: {event.category}</p>
    </article>
  );
}
