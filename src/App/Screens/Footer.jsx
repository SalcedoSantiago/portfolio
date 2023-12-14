/**
 * External dependencies
 */
import { Stack, Text, Flex, Box, Container } from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import LogoMe from "../Components/logo";

/**
 * Internal dependencies
 */

const Footer = () => {
  return (
    <Container maxW={"5xl"} py={"50px"}>
      <Stack textAlign={"center"}>
        <Flex justifyContent="center">
          <LogoMe />
        </Flex>
        <Text
          color={"gray.300"}
          fontWeight="500"
          lineHeight={"35px"}
          letterSpacing="0.2px"
          fontSize={"18px"}
          textAlign="center"
          pb={"20px"}
        >
          Thanks for scrolling, that's all folks.
        </Text>

        <Stack
          direction={"row"}
          justifyContent={"center"}
          align="center"
          spacing={6}
          pb={3}
        >
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
            as="a"
            href="mailto:santiagosalcedod@gmail.com"
            target={"_blank"}
            color="gray.400"
            cursor={"pointer"}
            fontSize={"24px"}
            _hover={{
              color: "primary",
            }}
          >
            <MdOutlineMail />
          </Box>
        </Stack>

        <Text
          color={"gray.300"}
          fontWeight="500"
          lineHeight={"35px"}
          letterSpacing="0.2px"
          fontSize={"18px"}
          textAlign="center"
          pt={3}
          cursor="pointer"
          transition={"al .2s "}
        >
          Built by{" "}
          <Box
            as="a"
            href="https://www.linkedin.com/in/santiago-dalmiro-salcedo/"
            target={"_blank"}
            color="primary"
          >
            Santiago Salcedo
          </Box>
        </Text>
      </Stack>
    </Container>
  );
};

export default Footer;
