/**
 * External dependencies
 */
import React, { useState, useEffect } from 'react';
import { Box, Container } from '@chakra-ui/react';
/**
 * Internal dependencies
 */
import Header from './Header';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import StickyLeft from '../Components/StickyLeft';
import StickyRight from '../Components/StickyRight';
import Hero from '../Components/Hero';
import LoadingScreen from '../Components/LoadingScreen';
import BackgroundOrbs from '../Components/animations/BackgroundOrbs';
import { ScrollTrigger } from '../Components/animations/gsapSetup';


const App = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 900);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (loaded) {
            const refreshTimer = setTimeout(() => {
                ScrollTrigger.refresh();
            }, 100);
            return () => clearTimeout(refreshTimer);
        }
    }, [loaded]);


    if (!loaded) {
        return <LoadingScreen />;
    }

    return (
        <Box minH={'100vh'} position="relative">
            <BackgroundOrbs />
            <Box position="relative" zIndex={1}>
                <Header />
                <Container
                    maxW={'5xl'}
                    px={['40px', '40px', 0]}
                >
                    <Hero />
                    <About />
                    <Experience />
                    <Skills />
                    <Projects />
                    <Contact />
                </Container>
                <StickyLeft />
                <StickyRight />
                <Footer />
            </Box>
        </Box>
    )
}

export default App
