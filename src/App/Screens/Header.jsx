/**
 * External dependencies
 */
import React from 'react'
import { Container, Stack, Box, Link, Text } from '@chakra-ui/react'
import Hero from '../Components/Hero';

/**
 * Internal dependencies
 */

const Header = () => {

    const links = ['home', 'about', 'projects', 'contact'];

    return (
        <Container maxW={'6xl'} minH="100vh">
            <Stack direction={'row'} justifyContent="space-between" py={7}>
                <Box>
                    Logo here!
                </Box>
                <Stack as={'nav'} direction={'row'} spacing={6}>
                    {links.map((link) =>
                        <Link
                            as="a"
                            textTransform={'capitalize'}
                            fontSize={'md'}
                            cursor="pointer"
                        >
                            {link}
                        </Link >
                    )}
                </Stack>
            </Stack>

            <Hero />
        </Container>
    )
}

export default Header