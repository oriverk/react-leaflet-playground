import React from "react";
import GpxParser from "gpxparser";

import { GpxPath } from "./GpxPath";

type Props = {
  parsedGpxData: GpxParser[];
};

export const MapContent: React.FC<Props> = (props) => {
  const { parsedGpxData } = props;
  return (
    <>
      {parsedGpxData.map((data) => {
        const { metadata, tracks } = data;
        return <GpxPath metadata={metadata} tracks={tracks} />;
      })}
    </>
  );
};
