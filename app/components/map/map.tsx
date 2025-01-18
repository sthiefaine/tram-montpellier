import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

import { Polygon } from 'react-leaflet'

export function MapTramway() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          This is a popup
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export const MapTramway2 = () => {
  return (
    <MapContainer center={[46.52, 3.9]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polygon
          positions={[
            [46.52, 3.9],
            [46.52, 3.9],
            [45.52, 3.9],
            [45.52, 3.9],
            [44.52, 3.9],
            [44.52, 3.9],
            [43.52, 3.9],
            [43.52, 3.9],
            [42.52, 3.9],
            [42.52, 3.9],
          ]}
          fillOpacity={0.1}
          color="red"
          weight={3}
        />
    </MapContainer>
  )
}