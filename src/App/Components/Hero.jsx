/**
 * External dependencies
 */
import React from 'react'
import { Stack, Link, Text, Box, Heading, Image, Flex, Button, Container } from '@chakra-ui/react';

/**
 * League Spartannal dependencies
 */


import Me from '../../assets/yo.png'
import ellipse from '../../assets/ellipse.png'

const Hero = () => {
    return (
        <Stack
            direction={'column'}
            justifyContent={'center'}
            minH={'70vh'}
            flex={1}
        >
            <Stack direction={"row"} spacing={6} align='start' justifyContent={'space-between'}>
                <Box w="60%" py={4}>
                    <Stack direction={'column'} spacing={0}>
                        <Heading
                            as="h1"
                            fontWeight={400}
                            fontSize="4xl"
                            fontFamily="'League Spartan'"
                        >
                            Hello, i am
                        </Heading>
                        <Heading
                            as="h1"
                            fontWeight={700}
                            fontSize="7xl"
                            fontFamily="'League Spartan'"
                        >
                            Santiago Salcedo
                        </Heading>
                        <Heading
                            fontWeight={500}
                            fontSize="4xl"
                            color={'primary'}
                            fontFamily="'League Spartan'"
                        >
                            Front-end Developer
                        </Heading>
                        <Box
                            py={5}
                            color="gray.300"
                            maxW={'500px'}
                        // fontFamily="'League Spartan'"
                        >
                            <Text
                            >
                                i have been working since 2012. i am proficient in ui design, user experience, researcher,
                                <Box color={'secondary'} display='inline' pl="10px">
                                    web development
                                </Box>
                            </Text>
                            <Text>
                                I’m one part marketer and one part word wrangler, often fueled by baked goods and a well-placed Oxford comma.
                            </Text>
                        </Box>
                        <Flex py={6} gap={2}>
                            <Button
                                my={6}
                                py={6}
                                px={6}
                                variant="outline"
                                colorScheme={'green'}
                                color={'primary'}
                                borderRadius={0}
                                lineHeight={1}
                            >
                                Contact me
                            </Button>
                            <Button
                                my={6}
                                py={6}
                                px={6}
                                variant="solid"
                                colorScheme={'green'}
                                borderRadius={0}
                                lineHeight={1}
                            >
                                Donwload cv
                            </Button>
                        </Flex>

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