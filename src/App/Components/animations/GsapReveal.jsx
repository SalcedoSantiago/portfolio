/**
 * External dependencies
 */
import React, { useRef } from "react";
import { Box } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";

/**
 * Internal dependencies
 */
import { gsap, prefersReducedMotion } from "./gsapSetup";

const variants = {
  fadeUp: { y: 80, opacity: 0, scale: 0.96 },
  clipUp: { yPercent: 110, opacity: 0 },
  slideLeft: { x: -80, opacity: 0 },
  slideRight: { x: 80, opacity: 0 },
  scaleIn: { scale: 0.85, opacity: 0 },
};

const GsapReveal = ({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 1,
  start = "top 85%",
  stagger = 0,
  ...props
}) => {
  const ref = useRef(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;

      const targets = stagger > 0 ? el.children : el;
      const fromVars = { ...variants[variant], delay, duration, ease: "power4.out" };

      if (variant === "clipUp") {
        gsap.set(el, { overflow: "hidden" });
      }

      gsap.from(targets, {
        ...fromVars,
        stagger: stagger || undefined,
        scrollTrigger: {
          trigger: el,
          start,
          // Avoid reverse-to-hidden which can leave content inaccessible
          toggleActions: "play none none none",
        },
      });
    },
    { scope: ref, dependencies: [variant, delay, duration, start, stagger] }
  );

  return (
    <Box ref={ref} {...props}>
      {children}
    </Box>
  );
};

export default GsapReveal;
