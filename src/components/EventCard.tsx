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
      className={`cursor-pointer rounded-2xl border p-4 shadow-sm transition duration-200
        ${isActive ? "border-black bg-black/5" : "border-gray-200 bg-white"}
        ${isHovered ? "ring-2 ring-black/20" : ""}
        hover:border-black hover:shadow-md`}
    >
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-lg font-medium text-gray-900">{event.title}</h2>
        <span className="shrink-0 rounded-full border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-600">
          {event.category}
        </span>
      </div>

      <p className="mt-2 text-sm text-gray-600">{event.description}</p>

      <p className="mt-3 text-xs text-gray-500">
        {event.address}, {event.country}
      </p>
    </article>
  );
}
