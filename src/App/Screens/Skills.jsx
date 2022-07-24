/**
 * External dependencies
 */
import React from 'react'
import { Stack, Link, Text, Box, Image, Heading, Flex, Button, Container, Badge, Divider } from '@chakra-ui/react';


/**
 * Internal dependencies
 */

import Html from '../../Icons/html';
import Skill from '../Components/Skill';


const Skills = () => {


    // Programin lenguaje
    //  - Html,css/sass, js, php 
    // Libraries & Frameworks
    //  - react, nextjs, gatsby, styledCompoents, node, express, jquery
    // Tools & Platforms
    // - Wordpres, Github, Webpack, Firebase






    return (
        <Box
            py={'120px'}
        >
            <Heading>Skills</Heading>
            <Text>Here are a few technologies I've been working with recently:</Text>

            <Stack direction={'column'} py={5} spacing={'35px'}>
                <Box>
                    <Heading
                        color={'slate'}
                        fontSize={'xl'}
                        fontWeight={600}
                        fontFamily={'Inter'}
                        py={4}
                    >Programming Lenguaje</Heading>
                    <Stack direction={'row'} spacing={2}>
                        <Skill
                            text={'Html'}
                            icon={
                                <Html />
                            }
                        />
                        <Skill
                            text={'Css'}
                            icon={
                                <Html />
                            }
                        />
                        <Skill
                            text={'JavaScript (ES6+)'}
                            icon={
                                <Html />
                            }
                        />
                        <Skill
                            text={'PHP'}
                            icon={
                                <Html />
                            }
                        />
                    </Stack>

                </Box>
                <Box>
                    <Heading
                        color={'slate'}
                        fontSize={'xl'}
                        fontWeight={600}
                        fontFamily={'Inter'}
                        py={4}
                    >Programming Lenguaje</Heading>
                    <Stack direction={'row'} spacing={2}>
                        <Skill
                            text={'React'}
                            icon={
                                <Html />
                            }
                        />
                        <Skill
                            text={'Css'}
                            icon={
                                <Html />
                            }
                        />
                        <Skill
                            text={'JavaScript (ES6+)'}
                            icon={
                                <Html />
                            }
                        />
                        <Skill
                            text={'php'}
                            icon={
                                <Html />
                            }
                        />
                    </Stack>

                </Box>

                <Box>
                    <Heading
                        color={'slate'}
                        fontSize={'xl'}
                        fontWeight={600}
                        fontFamily={'Inter'}
                        py={4}
                    >Programming Lenguaje</Heading>
                    <Stack direction={'row'} spacing={2}>
                        <Skill
                            text={'Html'}
                            icon={
                                <Html />
                            }
                        />
                        <Skill
                            text={'Css'}
                            icon={
                                <Html />
                            }
                        />
                        <Skill
                            text={'JavaScript (ES6+)'}
                            icon={
                                <Html />
                            }
                        />
                        <Skill
                            text={'php'}
                            icon={
                                <Html />
                            }
                        />
                    </Stack>

                </Box>
            </Stack>




        </Box>
    )
}

export default Skills
