import React, { Suspense, useMemo } from 'react'

export const TaiwanPaths: React.FC = () => {
  const Map = useMemo(
    () =>
      React.lazy(() => import("../components/Map")),
    []
  )

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Map />
      </Suspense>
    </div>
  )
}

