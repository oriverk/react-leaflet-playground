import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

import { GpxPath } from './GpxPath'

import taiwan2nd from "/assets/gpx/taiwan/taiwan2nd.gpx?raw"
import taiwan3rd from "/assets/gpx/taiwan/taiwan3rd.gpx?raw"

const gpxFiles = [
  taiwan2nd,
  taiwan3rd,
];

const Map: React.FC = () => {
  return (
    <MapContainer
      center={[23.793092795461675, 120.98037245966216]}
      zoom={8}
      scrollWheelZoom={false}
      style={{ width: "1500px", height: "700px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {gpxFiles.map(file => (
        <GpxPath gpxFile={file} isMarker={true} key={file} />
      ))}
    </MapContainer>
  )
}

export default Map