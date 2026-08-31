/**
 * External dependencies
 */
import React from "react";
import { Stack, Text, Box, Heading, Flex } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const Project = ({ desc, title, link, repo, index = 0 }) => {
  const href = link || repo || "";

  return (
    <Box
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} project${repo ? " (opens in a new tab)" : ""}`}
      role="group"
      position="relative"
      overflow="hidden"
      display="block"
      h="100%"
      bg="gray.800"
      borderWidth="1px"
      borderColor="gray.800"
      borderRadius="2xl"
      p={6}
      sx={{ textDecoration: "none !important" }}
      transition="border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{
        borderColor: "primary",
        transform: "translateY(-4px)",
        boxShadow: "0 16px 34px -18px rgba(94, 236, 191, 0.3)",
      }}
    >
      <Box
        position="absolute"
        top={{ base: "-8px", md: "-14px" }}
        right={{ base: "10px", md: "16px" }}
        fontFamily="'Fraunces', serif"
        fontStyle="italic"
        fontWeight={500}
        fontSize={{ base: "48px", md: "64px" }}
        lineHeight="1"
        color="whiteAlpha.100"
        transition="color 0.4s ease"
        _groupHover={{ color: "rgba(94, 236, 191, 0.18)" }}
        userSelect="none"
        pointerEvents="none"
      >
        {String(index + 1).padStart(2, "0")}
      </Box>

      <Stack direction="row" justify="space-between" align="start" position="relative" pr="40px">
        <Heading
          as="h3"
          color="gray.100"
          fontSize="xl"
          fontFamily="'PT Mono', monospace"
          fontWeight={600}
          letterSpacing="0.01em"
          transition="color 0.2s ease"
          _groupHover={{ color: "primary" }}
        >
          {title}
        </Heading>
        {repo && (
          <Flex
            align="center"
            justify="center"
            boxSize="32px"
            borderRadius="full"
            borderWidth="1px"
            borderColor="gray.700"
            color="gray.400"
            flexShrink={0}
            transition="border-color 0.2s ease, color 0.2s ease"
            _groupHover={{ borderColor: "primary", color: "primary" }}
          >
            <FaGithub size={14} aria-hidden="true" focusable="false" />
          </Flex>
        )}
      </Stack>

      <Text fontSize="sm" color="gray.400" lineHeight="22px" pt={3} position="relative">
        {desc}
      </Text>
    </Box>
  );
};

export default Project;
