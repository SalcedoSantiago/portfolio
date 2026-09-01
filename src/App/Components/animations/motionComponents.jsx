/**
 * External dependencies
 */
import { chakra, shouldForwardProp as chakraShouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const shouldForwardProp = (prop) =>
  isValidMotionProp(prop) || chakraShouldForwardProp(prop);

export const MotionBox = chakra(motion.div, { shouldForwardProp });
export const MotionFlex = chakra(motion.div, { shouldForwardProp });
export const MotionImg = chakra(motion.img, { shouldForwardProp });
export const MotionButton = chakra(motion.button, { shouldForwardProp });
