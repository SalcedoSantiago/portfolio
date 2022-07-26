// import { ComponentStyleConfig } from '@chakra-ui/react'

export const ButtonStyles = {
    baseStyle: {},
    sizes: {},
    variants: {
        primary: {
            bg: "transparent",
            borderColor: "primary",
            borderWidth: "1px",
            borderStyled: "solid",
            color: "primary",
            _hover: {
                // color: "slate",
                // bg: "primary",
                transform: "scale(1.1)"
            }
        }
    },
    defaultProps: {
        // size: 'lg', // default is md
        // variant: 'sm', // default is solid
        // colorScheme: 'green', // default is gray
    },
}