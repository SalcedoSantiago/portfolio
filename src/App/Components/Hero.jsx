/**
 * External dependencies
 */
import React from 'react'
import { Stack, Link, Text, Box, Heading, Image, Flex, Button, Container } from '@chakra-ui/react';
import { Element } from 'react-scroll'

/**
 * League Spartannal dependencies
 */


import Me from '../../assets/yo.png'


const Hero = () => {

    // const Text = styled(ChakraText)`
    //     word-spacing: 1.7px;
    //     color: var(--chakra-colors-gray-400);
    //     letter-spacing: 0.7px;
    //     font-weight: 400;
    //     font-size: 18px;
    //     .featured{
    //         color :var(--chakra-colors-primary)
    //     }
    // `

    // color = "gray.400"
    // fontSize = "18px"
    // lineHeight = { '1.3'}
    // wordSpacing = { '1.7px'}
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
                                    Get in touch
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