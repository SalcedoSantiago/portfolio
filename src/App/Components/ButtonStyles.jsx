// import { ComponentStyleConfig } from '@chakra-ui/react'

export const ButtonStyles = {
    baseStyle: {},
    sizes: {},
    variants: {
        primary: {
            bg: "primary",
            color: "dark",
            _hover: {
                color: "white"
            }
        }
    },
    defaultProps: {
        size: 'lg', // default is md
        variant: 'sm', // default is solid
        colorScheme: 'green', // default is gray
    },
}