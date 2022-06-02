import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Layout } from "./components/Layouts"
import Home from "./pages/Home";
import CustomMarker from "./pages/Marker"
import VectorLayers from "./pages/VectorLayers"
import Events from "./pages/Events"
import PolylineMarker from "./pages/PolylineMarker"
import GeoJsonComponent from "./pages/Geojson"
import Taiwan from "./pages/Taiwan"


import "leaflet/dist/leaflet.css";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="marker" element={<CustomMarker />} />
        <Route path="vector-layers" element={<VectorLayers />} />
        <Route path="events" element={<Events />} />
        <Route path="polyline-marker" element={<PolylineMarker />} />
        <Route path="geo" element={<GeoJsonComponent />} />
        <Route path="taiwan" element={<Taiwan />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App