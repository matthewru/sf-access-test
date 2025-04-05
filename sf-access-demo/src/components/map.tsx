"use client";

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { useEffect, useState, useRef } from "react";

// Define start and end locations (Chicago to LA)
const startLocation = [-87.6298, 41.8781]; // Chicago, IL (longitude, latitude)
const endLocation = [-118.2437, 34.0522]; // Los Angeles, CA

const USMap = () => {
  const [position, setPosition] = useState(startLocation);
  const mapRef = useRef<HTMLDivElement>(null);

  // Function to start animation
  const startAnimation = () => {
    let index = 0;
    const steps = 50;
    const intervalTime = 50;

    const lngStep = (endLocation[0] - startLocation[0]) / steps;
    const latStep = (endLocation[1] - startLocation[1]) / steps;

    const interval = setInterval(() => {
      index++;
      const currentLng = startLocation[0] + lngStep * index;
      const currentLat = startLocation[1] + latStep * index;
      
      setPosition([currentLng, currentLat]);

      if (index >= steps) clearInterval(interval);
    }, intervalTime);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        }
      },
      { threshold: 0.5 } // Triggers when 50% of the map is visible
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mapRef} className="flex justify-center items-center">
      <div className="w-full h-full">
        <ComposableMap
          projection="geoAlbersUsa"
          className="w-full bg-transparent"
          projectionConfig={{
            center: [
              (startLocation[0] + endLocation[0]) / 2,
              (startLocation[1] + endLocation[1]) / 2 - 3,
            ],
          }}
        >
          <Geographies geography="https://cdn.jsdelivr.net/npm/us-atlas@3/nation-10m.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#E0E0E0"
                  stroke="#333"
                  style={{
                    default: { pointerEvents: "none", outline: "none" },
                    hover: { pointerEvents: "none", outline: "none" },
                    pressed: { pointerEvents: "none", outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Moving Arrow Marker */}
          <Marker coordinates={position as [number, number]}>
            <svg width="40" height="40" viewBox="0 0 40 40" style={{ overflow: 'visible' }}>
              <path
                d="M 0,0 L 20,20 L 40,0 L 30,0 L 30,-20 L 10,-20 L 10,0 Z"
                className="fill-primary"
                transform="translate(-20, -10)"
              />
            </svg>
          </Marker>
        </ComposableMap>
      </div>
    </div>
  );
};

export default USMap;
