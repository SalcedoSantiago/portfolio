/**
 * External dependencies
 */
import React from 'react';
import { Stack, Link, Text, Box, Image, Heading, Flex, Button, Container, Divider } from '@chakra-ui/react';
/**
 * Internal dependencies
 */
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import HeroOld from '../Components/HeroOld';
import Linkedin from '../../Icons/linkedin';
import Github from '../../Icons/github';
import Email from '../../Icons/email';


const App = () => {
    return (
        <Box minH={'100vh'}>
            <Header />
            <Container maxW={'5xl'}>
                <About />
                <Skills />
                <Projects />
                <Contact />
            </Container>




            <Box
                position="fixed"
                bottom={'0'}
                as="a"
                color={'gray.300'}
                cursor={'pointer'}
                fontFamily="'Inter'"
                right={'0'}
            >
                <Stack direction={'column'} justifyContent={'center'} align='center' spacing={6} flex={1}>
                    <Box
                        transform={'rotate(0.25turn)'}

                    >
                        <Text
                        w="400px"

                        >
                            santiagosalcedod@gmail.com
                        </Text>
                    </Box>

                    <Divider
                        orientation='vertical'
                        height="50px"
                    />
                </Stack>
            </Box>


            <Box
                position="fixed"
                bottom={'0'}
                as="a"
                color={'gray.300'}
                cursor={'pointer'}
                fontFamily="'Inter'"
                left={'100px'}
            >
                <Stack direction={'column'} justifyContent={'center'} align='center' spacing={6} flex={1}>
                    <Box color={'gray.300'}>
                        <Linkedin />
                    </Box>
                    <Box color={'gray.300'}>
                        <Github />
                    </Box>
                    <Box color={'gray.300'}>
                        <Email />
                    </Box>
                    <Divider
                        orientation='vertical'
                        height="100px"
                    />
                </Stack>
            </Box>
            <Footer />
        </Box>
    )
}

export default App
