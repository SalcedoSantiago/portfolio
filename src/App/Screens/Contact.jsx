/**
 * External dependencies
 */
import React from "react";
import { Stack, Text, Heading, Flex, Button } from "@chakra-ui/react";
import { Element } from "react-scroll";

/**
 * Internal dependencies
 */

const Contact = () => {
  return (
    <Element name="contact">
      <Stack py={"150px"} justify="center" align={"center"} spacing={6}>
        <Heading
          display={"block"}
          w={"100%"}
          pb={2}
          fontSize={"5xl"}
          color="gray.100"
          textAlign={"center"}
        >
          Get in touch
        </Heading>
        <Text
          maxW={"600px"}
          textAlign="center"
          lineHeight={"35px"}
          letterSpacing="0.2px"
          fontSize={"18px"}
          color="gray.300"
          pb={"30px"}
        >
          I'm currently actively looking for new opportunities and projects
          <br />
          Whether you have a question or just want to say hi, I’ll try my best
          to get back to you!
        </Text>

        <Flex py={2} gap={2}>
          <Button
            px={"50px"}
            variant="primary"
            borderRadius={"3px"}
            transition="all 0.2s ease"
            fontSize="16px"
            fontWeight={400}
            as="a"
            href="mailto:santiagosalcedod@gmail.com"
            letterSpacing={"0.20px"}
          >
            Say Hello!
          </Button>
        </Flex>
      </Stack>
    </Element>
  );
};

export default Contact;
