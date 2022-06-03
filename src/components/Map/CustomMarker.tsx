import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";
import { Marker, MarkerProps } from "react-leaflet";

interface Props extends MarkerProps {
  divIconElement: React.ReactElement;
}

export const CustomIconMarker: React.FC<Props> = (props) => {
  const { children, divIconElement, ...rest } = props;

  const customMarkerIcon = divIcon({
    html: renderToStaticMarkup(divIconElement),
  });

  return (
    <Marker icon={customMarkerIcon} {...rest}>
      {children}
    </Marker>
  );
};
