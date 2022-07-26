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

import Pokedex from '../../assets/pokedex.jpg'
import Todo from '../../assets/todo.jpg'



const Projects = () => {
    return (
        <Stack
            py={'120px'}
            direction={'column'}
            spacing={'60px'}
        >
            <Box>
                <Heading
                    fontFamily={'Inter'}
                    textAlign={'center'}
                    color="white"
                    display={'block'}
                    w={'100%'}
                    pb={3}

                >
                    Latest Projects
                </Heading>
                <Text
                    px="90px"
                    textAlign={'center'}
                    pb={'60px'}
                    color="gray.300"
                >
                    This page contains a list of my work, from Design case studies, to experimental hobby projects, to instances when I went ham and to hackathons.
                    This is not fully complete now, but here is a overlook of what I used to get this site up and running.
                </Text>
                <Stack
                    direction={'column'}
                    py={6}
                    spacing={'60px'}
                >
                    <MainProject
                        image={Pokedex}
                        direction='r'
                        title={'Pokedex'}
                    />
                    <MainProject 
                    direction='r'
                    image={Todo}
                    title="Todo"
                    />
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
