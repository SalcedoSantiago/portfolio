/**
 * External dependencies
 */
import React, { useRef } from "react";
import { Stack, Text, Heading, Flex, Button } from "@chakra-ui/react";
import { Element } from "react-scroll";
import { useGSAP } from "@gsap/react";

/**
 * Internal dependencies
 */
import GsapSectionTitle from "../Components/animations/GsapSectionTitle";
import GsapReveal from "../Components/animations/GsapReveal";
import { gsap } from "../Components/animations/gsapSetup";
import { SECTION_PY } from "../constants/layout";

const Contact = () => {
  const btnRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(btnRef.current, {
        y: 40,
        opacity: 0,
        scale: 0.9,
        duration: 0.9,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: btnRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: btnRef }
  );

  const handleEnter = () => {
    gsap.to(btnRef.current, { scale: 1.06, duration: 0.3, ease: "power2.out" });
  };

  const handleLeave = () => {
    gsap.to(btnRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
  };

  return (
    <Element name="contact">
      <Stack py={SECTION_PY} justify="center" align="center" spacing={5}>
        <GsapSectionTitle>Get in touch</GsapSectionTitle>
        <GsapReveal variant="fadeUp" delay={0.15}>
          <Text
            maxW={"600px"}
            textAlign="center"
            lineHeight={"35px"}
            letterSpacing="0.2px"
            fontSize={"18px"}
            color="gray.300"
            pb="16px"
          >
            I'm open to full-time roles, freelance projects and collaborations
            in WordPress, React and AI-assisted development.
            <br />
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </Text>
        </GsapReveal>

        <Flex py={2} gap={2}>
          <Button
            ref={btnRef}
            px={"50px"}
            variant="primary"
            borderRadius={"3px"}
            fontSize="16px"
            fontWeight={400}
            as="a"
            href="mailto:santiagosalcedod@gmail.com"
            letterSpacing={"0.20px"}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            Say Hello!
          </Button>
        </Flex>
      </Stack>
    </Element>
  );
};

export default Contact;
