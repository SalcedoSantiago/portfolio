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
import { useLanguage } from "../../i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <Element name="about">
      <Flex py={SECTION_PY} justifyContent="center">
        <Box maxW="700px">
          <GsapSectionTitle>{t("about.title")}</GsapSectionTitle>

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
              <Text py={2}>{t("about.p1")}</Text>
              <Text py={2}>{t("about.p2")}</Text>
              <Text py={2}>
                {t("about.p3Before")}{" "}
                <Text as="span" color="primary" fontWeight={600}>
                  HackTheBox
                </Text>{" "}
                {t("about.p3After")}
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
                aria-label={t("common.whatsappNewTab")}
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
                aria-label={t("common.githubNewTab")}
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
                aria-label={t("common.linkedinNewTab")}
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
                {t("about.emailMe")}
              </Box>
            </Stack>
          </GsapReveal>
        </Box>
      </Flex>
    </Element>
  );
};

export default About;
