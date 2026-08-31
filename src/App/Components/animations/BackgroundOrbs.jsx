/**
 * External dependencies
 */
import React, { useRef } from "react";
import { Box } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";

/**
 * Internal dependencies
 */
import { gsap } from "./gsapSetup";

const BackgroundOrbs = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const orbs = gsap.utils.toArray(".bg-orb");
      orbs.forEach((orb, index) => {
        gsap.to(orb, {
          x: index % 2 === 0 ? 40 : -40,
          y: index % 2 === 0 ? -30 : 30,
          duration: 4 + index,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <Box
      ref={containerRef}
      position="fixed"
      inset={0}
      overflow="hidden"
      pointerEvents="none"
      zIndex={0}
    >
      <Box
        className="bg-orb"
        position="absolute"
        top="-10%"
        left="-5%"
        w="420px"
        h="420px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(0,179,137,0.18) 0%, transparent 70%)"
        filter="blur(40px)"
      />
      <Box
        className="bg-orb"
        position="absolute"
        top="35%"
        right="-8%"
        w="360px"
        h="360px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(94,236,191,0.12) 0%, transparent 70%)"
        filter="blur(50px)"
      />
      <Box
        className="bg-orb"
        position="absolute"
        bottom="5%"
        left="20%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(0,125,87,0.15) 0%, transparent 70%)"
        filter="blur(45px)"
      />
    </Box>
  );
};

export default BackgroundOrbs;
