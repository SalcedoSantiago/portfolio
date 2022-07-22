/**
 * External dependencies
 */
import React from 'react'
import { Stack, Link, Text, Box, Heading, Image, Flex, Button, Container } from '@chakra-ui/react';

/**
 * Internal dependencies
 */

const Hero = () => {
    return (
        <Stack
            direction={'column'}
            justifyContent={'center'}
            minH={'80vh'}
            flex={1}
        >
            <Stack direction={"column"} spacing={1}>
                <Heading
                    as="h2"
                    fontSize={'xl'}
                    fontWeight={500}
                    color={'primary'}
                >Hi, my name is</Heading>
                <Heading
                    as="h1"
                    fontSize={'clamp(40px, 8vw, 72px)'}
                    letterSpacing="tight"
                >Santiago Salcedo</Heading>
                <Heading
                    as="h1"
                    fontSize={'clamp(40px, 8vw, 72px)'}
                    color="slate"
                    letterSpacing="tight"
                >I'm Front-end Developer</Heading>

                <Box maxW={'600px'} pt={3}>
                    <Text
                        fontWeight={400}
                        // letterSpacing="wide"
                        // fontSize={}
                        // color="w"
                        lineHeight={'tall'}
                    >
                        I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at Upstatement.
                    </Text>
                    <Button
                        my={6}
                        variant="outline"
                        colorScheme={'green'}
                        color={'primary'}
                        borderRadius={0}
                        rounded="none"
                        lineHeight={1}
                    >
                        Get in Contact!
                    </Button>
                </Box>
            </Stack>
        </Stack>
    )
}

export default Hero