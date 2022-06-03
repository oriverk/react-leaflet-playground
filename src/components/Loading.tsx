import React from 'react'
import { Box, Container, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { GradientIcon } from './GradientIcon';

const animationKeyframes = keyframes`
  0% {
    animation-timing-function: cubic-bezier(0.5856,0.0703,0.4143,0.9297);
    transform: rotate(0);
  }
  100% {
    transform: rotate(1800deg);
  }
`;

const animation = `${animationKeyframes} 3s linear 0s infinite running`;

export const Loading: React.FC = () =>{
  return (
    <Container h="100%" display="flex" alignItems="center" justifyContent="center">
      <Box
        as={motion.div}
        animation={animation}
      >
        <GradientIcon size={12} />
      </Box>
    </Container>
  )
};