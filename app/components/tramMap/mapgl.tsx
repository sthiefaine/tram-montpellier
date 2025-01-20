"use client";

import Map, { Layer, LngLatBoundsLike, Source } from "react-map-gl";
import { poiData } from "@/data/poi";
import { stopsData } from "@/data/stop";
import { tramwayLinesData } from "@/data/lines";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import Image from "next/image";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_GL_TOKEN;

const MONTPELLIER_COORDINATES = {
  lat: 43.606066,
  lng: 3.878014,
};

// dont move too far from the City
const bounds: LngLatBoundsLike = [
  [3.738, 43.524], // Southwest coordinates
  [4.018, 43.706], // Northeast coordinates
];

const tramwayLineCodeNames = tramwayLinesData.map(
  (line) => `TAM${line.numero}`
);

const groupedData = Object.groupBy(poiData, (poi) => poi.properties.code_ligne);

export const Mapgl = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  return (
    <div className="relative flex flex-col items-center justify-center pb-5">
      {!isMapLoaded && (
        <Image
          src="/miniMap350.png"
          alt="Map Placeholder"
          width={350}
          height={350}
          priority={true}
          style={{
            position: "absolute",
            top: -1,
            left: 0,
          }}
        />
      )}
      <Map
        initialViewState={{
          longitude: MONTPELLIER_COORDINATES.lng,
          latitude: MONTPELLIER_COORDINATES.lat,
          zoom: 10.35,
        }}
        minZoom={10}
        maxBounds={bounds}
        style={{
          width: 350,
          height: 350,
          opacity: isMapLoaded ? 1 : 0,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v10?optimize=true"
        mapboxAccessToken={MAPBOX_TOKEN}
        onLoad={() => setIsMapLoaded(true)}
      >
        {tramwayLineCodeNames?.map((codeName) =>
          groupedData[codeName]?.map((poi, index) => {
            const isDashed = poi.properties.pointille_ligne === "dash";

            return (
              <Source
                key={`source-${poi.id}-${index}`}
                id={`route-${poi.id}-${index}`}
                type="geojson"
                data={{
                  type: "Feature",
                  properties: {},
                  geometry: {
                    type: "LineString",
                    coordinates: poi.geometry?.coordinates,
                  },
                }}
              >
                <Layer
                  id={`route-${poi.id}-${index}`}
                  type="line"
                  paint={{
                    "line-color": poi.properties.OLDcouleur_ligne,
                    "line-width": 3,
                  }}
                />
                {isDashed && (
                  <Layer
                    id={`route-${poi.id}-${index}-dashed`}
                    type="line"
                    paint={{
                      "line-color": "red",
                      "line-width": 2,
                      "line-dasharray": [3, 3],
                    }}
                  />
                )}
              </Source>
            );
          })
        )}
        {stopsData.map((lineData) => {
          const geojson = {
            type: "FeatureCollection",
            features: lineData.stops.map((stop) => ({
              type: "Feature",
              properties: {},
              geometry: {
                type: "Point",
                coordinates: [parseFloat(stop.lng), parseFloat(stop.lat)],
              },
            })),
          };

          return (
            <Source
              key={`source-${lineData.line}`}
              id={`circle-${lineData.line}`}
              type="geojson"
              data={geojson}
            >
              <Layer
                id={`route-${lineData.line}`}
                type="circle"
                paint={{
                  "circle-radius": 2,
                  "circle-color": lineData.color,
                  "circle-stroke-width": 1,
                  "circle-stroke-color": "black",
                }}
              />
            </Source>
          );
        })}
        ∑
      </Map>
    </div>
  );
};
