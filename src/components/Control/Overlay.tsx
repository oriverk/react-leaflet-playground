import React from 'react'
import { Box } from '@chakra-ui/react'

type Props = {
  className?: string;
  onClick: () => void;
  zIndex?: number;
  bgColor?: string;
}

export const Overlay: React.FC<Props> = (props) => {
  const { className, onClick, zIndex = 1000, bgColor = "blackAlpha.600" } = props;
  return (
    <Box className={className} zIndex={zIndex} bg={bgColor}
      pos="absolute" inset="0" w="100%" h="100vh"
      onClick={onClick}
    />
  )
}