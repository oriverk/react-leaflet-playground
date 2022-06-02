import React, { Suspense } from 'react'
import { type LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet'
import GpxParser from 'gpxparser'

import { MapContent } from '../components/Map/MapContent';
import { Control } from '../components/Control';

import taiwan2nd from "/assets/gpx/taiwan/taiwan2nd.gpx?raw"
import taiwan3rd from "/assets/gpx/taiwan/taiwan3rd.gpx?raw"

const gpxFiles = [taiwan2nd, taiwan3rd,];

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
        <Suspense>
          <MapContent parsedGpxData={parsedGpxData} />
        </Suspense>
      </MapContainer>
      <Control parsedGpxData={parsedGpxData} />
    </>
  )
}

export default Page