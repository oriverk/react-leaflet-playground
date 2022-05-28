import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { VectorLayers } from "./pages/VectorLayers";
import { Events } from "./pages/Events";
import { PolylineMarker } from "./pages/PolylineMarker";
import { TaiwanPaths } from "./pages/taiwan";

import "leaflet/dist/leaflet.css";
import "./App.css"

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="vector-layers" element={<VectorLayers />} />
        <Route path="events" element={<Events />} />
        <Route path="polyline-marker" element={<PolylineMarker />} />
        <Route path="taiwan" element={<TaiwanPaths />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App