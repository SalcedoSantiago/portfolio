/**
 * External dependencies
 */
import React from 'react'
import { Container, Stack, Box, Link, Text, Button } from '@chakra-ui/react'
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
                <Stack as={'nav'} direction={'row'} spacing={'30px'} align={'center'}>
                    {links.map((link) =>
                        <Text
                            as="a"
                            textTransform={'capitalize'}
                            fontSize="18px"
                            fontFamily={'Jost'}
                            cursor="pointer"
                            textDecor={'none'}
                            color="gray.300"
                        >
                            {link}
                        </Text >
                    )}
                    <Button
                        px={6}
                        variant="primary"
                        // colorScheme={'whatsapp'}
                        // color="primary"
                        borderRadius={0}
                    >
                        Donwload cv
                    </Button>
                </Stack>
            </Stack>

            <Hero />
        </Container>
    )
}

export default Header