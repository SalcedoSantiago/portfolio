/**
 * External dependencies
 */
import React from "react";
import { Stack, Text, Box, Flex, Tag } from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { Element } from "react-scroll";

/**
 * Internal dependencies
 */
import GsapSectionTitle from "../Components/animations/GsapSectionTitle";
import GsapReveal from "../Components/animations/GsapReveal";
import { SECTION_PY } from "../constants/layout";

const About = () => {
  return (
    <Element name="about">
      <Flex py={SECTION_PY} justifyContent="center">
        <Box maxW="700px">
          <GsapSectionTitle>About me</GsapSectionTitle>

          <GsapReveal variant="scaleIn" delay={0.2} stagger={0.1}>
            <Box
              lineHeight="35px"
              letterSpacing="0.2px"
              fontSize="18px"
              textAlign="center"
              color="gray.300"
              py={4}
              mt="16px"
            >
              <Text py={2}>
                I'm a Full Stack Developer from Buenos Aires, Argentina, with
                5+ years of experience building for the web. I specialize in
                WordPress, developing custom Gutenberg blocks, themes and plugins,
                and I also work across the React and Node ecosystem.
              </Text>
              <Text py={2}>
                I care about performance, accessibility and turning Figma designs
                into maintainable, pixel-faithful products. Lately I've been
                integrating AI tooling like Claude, Cursor and MCP into my
                workflow to prototype and ship faster without sacrificing quality.
              </Text>
              <Text py={2}>
                Outside of client work, cybersecurity is a hobby I take
                seriously — I solve{" "}
                <Text as="span" color="primary" fontWeight={600}>
                  HackTheBox
                </Text>{" "}
                machines regularly and keep sharpening my offensive security
                skills across web app pentesting, network reconnaissance,
                exploitation and Linux / Active Directory attack paths.
              </Text>
            </Box>
          </GsapReveal>

          <GsapReveal variant="fadeUp" delay={0.25}>
            <Flex
              wrap="wrap"
              gap={2}
              justifyContent="center"
              pt={2}
              pb={2}
            >
              {["Burp Suite", "OWASP", "Nmap", "Wireshark", "Metasploit", "Active Directory"].map(
                (tool) => (
                  <Tag
                    key={tool}
                    bg="transparent"
                    borderWidth="1px"
                    borderColor="gray.700"
                    color="gray.400"
                    fontFamily="'PT Mono', monospace"
                    fontSize="xs"
                    fontWeight={500}
                    borderRadius="full"
                    transition="background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease"
                    _hover={{ bg: "primary", color: "gray.900", borderColor: "primary" }}
                  >
                    {tool}
                  </Tag>
                )
              )}
            </Flex>
          </GsapReveal>

          <GsapReveal variant="scaleIn" delay={0.1} stagger={0.08}>
            <Stack
              py={5}
              mt="16px"
              direction="row"
              justifyContent="center"
              align="center"
              spacing={6}
              flexWrap="wrap"
            >
              <Box
                as="a"
                href="https://wa.me/541125709209?text=Hello!"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp (opens in a new tab)"
                color="gray.400"
                fontSize="24px"
                transition="all 0.2s"
                _hover={{ color: "primary", transform: "translateY(-3px)" }}
              >
                <FaWhatsapp aria-hidden="true" focusable="false" />
              </Box>
              <Box
                as="a"
                href="https://github.com/SalcedoSantiago"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (opens in a new tab)"
                color="gray.400"
                fontSize="24px"
                transition="all 0.2s"
                _hover={{ color: "primary", transform: "translateY(-3px)" }}
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
                transition="all 0.2s"
                _hover={{ color: "primary", transform: "translateY(-3px)" }}
              >
                <FaLinkedinIn aria-hidden="true" focusable="false" />
              </Box>
              <Box
                as="a"
                fontSize="18px"
                fontWeight={500}
                bgColor="gray.800"
                color="gray.100"
                p={2}
                href="mailto:santiagosalcedod@gmail.com"
                px={3}
                borderRadius="6px"
                borderWidth="1px"
                borderColor="gray.600"
                transition="all 0.2s"
                _hover={{
                  color: "primary",
                  transform: "translateY(-3px)",
                  borderColor: "primary",
                }}
              >
                Email Me
              </Box>
            </Stack>
          </GsapReveal>
        </Box>
      </Flex>
    </Element>
  );
};

export default About;
