"use client";

import L from "leaflet";
import { useEffect, useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { EventItem } from "../lib/types";

type MapViewProps = {
  events: EventItem[];
  selectedId: string | null;
  hoveredId: string | null;
  onSelect: (event: EventItem) => void;
  onHover: (event: EventItem | null) => void;
};

function createMarkerIcon(
  category: "A" | "B",
  state: "default" | "active" | "hovered",
) {
  const background =
    state === "active"
      ? "#111827"
      : state === "hovered"
        ? "#6b7280"
        : category === "A"
          ? "#ffffff"
          : "#d1d5db";

  return L.divIcon({
    className: "",
    html: `
      <div style="
        width: 16px;
        height: 16px;
        border-radius: 9999px;
        border: 2px solid #111827;
        background: ${background};
        box-shadow: 0 2px 6px rgba(0,0,0,0.25);
      "></div>
    `,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });
}

function MapController({ selected }: { selected?: EventItem }) {
  const map = useMap();

  useEffect(() => {
    if (selected) {
      map.setView(
        [selected.coordinates.lat, selected.coordinates.lng],
        Math.max(map.getZoom(), 4),
        {
          animate: true,
        },
      );
    }
  }, [selected, map]);

  return null;
}

export default function MapView({
  events,
  selectedId,
  hoveredId,
  onSelect,
  onHover,
}: MapViewProps) {
  const center: [number, number] = useMemo(() => {
    return events[0]
      ? [events[0].coordinates.lat, events[0].coordinates.lng]
      : [20, 0];
  }, [events]);

  const selectedEvent = events.find((event) => event.id === selectedId);
  const hoverEvent = events.find((event) => event.id === hoveredId);

  return (
    <div className="h-[520px] overflow-hidden rounded-2xl border bg-white shadow-sm">
      <MapContainer
        center={center}
        zoom={2}
        scrollWheelZoom
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapController selected={selectedEvent ?? hoverEvent} />

        {events.map((event) => {
          const isActive = selectedId === event.id;
          const isHovered = hoveredId === event.id;

          return (
            <Marker
              key={event.id}
              position={[event.coordinates.lat, event.coordinates.lng]}
              icon={createMarkerIcon(
                event.category,
                isActive ? "active" : isHovered ? "hovered" : "default",
              )}
              eventHandlers={{
                click: () => onSelect(event),
                mouseover: () => onHover(event),
                mouseout: () => onHover(null),
              }}
            >
              <Popup>
                <div>
                  <strong>{event.title}</strong>
                  <p>{event.description}</p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
