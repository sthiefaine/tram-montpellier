"use client";

import { LatLngExpression } from "leaflet";
import dynamic from "next/dynamic";
import { poiData } from "@/data/poi";
import { tramwayLinesData } from "@/data/lines";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

const Polyline = dynamic(
  () => import("react-leaflet").then((mod) => mod.Polyline),
  { ssr: false }
);

type FeatureProperties = {
  id: string;
  couleur_border: string;
  OLDcouleur_border: string;
  pointille_ligne: string;
  epaisseur_ligne: string;
  couleur_ligne: string;
  pointille_border: string;
  ligneId: string;
  OLDcouleur_ligne: string;
  code_ligne: string;
  desc: string;
  titre_ligne: string;
};

type Feature = {
  type: string;
  id: number;
  properties: FeatureProperties;
  geometry: {
    type: string
    coordinates: number[][]
  }
};

export type PoiData = Feature[]

// https://tile.openstreetmap.org/13/2091/1495.png
const MONTPELLIER_COORDINATES = {
  lat: 43.606066,
  lng: 3.878014,
};



export const TramMap = () => {
  function MapPlaceholder() {
    return (
      <p>
        Map of Montpellier.{" "}
        <noscript>You need to enable JavaScript to see this map.</noscript>
      </p>
    );
  }
  // [long, lat] => [lat, long]
  function inverseCoordinates(coordinates: number[][]): LatLngExpression[] {
    return coordinates.map(([long, lat]) => [lat, long]);
  }

// Convertir l'objet en tableau

const tramwayLineCodeNames = tramwayLinesData.map((line) => `TAM${line.numero}`);
const groupedData = Object.groupBy(poiData, (poi) => poi.properties.code_ligne);

  return (
    <div className="flex flex-col items-center justify-center pb-20">
      <MapContainer
        center={[MONTPELLIER_COORDINATES.lat, MONTPELLIER_COORDINATES.lng]}
        zoom={11}
        scrollWheelZoom={true}
        style={{ height: "300px", width: "500px", zIndex: 1 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {tramwayLineCodeNames?.map((codeName) =>
          groupedData[codeName]?.map((poi, index) => {
            const isDashed = poi.properties.pointille_ligne === "dash";
            return (
              <Polyline
                key={poi.properties.id + index}
                pathOptions={{
                  // color: poi.properties.couleur_ligne ,
                  color: poi.properties.OLDcouleur_border,
                  stroke: true,
                  lineCap: 'round',
                  lineJoin: 'round',
                  opacity: 1,
                  weight: 4,
                  dashArray: isDashed ? [5,10] : [],
                }}
                positions={inverseCoordinates((poi.geometry?.coordinates as number[][]))} 
              />
            );
          })
        )}

      </MapContainer>
    </div>

  );
};
