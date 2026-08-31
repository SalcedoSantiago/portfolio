/**
 * External dependencies
 */
import { Stack, Text, Flex, Box, Container } from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import LogoMe from "../Components/logo";

const Footer = () => {
  return (
    <Box as="footer">
      <Container maxW="5xl" py="32px">
        <Stack textAlign="center">
          <Flex justifyContent="center" aria-hidden="true">
            <LogoMe />
          </Flex>
          <Text
            color="gray.300"
            fontWeight="500"
            lineHeight="35px"
            letterSpacing="0.2px"
            fontSize="18px"
            textAlign="center"
            pb="20px"
          >
            Thanks for scrolling, that's all folks.
          </Text>

          <Stack
            as="nav"
            aria-label="Footer social links"
            direction="row"
            justifyContent="center"
            align="center"
            spacing={6}
            pb={3}
          >
            <Box
              as="a"
              href="https://github.com/SalcedoSantiago"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (opens in a new tab)"
              color="gray.400"
              fontSize="24px"
              _hover={{ color: "primary" }}
            >
              <FaGithub aria-hidden="true" focusable="false" />
            </Box>

            <Box
              as="a"
              href="https://www.linkedin.com/in/santiago-dalmiro-salcedo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in a new tab)"
              color="gray.400"
              fontSize="24px"
              _hover={{ color: "primary" }}
            >
              <FaLinkedinIn aria-hidden="true" focusable="false" />
            </Box>
            <Box
              as="a"
              href="mailto:santiagosalcedod@gmail.com"
              aria-label="Email Santiago Salcedo"
              color="gray.400"
              fontSize="24px"
              _hover={{ color: "primary" }}
            >
              <MdOutlineMail aria-hidden="true" focusable="false" />
            </Box>
          </Stack>

          <Text
            color="gray.300"
            fontWeight="500"
            lineHeight="35px"
            letterSpacing="0.2px"
            fontSize="18px"
            textAlign="center"
            pt={3}
          >
            Built by{" "}
            <Box
              as="a"
              href="https://www.linkedin.com/in/santiago-dalmiro-salcedo/"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              Santiago Salcedo
            </Box>
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
