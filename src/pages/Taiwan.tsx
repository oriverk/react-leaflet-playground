import React from 'react'
import { type LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet'
import GpxParser from 'gpxparser'

import { MapContent } from '../components/Map/MapContent';
import { Control } from '../components/Control';

import all from "/assets/gpx/taiwan/all-merged.gpx?raw"

const gpxFiles = [all];

const Page: React.FC = () => {
  const parsedGpxData = gpxFiles.map(file => {
    const gpx = new GpxParser();
    gpx.parse(file)
    return gpx;
  })
  const startPoint = parsedGpxData[0].tracks[0].points[0]
  const center: LatLngExpression = [startPoint.lat, startPoint.lon];
  return (
    <>
      <MapContainer
        center={center}
        zoom={8}
        scrollWheelZoom
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapContent parsedGpxData={parsedGpxData} />
      </MapContainer>
      <Control parsedGpxData={parsedGpxData} />
    </>
  )
}

export default Page