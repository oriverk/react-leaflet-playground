import React from "react"
import { Box, Heading, Text } from "@chakra-ui/react";

import { round10 } from "../../utils/decimal";

type Props = {
  name: string;
  altitude: number;
}

export const MarkerPopupContent: React.FC<Props> = (props) => {
  const { name = "", altitude } = props;
  
  return (
    <Box borderRadius={4}>
      <Heading as="h3" fontSize="md">
        {name}
      </Heading>
      <Text>標高：{round10(altitude, -1)}m</Text>
    </Box>
  )
}