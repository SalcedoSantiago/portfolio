/**
 * External dependencies
 */
import React, { useRef } from "react";
import {
  Stack,
  Text,
  Box,
  Heading,
  Flex,
  Button,
  Divider,
  Image,
} from "@chakra-ui/react";
import { Element, Link as LinkR } from "react-scroll";
import styled from "styled-components";
import { useGSAP } from "@gsap/react";

/**
 * Internal dependencies
 */
import Me from "../../assets/yo.png";
import { gsap } from "./animations/gsapSetup";
import { SplitChars, SplitWords } from "./animations/SplitText";

const ScrollLink = styled(LinkR)`
  text-decoration: none !important;
  color: var(--chakra-colors-gray-200);
  transition: all 0.2s;
  letter-spacing: inherit;

  &:hover {
    color: var(--chakra-colors-primary);
  }
`;

const Hero = () => {
  const heroRef = useRef(null);
  const imageWrapRef = useRef(null);
  const circleRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-greeting", { y: 50, opacity: 0, duration: 0.9 }, 0.15)
        .from(
          ".hero-subtitle",
          { y: 60, opacity: 0, clipPath: "inset(100% 0% 0% 0%)", duration: 1 },
          0.55
        )
        .from(".hero-desc", { y: 40, opacity: 0, duration: 0.9 }, 0.85)
        .from(".hero-cta", { y: 30, opacity: 0, scale: 0.92, duration: 0.8 }, 1.05)
        .from(
          ".hero-nav-link",
          { y: 25, opacity: 0, stagger: 0.12, duration: 0.7 },
          1.25
        );

      if (imageWrapRef.current) {
        tl.from(
          imageWrapRef.current,
          { x: 100, opacity: 0, scale: 0.85, duration: 1.3, ease: "power3.out" },
          0.4
        );
      }

      if (circleRef.current) {
        tl.from(
          circleRef.current,
          { scale: 0, opacity: 0, duration: 1.1, ease: "elastic.out(1, 0.45)" },
          0.65
        );
      }

      if (imageWrapRef.current && heroRef.current) {
        gsap.to(imageWrapRef.current, {
          y: 70,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    },
    { scope: heroRef }
  );

  return (
    <Element name="home">
      <Stack
        ref={heroRef}
        direction="column"
        justifyContent="center"
        minH={["auto", "auto", "70vh"]}
        pt={["16vh", "16vh", 0]}
      >
        <Stack
          direction={["column", "column", "row"]}
          spacing={6}
          align={["center", "center", "start"]}
          justifyContent="space-between"
        >
          <Box w={["100%", "100%", "60%"]} py={["40px", 10, 4]}>
            <Stack direction="column" spacing={0}>
              <Heading
                className="hero-greeting"
                as="h1"
                fontWeight={600}
                color="gray.300"
                fontSize={["2xl", "2xl", "4xl"]}
              >
                Hello, i am
              </Heading>

              <Heading
                as="h1"
                fontWeight={700}
                fontSize={["5xl", "5xl", "7xl"]}
                lineHeight="1.05"
                mt={1}
              >
                <SplitChars text="Santiago Salcedo" delay={0.35} stagger={0.04} />
              </Heading>

              <Heading
                className="hero-subtitle"
                fontWeight={600}
                fontSize={["2xl", "2xl", "4xl"]}
                color="primary"
                mt={2}
              >
                Full Stack Developer
              </Heading>

              <Box
                className="hero-desc"
                py={5}
                pt={6}
                color="gray.300"
                letterSpacing="0.2px"
                maxW="550px"
                fontSize="18px"
              >
                <Text pb={2}>
                  <SplitWords
                    text="I build scalable WordPress and React solutions, blending solid full stack fundamentals with AI-assisted development to ship faster."
                    delay={0.9}
                    stagger={0.04}
                  />
                </Text>
              </Box>

              <Flex
                className="hero-cta"
                py={2}
                gap={2}
                justifyContent={["center", "center", "start"]}
              >
                <Button
                  my={3}
                  px="50px"
                  variant="primary"
                  borderRadius="3px"
                  fontSize="16px"
                  fontWeight={400}
                  w={["100%", "100%", "auto"]}
                  _hover={{ transform: "scale(1.04)" }}
                  transition="transform 0.25s ease"
                >
                  <ScrollLink to="contact" smooth={true} duration={500}>
                    Get in touch
                  </ScrollLink>
                </Button>
              </Flex>

              <Stack
                direction="row"
                spacing="30px"
                pt={["40px", "40px", 16]}
                justifyContent={["center", "center", "start"]}
              >
                <ScrollLink to="projects" smooth={true} duration={500}>
                  <Box className="hero-nav-link" cursor="pointer" _hover={{ color: "primary" }}>
                    <Heading fontSize={["xl", "xl", "lg"]} pb={2}>
                      Projects
                    </Heading>
                  </Box>
                </ScrollLink>

                <Divider orientation="vertical" h="15px" />
                <ScrollLink to="experience" smooth={true} duration={500}>
                  <Box className="hero-nav-link" cursor="pointer" _hover={{ color: "primary" }}>
                    <Heading fontSize={["xl", "xl", "lg"]} pb={2}>
                      Experience
                    </Heading>
                  </Box>
                </ScrollLink>

                <Divider orientation="vertical" h="15px" />
                <ScrollLink to="about" smooth={true} duration={500}>
                  <Box className="hero-nav-link" cursor="pointer" _hover={{ color: "primary" }} pl={3}>
                    <Heading fontSize={["xl", "xl", "lg"]} pb={2}>
                      About me
                    </Heading>
                  </Box>
                </ScrollLink>
              </Stack>
            </Stack>
          </Box>

          <Box
            ref={imageWrapRef}
            position="relative"
            w={["100%", "100%", "35%"]}
            display={["none", "none", "block"]}
          >
            <Box position="relative" height="400px" width="358px">
              <Image
                boxSize="100%"
                position="relative"
                zIndex={9999}
                borderRadius="9999px"
                objectFit="cover"
                src={Me}
                alt="Santiago Salcedo"
                transition="transform 0.4s ease"
                _hover={{ transform: "scale(1.04)" }}
              />
              <Box
                ref={circleRef}
                width="100%"
                height="350px"
                bgColor="#00B389"
                borderRadius="99999px"
                position="absolute"
                bottom={1}
                left={0}
              />
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Element>
  );
};

export default Hero;
