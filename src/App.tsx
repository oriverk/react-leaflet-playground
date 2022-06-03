import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layouts";

import "leaflet/dist/leaflet.css";

const Home = React.lazy(() => import("./pages/Home"));
const CustomMarker = React.lazy(() => import("./pages/Marker"));
const VectorLayers = React.lazy(() => import("./pages/VectorLayers"));
const Events = React.lazy(() => import("./pages/Events"));
const PolylineMarker = React.lazy(() => import("./pages/PolylineMarker"));
const GeoJsonComponent = React.lazy(() => import("./pages/Geojson"));
const Taiwan = React.lazy(() => import("./pages/Taiwan"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

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
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
