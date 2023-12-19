import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
const geoUrl = "https://unpkg.com/world-atlas@1.2.0/countries-110m.json";



export default function LocationGraph() {
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}
