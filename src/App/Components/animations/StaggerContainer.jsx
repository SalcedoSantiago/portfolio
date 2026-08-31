/**
 * External dependencies
 */
import React from "react";

/**
 * Internal dependencies
 */
import { MotionBox } from "./motionComponents";

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const StaggerContainer = ({ children, ...props }) => {
  return (
    <MotionBox
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {children}
    </MotionBox>
  );
};

export const StaggerItem = ({ children, ...props }) => {
  return (
    <MotionBox variants={staggerItem} {...props}>
      {children}
    </MotionBox>
  );
};

export default StaggerContainer;
