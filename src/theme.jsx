/**
 * External dependencies
 */
import { extendTheme } from "@chakra-ui/react";

/**
 * Internal dependencies
 */
import { ButtonStyles as Button } from "./App/Components/ButtonStyles";

export default extendTheme({
  colors: {
    primary: "#5EECBF",
    secondary: "#00B389",
    terciary: "#007D57",
    slate: "#99B0A8",
    dark: "#1e202c",
  },
  components: {
    Button,
  },
  fonts: {
    body: `'Karla', sans-serif`,
    heading: `'League Spartan', sans-serif`,
  },
  styles: {
    global: {
      html: {
        scrollPaddingTop: { base: "88px", md: "0" },
      },
      body: {
        bg: "#121212",
        color: "white",
      },
      a: {
        color: "#5EECBF",
        _hover: {
          textDecoration: "underline",
        },
        _focusVisible: {
          outline: "2px solid",
          outlineColor: "primary",
          outlineOffset: "3px",
        },
      },
      "button:focus-visible, [role='button']:focus-visible": {
        outline: "2px solid",
        outlineColor: "var(--chakra-colors-primary)",
        outlineOffset: "3px",
      },
      "@media (prefers-reduced-motion: reduce)": {
        "*, *::before, *::after": {
          animationDuration: "0.01ms !important",
          animationIterationCount: "1 !important",
          transitionDuration: "0.01ms !important",
          scrollBehavior: "auto !important",
        },
      },
    },
  },
});
