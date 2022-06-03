import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

import { round10 } from "../../utils/decimal";

type Props = {
  name: string;
  totalDistance: number;
  // requiredTime?: number;
  speedPerHour?: number;
  minElevation: number;
  maxElevation: number;
};

export const PathPopupContent: React.FC<Props> = (props) => {
  const { name = "", totalDistance, minElevation, maxElevation } = props;
  const distance = round10(totalDistance / 1000, -1);
  // const requiedHour = requiredTime ? requiredTime / 1000 / 60 / 60 : 0;
  // const kmPerHour = round10(distance / requiedHour, -1)

  return (
    <Box borderRadius={4}>
      <Heading as="h3" fontSize="md">
        {name}
      </Heading>
      <Text>距離：{distance}km</Text>
      {/* <p>所要時間：{round10(requiedHour, -1)}時間</p> */}
      {/* <p>平均速度：毎時{kmPerHour}km</p> */}
      <Text>最小標高：{round10(minElevation, -1)}m</Text>
      <Text>最大標高：{round10(maxElevation, -1)}m</Text>
      {/* <Text>累積標高(登り)：</Text> */}
      {/* <Text>累積標高(下り)：</Text> */}
    </Box>
  );
};
