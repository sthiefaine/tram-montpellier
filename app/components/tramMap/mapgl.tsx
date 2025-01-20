"use client";

import { createRoot } from "react-dom/client";
import { useEffect, useRef, useState } from "react";
import Map, { Layer, LngLatBoundsLike, MapRef, Source } from "react-map-gl";
import { linesData } from "@/data/lineGeometry";
import { stopsData } from "@/data/stop";
import Image from "next/image";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl, { GeoJSONFeature, MapMouseEvent } from "mapbox-gl";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_GL_TOKEN;

const MONTPELLIER_COORDINATES = {
  lat: 43.606066,
  lng: 3.878014,
};

// Don't move too far from the City
const bounds: LngLatBoundsLike = [
  [3.738, 43.524], // Southwest coordinates
  [4.018, 43.706], // Northeast coordinates
];

/**
 * Create aggregated stops GeoJSON
 */
const createAggregatedStops = () => {
  return {
    type: "FeatureCollection",
    features: stopsData.features.flatMap((stop) => {
      const lignesPassantes = stop.properties.lignes_passantes
        .split(";")
        .map((ligne) => ligne.trim());

      // Pour chaque ligne passante un nouveau stop avec la couleur associée
      const stops = lignesPassantes.map((ligne, index) => {
        const stopColor =
          linesData.features.find(
            (line) => line.properties.num_exploitation === Number(ligne)
          )?.properties.code_couleur ?? "black";

        // Retourner un nouveau stop pour chaque ligne
        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: stop.geometry.coordinates,
          },
          properties: {
            color: stopColor,
            lineCount: lignesPassantes.length,
            line: ligne,
            index: index,
            description: stop.properties.description,
            line_description: stop.properties.lignes_passantes,
          },
        };
      });

      return stops;
    }),
  };
};

export const Mapgl = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapRef = useRef<MapRef | null>(null);
  const popupRef = useRef<mapboxgl.Popup | null>(null);

  useEffect(() => {
    popupRef.current = new mapboxgl.Popup({
      closeButton: true,
      closeOnClick: true,
    });

    return () => {
      popupRef.current?.remove();
    };
  }, []);

  const popUp = (feature: GeoJSONFeature) => {
    return (
      <div
        id="customPopup"
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          lineHeight: "1.5",
          color: "#333",
          marginTop: "10px",
        }}
      >
        <p style={{ margin: "4px 0" }}>
          <strong style={{ color: "#007acc" }}>Station:</strong>{" "}
          {feature.properties?.description || "N/A"}
        </p>
        <p style={{ margin: "4px 0" }}>
          <strong style={{ color: "#007acc" }}>Ligne:</strong>{" "}
          {feature.properties?.line_description || "N/A"}
        </p>
      </div>
    );
  };

  const handleMapClick = (e: MapMouseEvent) => {
    const map = mapRef.current?.getMap();
    const features = map?.queryRenderedFeatures(e.point, {
      layers: ["stops-layer", "stops-layer-unique"],
    });

    if (features && features.length > 0) {
      const feature = features[0];

      const popupContainer = document.createElement("div");

      const root = createRoot(popupContainer);
      root.render(popUp(feature));

      popupRef.current
        ?.setLngLat(e.lngLat)
        .setDOMContent(popupContainer)
        .addTo(map!);
    }
  };

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
            left: 0.6,
          }}
        />
      )}
      <Map
        ref={mapRef}
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
        onClick={handleMapClick}
      >
        {linesData.features.map((line, index) => {
          const ligneId = line.properties.id_lignes_sens + "-" + index;

          return (
            <Source
              key={`source-${ligneId}`}
              id={`route-${ligneId}`}
              type="geojson"
              data={{
                type: "Feature",
                properties: {},
                geometry: {
                  type: "LineString",
                  coordinates: line.geometry?.coordinates,
                },
              }}
            >
              <Layer
                id={`route-${ligneId}`}
                type="line"
                paint={{
                  "line-color": line.properties.code_couleur,
                  "line-width": 3,
                  "line-offset": 1.5,
                }}
              />
            </Source>
          );
        })}

        {/* Aggregated Stops */}
        {/* circle-translate don't accept data ffrom get this is why we have 2 layers */}
        <Source id="stops-layer" type="geojson" data={createAggregatedStops()}>
          <Layer
            id="stops-layer-unique"
            type="circle"
            paint={{
              "circle-color": ["get", "color"],
              "circle-radius": 3,
              "circle-stroke-width": 1,
            }}
            filter={["==", ["get", "index"], 0]}
          />
          <Layer
            id="stops-layer"
            type="circle"
            paint={{
              "circle-color": ["get", "color"],
              "circle-radius": 3,
              "circle-stroke-width": 1,
              "circle-translate": [
                "interpolate",
                ["linear"],
                ["zoom"],
                0,
                [3, 3],
              ],
            }}
            filter={[">=", ["get", "index"], 1]}
          />
        </Source>
      </Map>
    </div>
  );
};
