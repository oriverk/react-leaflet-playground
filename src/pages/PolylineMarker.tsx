import React from 'react'
import {
  MapContainer, TileLayer, Marker, Popup, Polyline
} from 'react-leaflet'
import GpxParser from 'gpxparser'
import { type LatLngExpression } from 'leaflet';

import gpxFile from "/assets/gpx/amakusa-ride.gpx?raw"

// https://react-leaflet.js.org/docs/example-vector-layers/

export const PolylineMarker: React.FC = () => {
  const gpx = new GpxParser();
  gpx.parse(gpxFile);
  // const total = gpx.tracks[0].distance.total;
  // console.log(gpx.tracks)
  const { tracks } = gpx;
  const { distance } = tracks[0];
  const { total } = distance;
  const positions = gpx.tracks[0].points.map(p => [p.lat, p.lon]) as LatLngExpression[]
  
  return (
    <div className="App">
      <MapContainer
        center={positions[0]}
        zoom={9}
        scrollWheelZoom={false}
        style={{ width: "1000px", height: "600px" }}
      >
        {/* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
        <TileLayer
          attribution='&copy; <a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院</a>'
          url="https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png"
        />
        <Marker position={positions[0]}>
          <Popup>
            path start
          </Popup>
        </Marker>
        <Polyline
          pathOptions={{ fillColor: 'red', color: 'blue' }}
          positions={positions}
        >
          <Popup>
            距離　{total}m<br />
          </Popup>
        </Polyline>
        <Marker position={positions[positions.length-1]}>
          <Popup>
            path goal
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

