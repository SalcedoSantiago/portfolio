/**
 * External dependencies
 */
import React, { useState, useEffect } from 'react';
import { Box, Container, Center, Spinner, Stack } from '@chakra-ui/react';
/**
 * Internal dependencies
 */
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import StickyLeft from '../Components/StickyLeft';
import StickyRight from '../Components/StickyRight';
import Hero from '../Components/Hero';
import LogoMe from '../Components/logo';


const App = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 500);
    }, [])


    if (!loaded) {

        return (
            <Box
                w={'100vw'}
                h={'100vh'}
            >
                <Stack h="100%" align={'center'} justify='center'>
                    <Box display={'block'}>
                        <Spinner
                            size={
                                // '100px'
                                'xl'
                            }
                            color="primary"
                        />
                    </Box>
                    <Box display={'block'}>
                        {/* <LogoMe /> */}
                    </Box>
                </Stack>
            </Box>
        )

    }

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
