export const ButtonStyles = {
  baseStyle: {
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "primary",
      outlineOffset: "3px",
      boxShadow: "none",
    },
  },
  sizes: {},
  variants: {
    primary: {
      bg: "transparent",
      borderColor: "primary",
      borderWidth: "1px",
      borderRadius: "3px",
      py: 6,
      px: 2,
      borderStyle: "solid",
      fontFamily: "'Karla'",
      color: "primary",
      _hover: {
        bg: "rgba(100,255,218,0.1)",
        textDecoration: "none",
      },
    },
  },
  defaultProps: {},
};
