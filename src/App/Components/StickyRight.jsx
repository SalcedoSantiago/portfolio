import React from "react";
import { Stack, Divider, Text, Box } from "@chakra-ui/react";
import styled from "styled-components";

const TextLink = styled(Text)`
  text-decoration: none !important;
  color: var(--chakra-colors-gray-200);
  transition: all 0.2s;
  letter-spacing: inherit;
  writing-mode: vertical-rl;

  &:hover {
    color: var(--chakra-colors-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--chakra-colors-primary);
    outline-offset: 3px;
  }
`;

const StickyRight = () => {
  return (
    <Box
      as="aside"
      aria-label="Contact email"
      position="fixed"
      bottom="0px"
      color="gray.300"
      w="40px"
      right="40px"
      opacity={[0, 0, 1]}
      display={["none", "none", "block"]}
      zIndex={2}
    >
      <Stack direction="column" justifyContent="center" align="center" spacing={6}>
        <TextLink
          color="gray.300"
          fontWeight={600}
          as="a"
          href="mailto:santiagosalcedod@gmail.com"
          writingMode="vertical-rl"
        >
          santiagosalcedod@gmail.com
        </TextLink>
        <Divider orientation="vertical" height="100px" aria-hidden="true" />
      </Stack>
    </Box>
  );
};

export default StickyRight;
