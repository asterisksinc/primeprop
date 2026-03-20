'use client';

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";

// 1. Dubai coordinate center
const center = [25.1972, 55.2744]; // Dubai

// Property placeholder images
const propertyImage = '/building.png';

// 2. Dummy properties data
export const dummyProperties = Array.from({ length: 25 }).map((_, i) => {
  const isHighYield = Math.random() > 0.6;
  const lat = center[0] + (Math.random() - 0.5) * 0.1;
  const lng = center[1] + (Math.random() - 0.5) * 0.1;

  return {
    id: i + 1,
    title: `Downtown Office SPV ${i + 1}`,
    lat,
    lng,
    yieldStr: (Math.random() * 3 + 7).toFixed(1) + "%", // 7.0 - 10.0%
    fundedStr: Math.floor(Math.random() * 60 + 40) + "%", // 40 - 100%
    isHighYield,
    image: propertyImage,
  };
});

export default function PropertiesMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const [hoveredProperty, setHoveredProperty] = useState<typeof dummyProperties[0] | null>(null);
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Initialize map
    map.current = L.map(mapContainer.current, {
      zoomControl: false, // We'll rely on default or add custom
    }).setView([center[0], center[1]], 13);

    // Add tile layer (OpenStreetMap) - styled lightly if possible, standard OSM for now
    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      maxZoom: 19,
    }).addTo(map.current);

    // Add markers
    dummyProperties.forEach((prop) => {
      const color = prop.isHighYield ? "#FF6633" : "#2B6B6F"; // vibrant orange : deep teal
      
      const markerIcon = L.divIcon({
        html: `
          <div class="relative flex items-center justify-center w-6 h-8 group hover:scale-110 transition-transform cursor-pointer">
            <svg width="26" height="32" viewBox="0 0 40 48" class="drop-shadow-md">
              <path d="M20 0C9 0 0 9 0 20C0 35 20 48 20 48C20 48 40 35 40 20C40 9 31 0 20 0Z" fill="${color}" stroke="white" stroke-width="2"/>
              <circle cx="20" cy="20" r="6" fill="white"/>
            </svg>
          </div>
        `,
        className: "bg-transparent border-none",
        iconSize: [26, 32],
        iconAnchor: [13, 32],
      });

      const marker = L.marker([prop.lat, prop.lng], { icon: markerIcon }).addTo(map.current!);

      marker.on('mouseover', (e) => {
        const point = map.current!.latLngToContainerPoint(e.latlng);
        setPopupPos({ x: point.x, y: point.y });
        setHoveredProperty(prop);
      });

      marker.on('mouseout', () => {
         // Optionally delay hiding or rely on container mouseleave
      });
    });

    map.current.on('mousemove', (e) => {
       // if we are dragging/moving, update floating popup
       if (hoveredProperty) {
         setHoveredProperty(null);
       }
    });

    map.current.on('zoom drag', () => {
       setHoveredProperty(null);
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-full relative" onMouseLeave={() => setHoveredProperty(null)}>
      <div ref={mapContainer} className="w-full h-full z-0" style={{ background: '#e5f3f0' }} />

      {/* Floating Property Card on Hover */}
      {hoveredProperty && (
        <div 
          className="absolute z-[1000] pointer-events-none transition-all duration-200"
          style={{ 
            left: popupPos.x, 
            top: popupPos.y - 40, // Offset above the pin
            transform: 'translate(-50%, -100%)' 
          }}
        >
          <div className="bg-white rounded-xl shadow-xl overflow-hidden w-[220px] pointer-events-auto border border-slate-100 flex flex-col">
            <div className="h-28 bg-blue-100 w-full relative overflow-hidden flex items-center justify-center">
              <img 
                src={hoveredProperty.image}
                alt={hoveredProperty.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3 flex flex-col gap-3">
              <h4 className="font-bold text-slate-800 text-sm m-0 leading-tight">{hoveredProperty.title}</h4>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase">Yield</span>
                  <span className="font-semibold text-[#2B6B6F] text-xs">{hoveredProperty.yieldStr}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase">Funded</span>
                  <span className="font-semibold text-[#2B6B6F] text-xs">{hoveredProperty.fundedStr}</span>
                </div>
              </div>
              <Link href={`/properties/${hoveredProperty.id}`} className="w-full py-2 bg-[#2B6B6F] hover:bg-[#1f4e52] text-white text-xs font-semibold rounded-lg shadow-sm text-center transition-colors">
                View Details
              </Link>
            </div>
            {/* Down Arrow for dialog */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-slate-100"></div>
          </div>
        </div>
      )}
    </div>
  );
}
