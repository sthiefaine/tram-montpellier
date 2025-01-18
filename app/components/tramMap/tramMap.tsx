"use client"

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });

const MONTPELLIER_COORDINATES = {
  lat: 43.606066,
  lng: 3.878014,
};

export const TramMap = () => {
  const [location, setLocation] = useState({
    loaded: false,
    error: false,
    coordinates: {
      lat: 0,
      lng: 0,
    },
  });

  const [error, setError] = useState("");

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation((curr) => ({
          ...curr,
          loaded: true,
          error: false,
          coordinates: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        }));
      },
      (err) => {
        // Handle potential errors
        switch (err.code) {
          case err.PERMISSION_DENIED:
            setError("User denied the request for Geolocation.");
            break;
          case err.POSITION_UNAVAILABLE:
            setError("Location information is unavailable.");
            break;
          case err.TIMEOUT:
            setError("The request to get user location timed out.");
            break;
          default:
            setError("An unknown error occurred.");
        }
        setLocation((curr) => ({
          ...curr,
          loaded: false,
        }));
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }, []);

  function MapPlaceholder() {
    return (
      <p>
        Map of Montpellier. <noscript>You need to enable JavaScript to see this map.</noscript>
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center pb-20">
      <MapContainer
        center={[MONTPELLIER_COORDINATES.lat, MONTPELLIER_COORDINATES.lng]}
        zoom={12}
        scrollWheelZoom={false}
        placeholder={<MapPlaceholder />}
        style={{ height: "300px", width: "300px", zIndex: 1 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};
