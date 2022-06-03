import React from "react";
import { Box, Text, Checkbox, useBreakpointValue } from "@chakra-ui/react";
import GpxParser from "gpxparser";

import { useModal } from "../../components/Layouts";
import { ModalDrawer } from "./ModalDrawer";
import { Overlay } from "./Overlay";

type Props = {
  parsedGpxData: GpxParser[];
};

export const Control: React.FC<Props> = (props) => {
  const { parsedGpxData } = props;

  const { isModalOpen, setModalOpen } = useModal();
  const isXlPc = useBreakpointValue({ base: false, xl: true });
  const isOverlay = !isXlPc && isModalOpen;

  return (
    <>
      {isOverlay && <Overlay onClick={() => setModalOpen(false)} />}
      <ModalDrawer display={isModalOpen}>
        {parsedGpxData.map((datum) => {
          const { tracks } = datum;
          return tracks.map((track) => {
            const { name, points } = track;
            const key = `${name}: ${points.flat().slice(0, 5).join()}`;
            return (
              <Box
                mx="auto"
                px={2}
                w="95%"
                h={12}
                borderRadius={16}
                _hover={{ backgroundColor: "blackAlpha.200" }}
                key={key}
              >
                <Text as="h3">
                  <Checkbox defaultChecked fontSize={3}>
                    {name}
                  </Checkbox>
                </Text>
              </Box>
            );
          });
        })}
      </ModalDrawer>
    </>
  );
};
