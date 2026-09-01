/**
 * External dependencies
 */
import React, { useState, useEffect } from "react";
import { Box, Container, Link } from "@chakra-ui/react";

/**
 * Internal dependencies
 */
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import StickyLeft from "../Components/StickyLeft";
import StickyRight from "../Components/StickyRight";
import Hero from "../Components/Hero";
import LoadingScreen from "../Components/LoadingScreen";
import BackgroundOrbs from "../Components/animations/BackgroundOrbs";
import { ScrollTrigger } from "../Components/animations/gsapSetup";

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
    <Box minH="100vh" position="relative">
      <Link
        href="#main-content"
        position="absolute"
        left="16px"
        top="16px"
        zIndex={9999}
        bg="primary"
        color="gray.900"
        px={4}
        py={2}
        fontWeight={600}
        borderRadius="md"
        transform="translateY(-200%)"
        transition="transform 0.2s"
        _focus={{
          transform: "translateY(0)",
          outline: "2px solid",
          outlineColor: "white",
          outlineOffset: "2px",
        }}
      >
        Skip to main content
      </Link>

      <BackgroundOrbs />
      <Box position="relative" zIndex={1}>
        <Header />
        <Box as="main" id="main-content" tabIndex={-1} outline="none">
          <Container maxW="5xl" px={["40px", "40px", 0]}>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </Container>
        </Box>
        <StickyLeft />
        <StickyRight />
        <Footer />
      </Box>
    </Box>
  );
};

export default App;
