/**
 * External dependencies
 */
import React from "react";
import { Box, Text } from "@chakra-ui/react";

const toneStyles = {
  solid: { bg: "primary", color: "gray.900" },
  outline: {
    bg: "gray.800",
    color: "gray.100",
    borderWidth: "1px",
    borderColor: "gray.700",
  },
  muted: {
    bg: "gray.900",
    color: "gray.100",
    borderWidth: "1px",
    borderColor: "gray.800",
  },
  accent: {
    bg: "rgba(94, 236, 191, 0.08)",
    color: "primary",
    borderWidth: "1px",
    borderColor: "rgba(94, 236, 191, 0.35)",
  },
};

const StatCard = ({ label, value, sub, tone = "muted" }) => (
  <Box
    {...toneStyles[tone]}
    borderRadius="2xl"
    p={{ base: "16px", md: "22px" }}
    transition="transform 0.25s ease, box-shadow 0.25s ease"
    _hover={{ transform: "translateY(-4px)" }}
  >
    <Text
      fontFamily="'PT Mono', monospace"
      fontSize="10px"
      fontWeight={700}
      letterSpacing="0.08em"
      textTransform="uppercase"
      opacity={0.7}
      pb={2}
    >
      {label}
    </Text>
    <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight={700} lineHeight="1.1">
      {value}
    </Text>
    <Text fontSize="xs" opacity={0.75} pt={1}>
      {sub}
    </Text>
  </Box>
);

export default StatCard;
