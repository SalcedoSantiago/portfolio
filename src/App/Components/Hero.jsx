/**
 * External dependencies
 */
import React from 'react'
import { Stack, Link, Text, Box, Heading, Image, Flex, Button, Container } from '@chakra-ui/react';

/**
 * Internal dependencies
 */


import Me from '../../assets/yo.png'
import ellipse from '../../assets/ellipse.png'

const Hero = () => {
    return (
        <Stack
            direction={'column'}
            justifyContent={'center'}
            minH={'80vh'}
            flex={1}
        >
            <Stack direction={"row"} spacing={6} align='center' >
                <Box w="70%" py={4}>
                    <Stack direction={'column'} spacing={3}>
                        <Heading
                            as="h1"
                            fontWeight={400}
                            fontSize="3xl"
                            fontFamily="'Space Mono'"
                        >
                            Hello, i am
                        </Heading>
                        <Heading
                            as="h1"
                            fontWeight={700}
                            fontSize="5xl"
                            fontFamily="'Space Mono'"
                        >
                            Santiago Salcedo
                        </Heading>
                        <Heading
                            fontWeight={500}
                            fontSize="3xl"
                            color={'primary'}
                            fontFamily="'Space Mono'"
                        >
                            Front-end Developer
                        </Heading>

                        <Text
                            py={5}
                            color="gray.300"
                            maxW={'500px'}
                        >
                            i have been working since 2012. i am proficient in ui design, user experience, researcher, web development
                        </Text>
                        <Flex py={6}>
                            <Button
                                my={6}
                                py={6}
                                px={6}
                                variant="outline"
                                colorScheme={'green'}
                                color={'primary'}
                                borderRadius={0}
                                rounded="xl"
                                lineHeight={1}
                            >
                                Donwload Cv
                            </Button>
                        </Flex>

                    </Stack>
                </Box>
                <Box position={'relative'}>
                    <Image
                        position={'relative'}
                        zIndex={9999}
                        borderRadius="9999"
                        src={Me}
                    />
                    <Image
                        src={ellipse}
                        position={'absolute'}
                        bottom={'0'}
                        left={0}
                    />

                </Box>
            </Stack>
        </Stack>
    )
}

export default Hero