/**
 * External dependencies
 */
import { Stack, Text, Button } from "@chakra-ui/react";
import { Link as LinkR } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

/**
 * Internal dependencies
 */
import urlResumen from "../../assets/Santiago-salcedo-cv.pdf";
import LangSwitcher from "./LangSwitcher";
import { useLanguage } from "../../i18n/LanguageContext";

const Link = styled(LinkR)`
  text-decoration: none !important;
  color: var(--chakra-colors-gray-200);
  transition: all 0.2s;
  letter-spacing: inherit;

  &:hover {
    color: var(--chakra-colors-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--chakra-colors-primary);
    outline-offset: 3px;
  }
`;

const Nav = () => {
  const { t, localizedPath } = useLanguage();
  const links = ["home", "about", "experience", "skills", "projects", "contact"];

  return (
    <Stack direction={["column", "column", "row"]} spacing="30px" align="center">
      {links.map((link) => (
        <Text
          key={link}
          fontSize={["24px", "24px", "18px"]}
          fontFamily="Jost"
          cursor="pointer"
          letterSpacing="0.20px"
          fontWeight={400}
          color="gray.300"
          _hover={{ color: "primary" }}
        >
          <Link to={link} smooth duration={500} offset={-80}>
            {t(`nav.${link}`)}
          </Link>
        </Text>
      ))}
      <LangSwitcher />
      <Button
        as={RouterLink}
        to={localizedPath("/resume")}
        my={3}
        px="30px"
        variant="primary"
        borderRadius="3px"
        transition="all 0.2s ease"
        fontSize={["20px", "20px", "16px"]}
        fontWeight={400}
        w={["70%", "70%", "auto"]}
      >
        {t("nav.resume")}
      </Button>
      <Button
        as="a"
        href={urlResumen}
        download
        my={3}
        px="20px"
        variant="outline"
        borderColor="primary"
        color="primary"
        borderRadius="3px"
        transition="all 0.2s ease"
        fontSize={["18px", "18px", "14px"]}
        fontWeight={400}
        w={["70%", "70%", "auto"]}
        display={["none", "none", "inline-flex"]}
        aria-label={t("common.downloadPdf")}
        _hover={{ bg: "whiteAlpha.100" }}
      >
        {t("nav.pdf")}
      </Button>
    </Stack>
  );
};

export default Nav;
