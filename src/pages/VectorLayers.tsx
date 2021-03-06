import React from "react";
import L, { type LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, Circle, CircleMarker, Polyline, Polygon } from "react-leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png?url";
import markerIcon from "leaflet/dist/images/marker-icon.png?url";
import markerShadow from "leaflet/dist/images/marker-shadow.png?url";

// @ts-ignore
// eslint-disable-next-line no-underscore-dangle
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

// https://react-leaflet.js.org/docs/example-vector-layers/
const center = [51.505, -0.09] as LatLngExpression;

const polyline = [
  [51.5, -0.1],
  [51.5, -0.12],
  [51.52, -0.12],
] as LatLngExpression[];

const polyline2 = [
  [51.5, -0.05],
  [51.5, -0.06],
  [51.52, -0.06],
] as LatLngExpression[];

const multiPolyline = [
  [
    [51.5, -0.1],
    [51.5, -0.12],
    [51.52, -0.12],
  ],
  [
    [51.5, -0.05],
    [51.5, -0.06],
    [51.52, -0.06],
  ],
] as LatLngExpression[][];

const polygon = [
  [51.515, -0.09],
  [51.52, -0.1],
  [51.52, -0.12],
] as LatLngExpression[];

const multiPolygon = [
  [
    [51.51, -0.12],
    [51.51, -0.13],
    [51.53, -0.13],
  ],
  [
    [51.51, -0.05],
    [51.51, -0.07],
    [51.53, -0.07],
  ],
] as LatLngExpression[][];

const fillBlueOptions = { fillColor: "blue" };
const limeOptions = { color: "red" };
const purpleOptions = { color: "purple" };
const redOptions = { color: "red" };

const Page: React.FC = () => (
  <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom style={{ width: "100%", height: "100%" }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
    <CircleMarker center={[51.51, -0.12]} pathOptions={redOptions} radius={20}>
      <Popup>Popup in CircleMarker</Popup>
    </CircleMarker>
    <Polyline pathOptions={limeOptions} positions={polyline} />
    <Polyline pathOptions={{ color: "blue" }} positions={polyline2} />

    <Polyline pathOptions={limeOptions} positions={multiPolyline} />
    <Polygon pathOptions={purpleOptions} positions={polygon} />
    <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
  </MapContainer>
);

export default Page;
