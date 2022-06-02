import React from 'react'
import GpxParser from 'gpxparser'
import { type LatLngExpression } from 'leaflet';
import { Marker, Popup, Polyline } from 'react-leaflet'

import { MarkerPopupContent } from './MarkerPopupContent';
import { PathPopupContent } from './PathPopupContent';

type Props = {
  metadata: GpxParser["metadata"];
  tracks: GpxParser["tracks"];
}

export const GpxPath: React.FC<Props> = (props) => {
  const { tracks } = props;
  return (
    <>
      {tracks.map(track => {
        const { name, distance, points, elevation } = track;
        const { total } = distance;
        const positions = points.map(p => [p.lat, p.lon]) as LatLngExpression[]
        const start = points[0];
        const goal = points[points.length - 1];

        return (
          <>
            <Marker position={[start.lat, start.lon]}>
              <Popup>
                <MarkerPopupContent
                  name={`${name}の出発地`}
                  altitude={start.ele}
                />
              </Popup>
            </Marker>
            <Marker position={[goal.lat, goal.lon]}>
              <Popup>
                <MarkerPopupContent
                  name={`${name}の出発地`}
                  altitude={goal.ele}
                />
              </Popup>
            </Marker>
            <Polyline
              pathOptions={{ color: 'blue' }}
              positions={positions}
            >
              <Popup>
                <PathPopupContent
                  name={name}
                  totalDistance={total}
                  minElevation={elevation.min}
                  maxElevation={elevation.max}
                />
              </Popup>
            </Polyline>
          </>
        )
      })}
    </>
  )
}