/**
 * External dependencies
 */
import React from 'react'
import { Stack, Text, Box, Heading, Image, Flex, Button, Container, Divider } from '@chakra-ui/react';
import { Element } from 'react-scroll'
import { Link as LinkR } from 'react-scroll'
import styled from 'styled-components';
import { Link } from 'react-scroll'

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
            <Stack
                direction={'column'}
                justifyContent={'center'}
                minH={'75vh'}
                flex={1}
            >
                <Stack direction={"row"} spacing={6} align='start' justifyContent={'space-between'}>
                    <Box w="60%" py={4}>
                        <Stack direction={'column'} spacing={0}>
                            <Heading
                                as="h1"
                                fontWeight={600}
                                color="gray.300"
                                fontSize="4xl"
                            >
                                Hello, i am
                            </Heading>
                            <Heading
                                as="h1"
                                fontWeight={700}
                                fontSize="7xl"
                            >
                                Santiago Salcedo
                            </Heading>
                            <Heading
                                fontWeight={600}
                                fontSize="4xl"
                                color={'primary'}
                            >
                                Front-end Developer
                            </Heading>
                            <Box
                                py={5}
                                pt={6}
                                color="gray.300"
                                letterSpacing='0.2px'
                                maxW={'550px'}
                                fontSize="18px"
                            >
                                <Text pb={2}>
                                    I have been working since 2018. i am proficient in programing, <Box as="span" color="primary"> web development</Box>
                                </Text>
                            </Box>

                            <Flex py={2} gap={2}>
                                <Button
                                    my={3}
                                    px={'50px'}
                                    variant="primary"
                                    borderRadius={'3px'}
                                    transition="all 0.2s ease"
                                    fontSize="16px"
                                    fontWeight={400}
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
                            <Stack direction={'row'} spacing="30px" pt={20}>
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
                                            fontSize="lg"
                                            pb={2}
                                        >Projects</Heading>
                                        <Text
                                            fontSize="xs"
                                            color="gray.300"
                                        >
                                            Mobile application desing <br />
                                            Website design <br />
                                            Logo & Branding design.
                                        </Text>
                                    </Box>
                                </Link>

                                <Divider orientation='vertical' h="80px" />
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
                                            fontSize="lg"
                                            pb={2}
                                        >About me</Heading>
                                        <Text
                                            fontSize="xs"
                                            color="gray.300"
                                        >
                                            Mobile application desing <br />
                                            Website design <br />
                                            Logo & Branding design.
                                        </Text>
                                    </Box>
                                </Link>

                            </Stack>
                        </Stack>
                    </Box>
                    <Box position={'relative'} w="35%">
                        <Image
                            boxSize={'100%'}
                            position={'relative'}
                            zIndex={9999}
                            borderRadius="9999"
                            src={Me}
                        />
                        <Box
                            width={'350px'}
                            height={'350px'}
                            bgColor={'#00B389'}
                            borderRadius={99999}
                            position={'absolute'}
                            bottom={1}
                            left={0}
                        >
                        </Box>
                    </Box>
                </Stack>
            </Stack>
        </Element>
    )
}

export default Hero