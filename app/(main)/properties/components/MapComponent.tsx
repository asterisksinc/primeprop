"use client";

import { useEffect, useRef, useState } from "react";
import L, { Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapComponentProps {
  location: { lat: number; lng: number };
  zoom: number;
  onLocationChange?: (location: { lat: number; lng: number }) => void;
  onZoomChange?: (zoom: number) => void;
}

export default function MapComponent({
  location,
  zoom,
  onLocationChange,
  onZoomChange,
}: MapComponentProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<LeafletMap | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const [coordinates, setCoordinates] = useState(location);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    if (!map.current) {
      map.current = L.map(mapContainer.current).setView([location.lat, location.lng], zoom);

      // Add tile layer (OpenStreetMap)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map.current);

      // Create custom marker icon
      const markerIcon = L.divIcon({
        html: `
          <div class="relative">
            <svg class="w-8 h-8 drop-shadow-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[#EB6601]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#EB6601] rounded-full"></div>
          </div>
        `,
        className: "custom-marker",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

      // Add marker
      markerRef.current = L.marker([location.lat, location.lng], { icon: markerIcon })
        .addTo(map.current)
        .bindPopup(
          `<div class="font-semibold text-sm">Downtown Office SPV</div>
           <div class="text-xs text-gray-600">8.2% Yield • 78% Funded</div>
           <div class="text-xs text-gray-500 mt-1">Lat: ${location.lat.toFixed(4)}, Lng: ${location.lng.toFixed(4)}</div>`,
          { offset: [0, -10] }
        );

      // Map event listeners
      map.current.on("click", (e: L.LeafletMouseEvent) => {
        const newLocation = { lat: e.latlng.lat, lng: e.latlng.lng };
        setCoordinates(newLocation);
        onLocationChange?.(newLocation);

        // Move marker to new location
        if (markerRef.current) {
          markerRef.current.setLatLng([newLocation.lat, newLocation.lng]);
          markerRef.current.getPopup()?.setContent(
            `<div class="font-semibold text-sm">Downtown Office SPV</div>
             <div class="text-xs text-gray-600">8.2% Yield • 78% Funded</div>
             <div class="text-xs text-gray-500 mt-1">Lat: ${newLocation.lat.toFixed(4)}, Lng: ${newLocation.lng.toFixed(4)}</div>`
          );
        }
      });

      map.current.on("zoom", () => {
        const currentZoom = map.current?.getZoom();
        if (currentZoom !== undefined) {
          onZoomChange?.(currentZoom);
        }
      });

      map.current.on("move", () => {
        const center = map.current?.getCenter();
        if (center) {
          setCoordinates({ lat: center.lat, lng: center.lng });
        }
      });
    } else {
      // Update map view when location changes
      map.current.setView([location.lat, location.lng], zoom);
      if (markerRef.current) {
        markerRef.current.setLatLng([location.lat, location.lng]);
      }
    }

    return () => {
      // Cleanup on unmount
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="flex flex-col gap-[12px]">
      {/* Map Container */}
      <div ref={mapContainer} className="w-full h-[390px] rounded-[12px] z-0 bg-[#E5E7EB]" />

     
    </div>
  );
}
