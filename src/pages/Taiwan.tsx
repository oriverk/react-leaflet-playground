import React from "react";
import L, { type LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import GpxParser from "gpxparser";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png?url";
import markerIcon from "leaflet/dist/images/marker-icon.png?url";
import markerShadow from "leaflet/dist/images/marker-shadow.png?url";

import { MapContent } from "../components/Map/MapContent";
import { Control } from "../components/Control";

import all from "/assets/gpx/taiwan/all-merged.gpx?raw";

// @ts-ignore
// eslint-disable-next-line no-underscore-dangle
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});



const gpxFiles = [all];

const Page: React.FC = () => {
  const parsedGpxData = gpxFiles.map((file) => {
    const gpx = new GpxParser();
    gpx.parse(file);
    return gpx;
  });
  const startPoint = parsedGpxData[0].tracks[0].points[0];
  const center: LatLngExpression = [startPoint.lat, startPoint.lon];
  return (
    <>
      <MapContainer center={center} zoom={8} scrollWheelZoom style={{ width: "100%", height: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapContent parsedGpxData={parsedGpxData} />
      </MapContainer>
      <Control parsedGpxData={parsedGpxData} />
    </>
  );
};

export default Page;
