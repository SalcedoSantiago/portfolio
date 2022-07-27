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
import StickyLeft from '../Components/StickyLeft';
import StickyRight from '../Components/StickyRight';


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
            <StickyLeft />
            <StickyRight />
            <Footer />
        </Box>
    )
}

export default App
