/**
 * External dependencies
 */
import React, { useRef } from "react";
import { Stack, Box, Text, VisuallyHidden } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";

/**
 * Internal dependencies
 */
import LogoMe from "./logo";
import { gsap, prefersReducedMotion } from "./animations/gsapSetup";

const LoadingScreen = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      tl.to(".loader-bar", {
        scaleX: 1,
        duration: 0.9,
        ease: "power2.inOut",
        transformOrigin: "left center",
      }).to(
        ".loader-logo",
        {
          scale: 1.08,
          duration: 0.9,
          ease: "power2.inOut",
        },
        0
      );

      gsap.from(".loader-logo", {
        opacity: 0,
        scale: 0.6,
        rotation: -8,
        duration: 0.8,
        ease: "back.out(2)",
      });

      gsap.from(".loader-bar-wrap", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.3,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <Stack
      ref={containerRef}
      role="status"
      aria-live="polite"
      aria-busy="true"
      h="100vh"
      w="100vw"
      align="center"
      justify="center"
      spacing={6}
      bg="#121212"
    >
      <VisuallyHidden>Loading portfolio…</VisuallyHidden>
      <Box className="loader-logo" aria-hidden="true">
        <LogoMe />
      </Box>
      <Box
        className="loader-bar-wrap"
        w="140px"
        h="3px"
        bg="gray.700"
        borderRadius="full"
        overflow="hidden"
        aria-hidden="true"
      >
        <Box
          className="loader-bar"
          h="100%"
          w="100%"
          bg="#5EECBF"
          borderRadius="full"
          sx={{ transform: "scaleX(0.15)" }}
        />
      </Box>
    </Stack>
  );
};

export default LoadingScreen;
