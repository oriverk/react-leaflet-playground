import React from 'react'
import { Link } from "react-router-dom";
import { Container, Box, Heading, Text } from "@chakra-ui/react";

import { GradientIcon } from '../components/GradientIcon';

const Page: React.FC = () => (
  <Container h="100%" display="flex" alignItems="center" justifyContent="center">
    <Box color="gray.200" textAlign="center">
      <Box display="flex" alignItems="center" justifyContent="center" p={4}>
        <GradientIcon size={8} />
      </Box>
      <Heading as="h1" fontSize="5xl">
        Page not found
      </Heading>
      <Text fontSize="2xl">
        Main content is{' '}
        <Link to="taiwan">
          <Text as="span" color="#00e1ee" transition="color .2s" _hover={{ color: "orange" }}>
            Taiwan
          </Text>
        </Link>↗
      </Text>
    </Box>
  </Container>
);

export default Page;
