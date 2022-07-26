/**
 * External dependencies
 */
import React from 'react'
import { Stack, Link, Text, Box, Image, Heading, Flex, Button, Container, Divider } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Github from '../../Icons/github';
import Project from '../Components/Project';
import MainProject from '../Components/MainProject';
import { Element } from 'react-scroll'

/**
 * Internal dependencies
 */

import Pokedex from '../../assets/pokedex.jpg'
import Todo from '../../assets/todo.jpg'



const Projects = () => {
    return (
        <Element
            name='projects'
        >
            <Stack
                py={'120px'}
                direction={'column'}
                spacing={'60px'}
            >
                <Box>
                    <Heading
                        display={'block'}
                        w={'100%'}
                        pb={3}
                        fontSize={'5xl'}
                        color="gray.100"
                        textAlign={'center'}
                    >
                        Latest Projects
                    </Heading>
                    <Text
                        lineHeight={'35px'}
                        letterSpacing='0.2px'
                        fontSize={'18px'}
                        textAlign='center'
                        color="gray.300"
                        pb={'80px'}
                        pt={3}
                        px={'50px'}
                    >
                        This page contains a list of my work, from Design case studies, to experimental hobby projects, to instances when I went ham and to hackathons.
                        This is not fully complete now, but here is a overlook of what I used to get this site up and running.
                    </Text>
                    <Stack
                        direction={'column'}
                        py={6}
                        spacing={'50px'}
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
                        pb={'40px'}
                        fontSize={'4xl'}
                        color="gray.200"
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
        </Element>
    )
}

export default Projects
