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

    const links = ['home', 'about', 'skills', 'projects', 'contact'];

    return (
        <Container maxW={'5xl'}>
            <Stack direction={'row'} justifyContent="space-between" py={'40px'} align='center'>
                <Box
                    fontSize="20px"
                >
                    Santiagod
                </Box>
                <Stack as={'nav'} direction={'row'} spacing={'30px'}>
                    {links.map((link) =>
                        <Link
                            as="a"
                            textTransform={'capitalize'}
                            fontSize="20px"
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