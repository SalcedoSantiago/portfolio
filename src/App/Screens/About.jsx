/**
 * Internal dependencies
 */
import React from "react";
import { Stack, Text, Box, Heading, Flex } from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { Element } from "react-scroll";

/**
 * External dependencies
 */

const About = () => {
  return (
    <Element name="about">
      <Flex py={"120px"} justifyContent={"center"}>
        <Box color="gray.300">
          <Heading
            fontSize={"5xl"}
            // color="primary"
            // fontWeight="500"
            color="gray.100"
            textAlign={"center"}
            py={6}
            px={[3, 3, 3]}
          >
            About me
          </Heading>
          <Box
            lineHeight={"35px"}
            letterSpacing="0.2px"
            maxW={"800px"}
            fontSize={"18px"}
            textAlign="center"
            color="gray.300"
          >
            <Text py={2}>
              I am from Argentina, Buenos Aires. I started
              programming/developing about 2 years ago, and ever since I learned
              what development is, I never stopped.
            </Text>
          </Box>

          <Stack
            py={7}
            mt="30px"
            direction={"row"}
            justifyContent={"center"}
            align="center"
            spacing={6}
          >
            <Box
              as="a"
              href="https://wa.me/541125709209?text=Hello!"
              target={"_blank"}
              color="gray.400"
              cursor={"pointer"}
              fontSize={"24px"}
              _hover={{
                color: "primary",
              }}
            >
              <FaWhatsapp />
            </Box>
            <Box
              as="a"
              href="https://github.com/SalcedoSantiago"
              target={"_blank"}
              color="gray.400"
              cursor={"pointer"}
              fontSize={"24px"}
              _hover={{
                color: "primary",
              }}
            >
              <FaGithub />
            </Box>

            <Box
              as="a"
              href="https://www.linkedin.com/in/santiago-dalmiro-salcedo/"
              target={"_blank"}
              color="gray.400"
              cursor={"pointer"}
              fontSize={"24px"}
              _hover={{
                color: "primary",
              }}
            >
              <FaLinkedinIn />
            </Box>

            <Box
              cursor={"pointer"}
              fontSize={"18px"}
              fontWeight={500}
              bgColor={"gray.600"}
              color="gray.400"
              p={2}
              href="mailto:santiagosalcedod@gmail.com"
              px={3}
              borderRadius="6px"
              borderWidth="1px"
              borderColor="gray.900"
              _hover={{
                color: "primary",
              }}
            >
              @ Email Me
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Element>
  );
};

export default About;
