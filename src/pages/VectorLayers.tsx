import React from 'react'
import {
  MapContainer, TileLayer, Marker, Popup,
  Circle, CircleMarker, Polyline, Polygon, Rectangle
} from 'react-leaflet'
import { type LatLngExpression } from 'leaflet';

// https://react-leaflet.js.org/docs/example-vector-layers/

const center = [51.505, -0.09] as LatLngExpression

const polyline = [
  [51.5, -0.1],
  [51.5, -0.12],
  [51.52, -0.12],
] as LatLngExpression[]

const polyline2 = [
  [51.5, -0.05],
  [51.5, -0.06],
  [51.52, -0.06],
] as LatLngExpression[]

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
] as LatLngExpression[][]

const polygon = [
  [51.515, -0.09],
  [51.52, -0.1],
  [51.52, -0.12],
] as LatLngExpression[]

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
] as LatLngExpression[][]

const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
] as LatLngExpression[]


const fillBlueOptions = { fillColor: 'blue' }
const blackOptions = { color: 'black' }
const limeOptions = { color: 'red' }
const purpleOptions = { color: 'purple' }
const redOptions = { color: 'red' }

export const VectorLayers: React.FC = () => {
  return (
    <div className="App">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: "1000px", height: "600px" }}
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
        <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
        <CircleMarker center={[51.51, -0.12]} pathOptions={redOptions} radius={20}>
          <Popup>Popup in CircleMarker</Popup>
        </CircleMarker>
        <Polyline pathOptions={limeOptions} positions={polyline} />
        <Polyline pathOptions={{color: 'blue'}} positions={polyline2} />

        <Polyline pathOptions={limeOptions} positions={multiPolyline}/>
        <Polygon pathOptions={purpleOptions} positions={polygon} />
        <Polygon pathOptions={purpleOptions} positions={multiPolygon}/>
        {/* <Rectangle bounds={rectangle[0]} pathOptions={blackOptions} /> */}
      </MapContainer>
    </div>
  )
}

