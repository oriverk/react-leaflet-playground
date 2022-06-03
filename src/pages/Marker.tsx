import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png?url";
import markerIcon from "leaflet/dist/images/marker-icon.png?url";
import markerShadow from "leaflet/dist/images/marker-shadow.png?url";
import { CustomIconMarker } from "../components/Map/CustomMarker";

// @ts-ignore
// eslint-disable-next-line no-underscore-dangle
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

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
