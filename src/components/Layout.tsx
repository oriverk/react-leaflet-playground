import * as React from "react";
import { Link, Outlet } from "react-router-dom";

export const Layout: React.FC = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/vector-layers">Vector-Layers</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/polyline-marker">Polyline with marker</Link>
          </li>
          <li>
            <Link to="/taiwan">taiwan</Link>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}