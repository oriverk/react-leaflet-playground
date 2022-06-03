# README

## Notice

This repositry is under MIT license but except for `/public/assets/gpx/**/*.gpx`. So when fork and use this repo, please replace these with yours.

## References

- [Leaflet](https://leafletjs.com/)
- [React Leaflet](https://react-leaflet.js.org/)
- [Material Design 3](https://m3.material.io/)

## Packages

mainly used packages

- Vite, @vitejs/plugin-react
- React, ReactDOM, React Router DOM, TypeScript
- chakra ui, emotion, Framer Motion
- Leaflet, React Leaflet
- GpxParser

## Routes

- / as Home
  - default and minimum map
- /marker
  - popup marker and custom icon marker
- /vector-layers
- /events
  - point where you are now
- /polyline-marker
  - path with gpx file
- /geo
- /taiwan
  - multi geo paths with aiwan gpx file data when going around Taiwan by bicycle

## Troubles

- gpx file is super heavy
  - no solution...
  - use other geo files like `.geojson` instead of `.gpx`
- cannot render marker icon
  - solution: [react-leaflet | Map marker image does not appear on Next.js #808](https://github.com/PaulLeCam/react-leaflet/issues/808)
