import React from "react";
import { Link } from "react-router-dom";
import { Box, Text, chakra, Flex, HStack, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { HamburgerIcon, ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons';

type Props = {
  toggleDrawer: () => void
}

export const Header: React.FC<Props> = (props) => {
  const { toggleDrawer } = props;
  const headerIconSize = useBreakpointValue({ base: 'sm', md: 'md' });

  return (
    <chakra.header shadow="sm" pos="sticky" top="0" zIndex="3" left="0" right="0" width="full">
      <chakra.div height={16} mx="auto" maxW="8xl">
        <Flex w="100%" h="100%" px="4" align="center" justify="space-between">
          <Link to="/">
            <Box borderRadius="3xl" px={4} py={2} fontSize="lg" _hover={{ background: "gray.100"}}>
              Playground
            </Box>
          </Link>
          <Flex justify="flex-end" w="100%" align="center" color="gray.400" maxW="1100px">
            <HStack spacing="4">
              <HStack spacing="3" display={{ base: "none", md: "flex" }}>
                <Link to="marker">
                  <Text as="span" fontSize="lg" _hover={{ textDecoration: "underline" }}>
                    Marker
                  </Text>
                </Link>
                <Link to="vector-layers">
                  <Text as="span" fontSize="lg" _hover={{ textDecoration: "underline" }}>
                    Vector
                  </Text>
                </Link>
                <Link to="events">
                  <Text as="span" fontSize="lg" _hover={{ textDecoration: "underline" }}>
                    Events
                  </Text>
                </Link>
                <Link to="polyline-marker">
                  <Text as="span" fontSize="lg" _hover={{ textDecoration: "underline" }}>
                    Polyline
                  </Text>
                </Link>
                <Link to="taiwan">
                  <Text as="span" fontSize="lg" _hover={{ textDecoration: "underline" }}>
                    Taiwan
                  </Text>
                </Link>
                <IconButton
                  size={headerIconSize}
                  fontSize="xl"
                  aria-label="Open menu"
                  variant="ghost"
                  borderRadius="full"
                  color="gray.900"
                  onClick={()=> null}
                  icon={<ArrowUpIcon />}
                />
                <IconButton
                  size={headerIconSize}
                  fontSize="xl"
                  aria-label="Open menu"
                  variant="ghost"
                  borderRadius="full"
                  color="gray.900"
                  onClick={() => null}
                  icon={<ArrowDownIcon />}
                />
              </HStack>
              <IconButton
                size={headerIconSize}
                fontSize="xl"
                aria-label="Open menu"
                variant="ghost"
                borderRadius="full"
                color="gray.900"
                onClick={toggleDrawer}
                icon={<HamburgerIcon />}
              />
            </HStack>
          </Flex>
        </Flex>
      </chakra.div>
    </chakra.header>
  )
}