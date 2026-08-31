/**
 * External dependencies
 */
import React, { useRef } from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";

/**
 * Internal dependencies
 */
import { gsap } from "./animations/gsapSetup";

const Skill = ({ text, image = "" }) => {
  const skillRef = useRef(null);

  const handleEnter = () => {
    gsap.to(skillRef.current, {
      y: -3,
      borderColor: "rgba(94, 236, 191, 0.6)",
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(skillRef.current, {
      y: 0,
      borderColor: "rgba(255,255,255,0.08)",
      duration: 0.25,
      ease: "power2.out",
    });
  };

  return (
    <Flex
      ref={skillRef}
      align="center"
      gap={2.5}
      px={3}
      py={2}
      bg="whiteAlpha.50"
      borderWidth="1px"
      borderColor="whiteAlpha.100"
      borderRadius="lg"
      transition="background 0.2s"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      cursor="default"
      _hover={{ bg: "whiteAlpha.100" }}
    >
      <Flex
        align="center"
        justify="center"
        boxSize="32px"
        borderRadius="md"
        bg="gray.800"
        flexShrink={0}
      >
        <Image
          boxSize="20px"
          objectFit="contain"
          src={image || "https://cdn-icons-png.flaticon.com/512/732/732212.png"}
          alt=""
          aria-hidden="true"
        />
      </Flex>
      <Text fontSize="sm" fontWeight={500} color="gray.200" whiteSpace="nowrap">
        {text}
      </Text>
    </Flex>
  );
};

export default Skill;
