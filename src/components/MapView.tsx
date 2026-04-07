"use client";

import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { EventItem } from "../lib/types";

type MapViewProps = {
  events: EventItem[];
};

function createMarkerIcon(category: "A" | "B") {
  return L.divIcon({
    className: "",
    html: `
      <div style="
        width: 16px;
        height: 16px;
        border-radius: 9999px;
        border: 2px solid #111827;
        background: ${category === "A" ? "#ffffff" : "#111827"};
        box-shadow: 0 2px 6px rgba(0,0,0,0.25);
      "></div>
    `,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });
}

export default function MapView({ events }: MapViewProps) {
  const center: [number, number] = events[0]
    ? [events[0].coordinates.lat, events[0].coordinates.lng]
    : [20, 0];

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

        {events.map((event) => (
          <Marker
            key={event.id}
            position={[event.coordinates.lat, event.coordinates.lng]}
            icon={createMarkerIcon(event.category)}
          >
            <Popup>
              <div>
                <strong>{event.title}</strong>
                <p>{event.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
