import React from "react";
import { Box } from "@chakra-ui/react";

type Props = {
  className?: string;
  children: React.ReactNode;
  display: boolean;
};

export const ModalDrawer: React.FC<Props> = (props) => {
  const { className, children, display } = props;

  return (
    <Box
      className={className}
      zIndex={1000}
      pos="absolute"
      top={16}
      right={0}
      p={4}
      h="calc(100% - 64px)"
      display={display ? "block" : "none"}
    >
      <Box w="300px" h="100%" bg="gray.800" color="gray.200" borderRadius={16} overflowY="hidden">
        <Box p={4} w="100%" h="100%" overflowY="auto">
          {children}
        </Box>
      </Box>
    </Box>
  );
};
