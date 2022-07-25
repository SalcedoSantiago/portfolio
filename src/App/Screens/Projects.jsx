/**
 * External dependencies
 */
import React from 'react'
import { Stack, Link, Text, Box, Image, Heading, Flex, Button, Container, Divider } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Github from '../../Icons/github';
import Project from '../Components/Project';
import MainProject from '../Components/MainProject';

/**
 * Internal dependencies
 */



const Projects = () => {
    return (
        <Stack
            py={'120px'}
            direction={'column'}
            spacing={'60px'}
        >
            <Box>

                <Heading
                    px={6}
                    fontFamily={'Inter'}
                    textAlign={'center'}
                    color="white"
                    pb={'60px'}
                    display={'block'}
                    w={'100%'}
                >
                    Latest Projects
                </Heading>
                <Stack
                    direction={'column'}
                    py={6}
                    spacing={'100px'}
                >
                    <MainProject direction='r' />
                    <MainProject direction='l' />
                    <MainProject direction='r' />
                </Stack>
            </Box>

            <Box
                pt={"100px"}
            >
                <Heading
                    textAlign={'center'}
                    py={7}
                    fontSize={'3xl'}
                    color={'gray.300'}
                >
                    Other Noteworthy Projects
                </Heading>

                <Flex
                    wrap={'wrap'}
                    gap={7}
                    py={6}
                >
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />

                </Flex>
            </Box>
        </Stack>
    )
}

export default Projects
