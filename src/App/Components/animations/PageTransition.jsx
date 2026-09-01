/**
 * External dependencies
 */
import React from "react";
import { Box } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const MotionBox = motion.create(Box);

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <MotionBox
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        w="100%"
      >
        {children}
      </MotionBox>
    </AnimatePresence>
  );
};

export default PageTransition;
