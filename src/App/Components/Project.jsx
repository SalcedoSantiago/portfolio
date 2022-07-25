/**
 * External dependencies
 */
import React from 'react'
import { Stack, Link, Text, Box, Image, Heading, Flex, Button, Container } from '@chakra-ui/react';
import Github from '../../Icons/github';
import { ExternalLinkIcon } from '@chakra-ui/icons'


/**
 * Internal dependencies
 */

import Image_ from '../../assets/test.jpg'


const Project = () => {
    return (
        <Stack
            w={'calc(33% - 1rem)'}
            direction={'column'}
            bgColor={'gray.700'}
            px={4}
            py={3}
            pb={6}
            rounded="xl"
            shadow={'xl'}
        >
            <Box position={'relative'} cursor="pointer" as="a" href="https://google.com" target={'_blank'}>
                <Image
                    boxSize="100%"
                    src={Image_}
                />
                <Box _hover={{ bgColor: "transparent" }} position={'absolute'} w={'100%'} h="100%" top={0} bgColor="#0c2c043d"></Box>
            </Box>
            <Box
                pl={2}
            >
                <Heading
                    color="secondary"
                    fontSize={'xl'}
                    py={4}
                    fontFamily={"'Space Mono'"}
                >
                    Halcyon Theme
                </Heading>

                <Text
                    fontSize={'sm'}
                    color={'gray.300'}
                    pb={7}
                >
                    A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace.
                </Text>
            
                <Stack direction={'row'} justifyContent='end' align={'center'}>
                    <ExternalLinkIcon />
                    <Github />
                </Stack>
            </Box>
        </Stack>
    )
}

export default Project

