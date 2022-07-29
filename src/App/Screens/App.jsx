/**
 * External dependencies
 */
import React, { useState, useEffect } from 'react';
import { Box, Container, } from '@chakra-ui/react';
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
import Hero from '../Components/Hero';


const App = () => {
    const [loaded, setLoaded] = useState(false);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoaded(true);
    //     }, 1000);
    // }, [])


    // if (!loaded) {

    //     return (
    //         <Box>
    //             loading
    //         </Box>
    //     )

    // }

    return (
        <Box minH={'100vh'}>
            <Header />
            <Container
                maxW={'5xl'}
                px={['40px', '40px', 0]}
            >
                <Hero />
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
