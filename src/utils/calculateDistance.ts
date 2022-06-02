import { point } from "@turf/helpers";
import distance from "@turf/distance";

type CoordType = number[];
type UnitsType = "degrees" | "radians" | "miles" | "kilometers" 

export function calculateDistanceBetween(c1: CoordType, c2: CoordType, units: UnitsType) {
  const from = point(c1)
  const to = point(c2);
  const result = distance(from, to, { units })
  return result;
}

export function calculatePathDistance(coords: CoordType[], units: UnitsType = "kilometers") {
  const result = coords.reduce((prev: number, curr, index) => {
    return prev + calculateDistanceBetween(curr, coords[index+1], units )
  }, 0)
  return result
}