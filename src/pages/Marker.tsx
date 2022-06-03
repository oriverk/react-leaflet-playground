import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { CustomIconMarker } from "../components/Map/CustomMarker";

// https://react-leaflet.js.org/docs/example-popup-marker/
const Page: React.FC = () => (
  <MapContainer
    center={[51.505, -0.09]}
    zoom={13}
    scrollWheelZoom={false}
    style={{ width: "100%", height: "100%", position: "static", inset: 0 }}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    <CustomIconMarker position={[51.515, -0.09]} divIconElement={<div />}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </CustomIconMarker>
  </MapContainer>
);

export default Page;
