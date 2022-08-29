/**
 * External dependencies
 */
import React from 'react'
import { Stack, Text, Box, Heading, Image, Flex, Button, Divider, Skeleton } from '@chakra-ui/react';
import { Element } from 'react-scroll'
import { Link as LinkR } from 'react-scroll'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

/**
 * League Spartannal dependencies
 */

import Me from '../../assets/yo.png'

const Hero = () => {


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
        <Element
            name="home"
        >
            <Fade bottom>

                <Stack
                    direction={'column'}
                    justifyContent={'center'}
                    minH={['auto', 'auto', '75vh']}
                    pt={['20vh', '20vh', 0]}
                >
                    <Stack direction={['column', 'column', 'row']} spacing={6} align={['center', 'center', 'start']} justifyContent={'space-between'}>
                        <Box w={['100%', '100%', "60%"]} py={['70px', 10, 4]}>
                            <Stack direction={'column'} spacing={0}>
                                <Heading
                                    as="h1"
                                    fontWeight={600}
                                    color="gray.300"
                                    textAlign={[
                                        'centstarter',
                                        'start',
                                        'start'
                                    ]}
                                    fontSize={['2xl', '2xl', '4xl']}
                                >
                                    Hello, i am
                                </Heading>
                                <Heading
                                    as="h1"
                                    fontWeight={700}
                                    fontSize={['5xl', '5xl', '7xl']}
                                    textAlign={[
                                        'start',
                                        'start',
                                        'start'
                                    ]}
                                >
                                    Santiago Salcedo
                                </Heading>
                                <Heading
                                    fontWeight={600}
                                    fontSize={['2xl', '2xl', '4xl']}
                                    color={'primary'}
                                    textAlign={[
                                        'start',
                                        'start',
                                        'start'
                                    ]}
                                >
                                    Front-end Developer
                                </Heading>
                                <Box
                                    py={5}
                                    pt={6}
                                    color="gray.300"
                                    letterSpacing='0.2px'
                                    maxW={'550px'}
                                    textAlign={[
                                        'start',
                                        'start',
                                        'start'
                                    ]}
                                    fontSize="18px"
                                >
                                    <Text pb={2}>
                                        I'm a <Box as="span" color="primary">Full stack Web Developer</Box> 
                                       . I love working on the web
                                    </Text>
                                </Box>

                                <Flex
                                    py={2}
                                    gap={2}
                                    justifyContent={['center', 'center', 'start']}
                                >
                                    <Button
                                        my={3}
                                        px={'50px'}
                                        variant="primary"
                                        borderRadius={'3px'}
                                        transition="all 0.2s ease"
                                        fontSize="16px"
                                        fontWeight={400}
                                        w={['100%', '100%', 'auto']}

                                    >
                                        <Link
                                            to={'contact'}
                                            smooth={true}
                                            duration={500}
                                        >
                                            Get in touch
                                        </Link>
                                    </Button>
                                </Flex>
                                <Stack
                                    direction={'row'}
                                    spacing="30px"
                                    pt={['70px', '70px', 20]}
                                    justifyContent={['center', 'center', 'start']}
                                >
                                    <Link
                                        to="projects"
                                        smooth={true}
                                        duration={500}
                                    >
                                        <Box
                                            cursor="pointer"
                                            _hover={{
                                                color: 'primary'
                                            }}
                                        >
                                            <Heading
                                                fontSize={['xl', 'xl', 'lg']}
                                                pb={2}
                                            >Projects</Heading>

                                        </Box>
                                    </Link>

                                    <Divider orientation='vertical' h="15px" />
                                    <Link
                                        to="about"
                                        smooth={true}
                                        duration={500}
                                    >
                                        <Box
                                            cursor="pointer"
                                            _hover={{
                                                color: 'primary'
                                            }}
                                            pl={3}
                                        >
                                            <Heading
                                                fontSize={['xl', 'xl', 'lg']}
                                                pb={2}
                                            >About me</Heading>

                                        </Box>
                                    </Link>

                                </Stack>
                            </Stack>
                        </Box>
                        <Box
                            position={'relative'}
                            w={['100%', '100%', "35%"]}
                            opacity={[0, 0, 1]}
                            display={['none', 'none', 'block']}
                        >
                            <Box
                                position={'relative'}
                                height="400px"
                                width="358px"
                            >
                                <Image
                                    boxSize={'100%'}
                                    position={'relative'}
                                    zIndex={9999}
                                    display={['none', 'none', 'block']}
                                    borderRadius="9999"
                                    src={Me}
                                // width="100%"
                                // height="auto"
                                />
                                <Box
                                    width="100%"
                                    height={'350px'}
                                    bgColor={'#00B389'}
                                    borderRadius={99999}
                                    position={'absolute'}
                                    bottom={1}
                                    left={0}
                                >
                                </Box>
                            </Box>


                        </Box>
                    </Stack>
                </Stack>
            </Fade>
        </Element>
    )
}

export default Hero