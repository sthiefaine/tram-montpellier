"use client";

import Map, { Layer, LngLatBoundsLike, Source } from "react-map-gl";
import { poiData } from "@/data/poi";
import { tramwayLinesData } from "@/data/lines";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_GL_TOKEN;

const MONTPELLIER_COORDINATES = {
  lat: 43.606066,
  lng: 3.878014,
};

// dont move too far from the City
const bounds: LngLatBoundsLike = [
  [3.738, 43.524], // Southwest coordinates
  [4.018, 43.706]  // Northeast coordinates
];

const tramwayLineCodeNames = tramwayLinesData.map(
  (line) => `TAM${line.numero}`
);

const groupedData = Object.groupBy(poiData, (poi) => poi.properties.code_ligne);

export const Mapgl = () => {

  return (
    <div className="flex flex-col items-center justify-center pb-5">
      <Map
        initialViewState={{
          longitude: MONTPELLIER_COORDINATES.lng,
          latitude: MONTPELLIER_COORDINATES.lat,
          zoom: 10.35,
        }}
        minZoom={10}
        maxBounds={bounds}
        style={{ width: 350, height: 350 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
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
                      "line-color": 'red',
                      "line-width": 2,
                      "line-dasharray": [3,3]
                    }}
                  />
                )}
              </Source>
            );
          })
        )}
      </Map>
    </div>
  );
};
