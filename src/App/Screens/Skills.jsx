/**
 * External dependencies
 */
import React from 'react'
import { Stack, Text, Box, Image, Heading, Flex, Button, Container, Badge, Divider } from '@chakra-ui/react';
import { Element } from 'react-scroll'


/**
 * Internal dependencies
 */

import Skill from '../Components/Skill';


const Skills = () => {
    const Lenguaje = [
        {
            title: 'HTML',
            image: 'https://cdn-icons-png.flaticon.com/512/732/732212.png'
        },
        {
            title: 'CSS',
            image: 'https://cdn-icons-png.flaticon.com/512/732/732190.png'
        },
        {
            title: 'SCSS',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png'
        },
        {
            title: 'JavaScript',
            image: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png'
        },
        {
            title: 'PHP',
            image: 'https://cdn-icons-png.flaticon.com/512/5968/5968332.png'
        }
    ];

    const Libraries = [
        {
            title: 'React',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
        },
        {
            title: 'Nextjs',
            image: 'https://cdn.aglty.io/bwql7jyk/Attachments/NewItems/image_20211214122557_0.png'
        },
        {
            title: 'Chakra',
            image: 'https://cdn.aglty.io/bwql7jyk/Attachments/NewItems/image_20211214122557_0.png'
        },
        {
            title: 'Bootstrap',
            image: 'https://cdn.aglty.io/bwql7jyk/Attachments/NewItems/image_20211214122557_0.png'
        },
        {
            title: 'Node',
            image: 'https://cdn-icons-png.flaticon.com/512/919/919825.png'
        },
        {
            title: 'Express',
            image: 'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png'
        },
        {
            title: 'Jquery',
            image: 'https://estebanguido.com/img/jquery.png'
        },
    ]

    const Tools = [
        {
            title: 'Wordpress',
            image: 'https://cdn-icons-png.flaticon.com/512/174/174881.png'
        },
        {
            title: 'Github',
            image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
        },
        {
            title: 'Webpack',
            image: 'https://seeklogo.com/images/W/webpack-logo-9E66EE203A-seeklogo.com.png'
        },
        {
            title: 'Firebase',
            image: 'https://valeriabe.github.io/Portafolio/img/f.png'
        },
        {
            title: 'NPM',
            image: 'https://cdn.iconscout.com/icon/free/png-256/npm-3521612-2945056.png'
        },
    ]


    return (
        <Element
            name='skills'
        >
            <Box
                py={'60px'}
                px={'90px'}
            >
                {/* <Divider /> */}
                <Heading
                    fontSize={'5xl'}
                    color="gray.100"
                    textAlign={'center'}
                >Skills</Heading>
                {/* <Divider /> */}
                <Text
                    lineHeight={'35px'}
                    letterSpacing='0.2px'
                    fontSize={'18px'}
                    textAlign='center'
                    color="gray.300"
                    pb={'20px'}
                    pt={3}
                >
                    Here are a few technologies I've been working with recently:
                </Text>

                <Stack direction={'column'} py={3} spacing={'35px'}>
                    <Box>
                        <Heading
                            color={'gray.200'}
                            fontSize={'xl'}
                            fontWeight={600}
                            py={5}
                        >
                            Programming Lenguaje
                        </Heading>
                        <Stack direction={'row'} spacing={2}>
                            {Lenguaje.map(({ title, image }, index) =>
                                <Skill
                                    key={index}
                                    text={title}
                                    image={image}
                                />

                            )}
                        </Stack>
                    </Box>
                </Stack>


                <Stack direction={'column'} py={3} spacing={'35px'}>
                    <Box>
                        <Heading
                            color={'gray.200'}
                            fontSize={'xl'}
                            fontWeight={600}
                            py={5}
                        >
                            Libraries & Frameworks
                        </Heading>
                        <Flex direction={'row'} gap={2} wrap={'wrap'} >
                            {Libraries.map(({ title, image }, index) =>
                                <Skill
                                    key={index}
                                    text={title}
                                    image={image}
                                />
                            )}
                        </Flex>
                    </Box>
                </Stack>
                <Stack direction={'column'} py={3} spacing={'35px'}>
                    <Box>
                        <Heading
                            color={'gray.200'}
                            fontSize={'xl'}
                            fontWeight={600}
                            py={5}
                        >
                            Tools & Platforms
                        </Heading>
                        <Flex direction={'row'} gap={2} wrap={'wrap'} >
                            {Tools.map(({ title, image }, index) =>
                                <Skill
                                    key={index}
                                    text={title}
                                    image={image}

                                />

                            )}
                        </Flex>
                    </Box>
                </Stack>

            </Box>
        </Element>
    )
}

export default Skills
