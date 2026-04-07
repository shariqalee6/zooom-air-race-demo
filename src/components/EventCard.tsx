import { EventItem } from "../lib/types";

type EventCardProps = {
  event: EventItem;
  isActive?: boolean;
  isHovered?: boolean;
  onClick?: (event: EventItem) => void;
  onMouseEnter?: (event: EventItem) => void;
  onMouseLeave?: () => void;
};

export function EventCard({
  event,
  isActive,
  isHovered,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: EventCardProps) {
  return (
    <article
      onClick={() => onClick?.(event)}
      onMouseEnter={() => onMouseEnter?.(event)}
      onMouseLeave={onMouseLeave}
      className={`cursor-pointer rounded-2xl border p-4 shadow-sm transition
        ${isActive ? "border-black bg-black/5" : "border-gray-200 bg-white"}
        ${isHovered ? "ring-2 ring-black/30" : ""}`}
    >
      <h2 className="text-lg font-medium">{event.title}</h2>
      <p className="text-sm text-gray-600">{event.description}</p>

      <p className="mt-2 text-xs text-gray-500">
        {event.address}, {event.country}
      </p>

      <p className="mt-2 text-xs font-semibold">Category: {event.category}</p>
    </article>
  );
}
