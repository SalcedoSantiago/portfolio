/**
 * External dependencies
 */
import React, { useRef } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";

/**
 * Internal dependencies
 */
import { gsap, prefersReducedMotion } from "./gsapSetup";
import { TITLE_PY } from "../../constants/layout";

const GsapSectionTitle = ({ children, textAlign = "center", ...props }) => {
  const wrapRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !titleRef.current) return;

      gsap.from(titleRef.current, {
        yPercent: 110,
        opacity: 0,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: wrapRef }
  );

  return (
    <Box ref={wrapRef} overflow="hidden" textAlign={textAlign} py={TITLE_PY}>
      <Heading
        ref={titleRef}
        as="h2"
        fontSize="5xl"
        color="gray.100"
        {...props}
      >
        {children}
      </Heading>
    </Box>
  );
};

export default GsapSectionTitle;
