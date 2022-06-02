// @ts-ignore
import { toGeoJSON } from "@mapbox/togeojson";

export function toGeojson(xmlStr: string) {
  const parser = new DOMParser()
  const xml = parser.parseFromString(xmlStr, 'text/xml');
  return toGeoJSON.xml(xml)
}