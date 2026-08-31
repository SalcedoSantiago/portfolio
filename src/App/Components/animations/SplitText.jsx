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

export const SplitChars = ({
  text,
  as: Tag = "span",
  className,
  delay = 0,
  stagger = 0.035,
  trigger = true,
}) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (!trigger) return;

      const chars = containerRef.current?.querySelectorAll(".split-char-inner");
      if (!chars?.length) return;

      gsap.from(chars, {
        yPercent: 120,
        opacity: 0,
        rotateX: -70,
        transformOrigin: "50% 100%",
        stagger,
        duration: 1.1,
        ease: "power4.out",
        delay,
      });
    },
    { scope: containerRef, dependencies: [text, delay, trigger] }
  );

  return (
    <Tag ref={containerRef} className={className} style={{ perspective: "600px" }}>
      {text.split("").map((char, index) => (
        <Box
          as="span"
          key={`${char}-${index}`}
          display="inline-block"
          overflow="hidden"
          verticalAlign="bottom"
          lineHeight="1.1"
        >
          <Box as="span" className="split-char-inner" display="inline-block">
            {char === " " ? "\u00A0" : char}
          </Box>
        </Box>
      ))}
    </Tag>
  );
};

export const SplitWords = ({
  text,
  as: Tag = "span",
  className,
  delay = 0,
  stagger = 0.08,
  trigger = true,
}) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (!trigger) return;

      const words = containerRef.current?.querySelectorAll(".split-word-inner");
      if (!words?.length) return;

      gsap.from(words, {
        yPercent: 100,
        opacity: 0,
        stagger,
        duration: 0.9,
        ease: "power3.out",
        delay,
      });
    },
    { scope: containerRef, dependencies: [text, delay, trigger] }
  );

  return (
    <Tag ref={containerRef} className={className}>
      {text.split(" ").map((word, index) => (
        <Box
          as="span"
          key={`${word}-${index}`}
          display="inline-block"
          overflow="hidden"
          mr="0.28em"
          verticalAlign="bottom"
        >
          <Box as="span" className="split-word-inner" display="inline-block">
            {word}
          </Box>
        </Box>
      ))}
    </Tag>
  );
};

export default SplitChars;
