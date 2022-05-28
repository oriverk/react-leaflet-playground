import React from 'react'
import { Marker, Popup, Polyline } from 'react-leaflet'
import { type LatLngExpression } from 'leaflet';

import GpxParser from 'gpxparser'

import { PathPopupContent } from "./PopupContent";

type Props = {
  gpxFile: string;
  isMarker?: boolean;
}

export const GpxPath: React.FC<Props> = (props) => {
  const { gpxFile, isMarker = true } = props
  const gpx = new GpxParser();
  gpx.parse(gpxFile);
  const { metadata, tracks } = gpx;
  const { time } = metadata;
  const { name, distance, points, elevation } = tracks[0];
  const { total } = distance;
  const positions = points.map(p => [p.lat, p.lon]) as LatLngExpression[]
  const start = points[0];
  const goal = points[points.length - 1];
  const requiredTime = goal.time && start.time
    ? goal.time.getTime() - start.time.getTime()
    : 0;

  return (
    <>
      {isMarker && (
        <Marker position={[start.lat, start.lon]}>
          <Popup>
            path start
          </Popup>
        </Marker>
      )}
      <Polyline
        pathOptions={{ fillColor: 'red', color: 'blue' }}
        positions={positions}
      >
        <Popup>
          <PathPopupContent
            name={name}
            time={time}
            totalDistance={total}
            requiredTime={requiredTime}
            minElevation={elevation.min}
            maxElevation={elevation.max}
          />
        </Popup>
      </Polyline>
      {isMarker && (
        <Marker position={[goal.lat, goal.lon]}>
          <Popup>
            path goal
          </Popup>
        </Marker>
      )}
    </>
  )
}