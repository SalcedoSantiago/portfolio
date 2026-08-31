/**
 * External dependencies
 */
import React from "react";
import { Flex, Box } from "@chakra-ui/react";

const Eyebrow = ({ children, ...props }) => (
  <Flex justify="center" {...props}>
    <Box
      bg="rgba(94, 236, 191, 0.08)"
      borderWidth="1px"
      borderColor="rgba(94, 236, 191, 0.25)"
      color="primary"
      borderRadius="full"
      px={3}
      py={1}
      mb={4}
      fontFamily="'PT Mono', monospace"
      fontSize="11px"
      letterSpacing="0.05em"
      textTransform="uppercase"
    >
      {children}
    </Box>
  </Flex>
);

export default Eyebrow;
