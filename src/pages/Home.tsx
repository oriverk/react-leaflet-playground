import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const Home: React.FC = () => (
  <MapContainer
    center={[31.91095904359794, 131.42387887173354]}
    zoom={8}
    scrollWheelZoom
    style={{ width: "100%", height: "100%" }}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
);

export default Home;
