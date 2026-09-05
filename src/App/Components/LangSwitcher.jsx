/**
 * External dependencies
 */
import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

/**
 * Internal dependencies
 */
import { useLanguage } from "../../i18n/LanguageContext";

const LangSwitcher = ({ size = "sm" }) => {
  const { lang, setLang, t } = useLanguage();

  return (
    <ButtonGroup
      size={size}
      isAttached
      variant="outline"
      aria-label={t("common.langSwitcher")}
    >
      {["en", "es"].map((code) => (
        <Button
          key={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          borderColor="gray.600"
          color={lang === code ? "gray.900" : "gray.300"}
          bg={lang === code ? "primary" : "transparent"}
          textTransform="uppercase"
          fontSize="12px"
          fontWeight={700}
          letterSpacing="0.06em"
          px={3}
          _hover={{
            bg: lang === code ? "primary" : "whiteAlpha.100",
            color: lang === code ? "gray.900" : "primary",
          }}
        >
          {code}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default LangSwitcher;
