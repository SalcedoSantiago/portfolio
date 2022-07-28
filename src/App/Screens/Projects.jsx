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
import Store from '../../assets/store.jpg'


const Projects = () => {

    const mainProjects = [
        {
            title: 'Pokedex',
            image: Pokedex,
            desc: 'Pokedex app is an application that consumes the pokeapi api, it shows more than 900 pokemons, it allows you to select the pokemons and see what their main characteristics are.'
        },
        {
            title: 'Todo App',
            image: Todo,
            desc: 'TodoApp is an application made in react, which is designed to make task lists. allows you to edit and move each one. It also allows you to customize the colors of each "card".'
        },
        {
            title: 'Store App',
            image: Store,
            desc: 'It is a store, which allows you to simulate purchases of paintings, it has a cart that has to edit the quantity that is going to be purchased, it also contains filters that allow you to order them from lower and higher prices.'
        }
    ]

    const miniProjects = [
        {
            title: 'Store Coder',
            desc: 'is a store created for the coderhouse course,the store has pages and products.it is made with html, css, scss, and js.',
            link: 'https://salcedosantiago.github.io/store-coder/',
            repo: 'https://github.com/SalcedoSantiago/store-coder'
        },
        {
            title: 'Travel',
            desc: 'Travel is a landing page designed by https://www.arshakir.com/ this page was made with react, chakra ui and styledComponents.',
            link: '',
            repo: 'https://github.com/SalcedoSantiago/travel'
        },
        {
            title: 'Portfolio v1',
            desc: 'this was my first portfolio, i created it in 2019 and it was my beginnings in web development was created with html, js, jquery & css',
            link: 'https://salcedosantiago.github.io/Mi-portafolio/',
            repo: 'https://github.com/SalcedoSantiago/Mi-portafolio'
        },
        {
            title: 'Blog cafe',
            desc: 'It was a project that Juan Pablo De la Torre Valdez included in the web development course.',
            link: 'https://salcedosantiago.github.io/blog-cafe/',
            repo: 'https://github.com/SalcedoSantiago/blog-cafe'
        },
        {
            title: 'Freelancer',
            desc: 'It was a project that Juan Pablo De la Torre Valdez included in the web development course.',
            link: 'https://salcedosantiago.github.io/freelancer/',
            repo: 'https://github.com/SalcedoSantiago/freelancer'
        },
        {
            title: 'Frontend',
            desc: 'It was a project that Juan Pablo De la Torre Valdez included in the web development course.',
            link: 'https://salcedosantiago.github.io/frontend/',
            repo: 'https://github.com/SalcedoSantiago/frontend'
        },
        {
            title: 'Bienes Raices',
            desc: 'It was a project that Juan Pablo De la Torre Valdez included in the web development course.',
            link: 'https://salcedosantiago.github.io/bienes-raices/',
            repo: 'https://github.com/SalcedoSantiago/bienes-raices'
        },
        {
            title: 'Viajes',
            desc: 'It was a project that Juan Pablo De la Torre Valdez included in the web development course.',
            link: 'https://salcedosantiago.github.io/viajes/',
            repo: 'https://github.com/SalcedoSantiago/viajes'
        },
    ]



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
                        maxW='800px'
                        mx="auto"
                        px={'50px'}
                    >
                        Here is the list of projects I do personally. from the new to the old. most were created to learn technologies and tools new.
                    </Text>
                    <Stack
                        direction={'column'}
                        py={6}
                        spacing={'50px'}
                    >
                        {mainProjects.map(({ title, desc, image }) =>
                            <MainProject
                                image={image}
                                direction='r'
                                desc={desc}
                                title={title}
                            />
                        )}
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
                        px={['40px', '40px', 0]}
                    >
                        {
                            miniProjects.map(({ title, desc, link, repo }, index) =>
                                <Project
                                    key={index}
                                    title={title}
                                    link={link}
                                    desc={desc}
                                    repo={repo}
                                />
                            )
                        }
                    </Flex>
                </Box>
            </Stack>
        </Element>
    )
}

export default Projects
