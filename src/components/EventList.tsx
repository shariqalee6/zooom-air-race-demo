import { EventItem } from "../lib/types";
import { EventCard } from "./EventCard";

type EventListProps = {
  events: EventItem[];
  selectedId: string | null;
  hoveredId: string | null;
  onSelect: (event: EventItem) => void;
  onHover: (event: EventItem | null) => void;
};

export function EventList({
  events,
  selectedId,
  hoveredId,
  onSelect,
  onHover,
}: EventListProps) {
  if (events.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed bg-white p-6 text-sm text-gray-500">
        No events found for the current filters.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          isActive={selectedId === event.id}
          isHovered={hoveredId === event.id}
          onClick={onSelect}
          onMouseEnter={onHover}
          onMouseLeave={() => onHover(null)}
        />
      ))}
    </div>
  );
}
