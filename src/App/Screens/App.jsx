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
                <HeroOld />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </Container>

            <Box
                transform={'rotate(0.25turn)'}
                position="fixed"
                bottom={'160px'}
                as="a"
                color={'gray.300'}
                cursor={'pointer'}
                fontFamily="'Space Mono'"
                right={0}
            >
                <Stack direction={'row'} align='center'>
                    <Text display={'inline'}>
                        santiagosalcedod@gmail.com
                    </Text>
                    <Divider
                        w="50px"
                    />
                </Stack>
            </Box>


            <Box
                // transform={'rotate(0.25turn)'}
                position="fixed"
                bottom={'160px'}
                as="a"
                color={'gray.300'}
                cursor={'pointer'}
                fontFamily="'Space Mono'"
                left={'100px'}
            >
                <Stack direction={'column'} justifyContent={'center'} align='center' spacing={6}>
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
                    />
                </Stack>
            </Box>
            <Footer />
        </Box>
    )
}

export default App
