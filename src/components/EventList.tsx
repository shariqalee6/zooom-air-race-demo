import { useEffect, useRef } from "react";
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
  const selectedCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (selectedCardRef.current) {
      selectedCardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [selectedId]);

  if (events.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed bg-white p-6 text-sm text-gray-500">
        No events found for the current filters.
      </div>
    );
  }

  return (
    <div className="rounded-2xl border bg-white p-3 shadow-sm lg:h-[460px] lg:overflow-y-auto">
      <div className="space-y-3">
        {events.map((event) => (
          <div
            key={event.id}
            ref={selectedId === event.id ? selectedCardRef : null}
          >
            <EventCard
              event={event}
              isActive={selectedId === event.id}
              isHovered={hoveredId === event.id}
              onClick={onSelect}
              onMouseEnter={onHover}
              onMouseLeave={() => onHover(null)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
