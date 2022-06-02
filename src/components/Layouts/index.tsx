import React, { useState, useCallback } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

import { Header } from "./Header";

type ContextType = {
  isModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function useModal() {
  return useOutletContext<ContextType>()
}

export const Layout: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(true)

  const toggleDrawer = useCallback(() => {
    setModalOpen(prev => !prev)
  }, [isModalOpen])

  return (
    <Flex flexDir="column" h="100vh">
      <Header toggleDrawer={toggleDrawer} />
      <Box as="main" flex={1} w="full">
        <Outlet context={{ isModalOpen, setModalOpen }} />
      </Box>
    </Flex>
  )
}