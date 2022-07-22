/**
 * External dependencies
 */
import { extendTheme, theme } from "@chakra-ui/react";

/**
 * Internal dependencies
 */
import { ButtonStyles as Button } from "./App/Components/ButtonStyles";


export default extendTheme({
    colors: {
        primary: '#5EECBF',
        secondary: '#00B389',
        terciary: '#007D57',
        slate: '#99B0A8',
        dark: '#1e202c'
    },
    components: {
        // Button,
    },
    fonts: {
        body: `'Inter', sans-serif`,
        heading: `'Inter',sans-serif`
    },
    styles: {
        global: {
            body: {
                bg: '#1e202c',
                color: 'white',
            },
            a: {
                color: '#5EECBF',
                _hover: {
                    textDecoration: 'underline',
                },
            },
        }
    }
})