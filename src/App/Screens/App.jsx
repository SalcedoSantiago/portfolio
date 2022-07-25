/**
 * External dependencies
 */
import React from 'react';
import { Box, Container } from '@chakra-ui/react';
/**
 * Internal dependencies
 */
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';


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
            <Footer />
        </Box>
    )
}

export default App
