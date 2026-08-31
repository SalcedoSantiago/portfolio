/**
 * External dependencies
 */
import React from "react";

/**
 * Internal dependencies
 */
import { MotionBox } from "./motionComponents";

const AnimatedSection = ({
  children,
  delay = 0,
  y = 40,
  duration = 0.6,
  ...props
}) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </MotionBox>
  );
};

export default AnimatedSection;
