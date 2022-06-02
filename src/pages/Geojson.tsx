import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline, GeoJSON } from 'react-leaflet'
import GpxParser from 'gpxparser'
import { type LatLngExpression } from 'leaflet';

import gpxFile from "/assets/gpx/amakusa-ride.gpx?raw"

// https://react-leaflet.js.org/docs/example-vector-layers/

const Page: React.FC = () => {
  const gpx = new GpxParser();
  gpx.parse(gpxFile);
  const { tracks } = gpx;
  const { distance } = tracks[0];
  const { total } = distance;
  const positions = gpx.tracks[0].points.map(p => [p.lat, p.lon]) as LatLngExpression[]
  const geoJsonObj: any = [
    {
      type: "LineString",
      coordinates: positions,
    },
  ];
  return (
    <MapContainer
      center={positions[0]}
      zoom={9}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
    >
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
          距離：{total}m<br />
        </Popup>
      </Polyline>
      <Marker position={positions[positions.length-1]}>
        <Popup>
          path goal
        </Popup>
        <GeoJSON data={geoJsonObj} />
      </Marker>
    </MapContainer>
  )
}

export default Page

