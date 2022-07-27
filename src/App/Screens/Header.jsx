/**
 * External dependencies
 */
import React from 'react'
import { Container, Stack, Box, Text, Button } from '@chakra-ui/react'
import Hero from '../Components/Hero';
import { Link as LinkR } from 'react-scroll'
import styled from 'styled-components';

/**
 * Internal dependencies
 */

const Header = () => {

    const links = ['home', 'about', 'skills', 'projects', 'contact'];

    const Link = styled(LinkR)`
        text-decoration: none!important;
        color:var(--chakra-colors-gray-200);
        transition: all .2s;
        letter-spacing: inherit;

        &:hover{
            color:var(--chakra-colors-primary);
        }
    `

    return (
        <Container maxW={'5xl'}>
            <Stack direction={'row'} justifyContent="space-between" py={'40px'} align='center'>
                <Box
                    fontSize="20px"
                >
                    Santiagod
                </Box>
                <Stack
                    as={'nav'}
                    direction={'row'}
                    spacing={'30px'}
                    align={'center'}
                >
                    {links.map((link) =>
                        <Text
                            // as="a"
                            textTransform={'capitalize'}
                            fontSize="18px"
                            fontFamily={'Jost'}
                            cursor="pointer"
                            letterSpacing={'0.20px'}
                            textDecor={'none'}
                            fontWeight={400}
                            color="gray.300"
                            _hover={{
                                color: 'primary'
                            }}
                        >
                            <Link
                                to={link}
                                smooth={true}
                                duration={500}
                            >
                                {link}
                            </Link>
                        </Text >
                    )}
                    <Button
                        as="a"
                        href="mailto:santiagosalcedod@gmail.com"
                        my={3}
                        px={'30px'}
                        variant="primary"
                        borderRadius={'3px'}
                        transition="all 0.2s ease"
                        fontSize="16px"
                        fontWeight={400}
                    >
                        Resume
                    </Button>
                </Stack>
            </Stack>

            <Hero />
        </Container>
    )
}

export default Header