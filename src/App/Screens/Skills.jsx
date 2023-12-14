/**
 * External dependencies
 */
import React from 'react'
import { Stack, Text, Box, Heading, Flex, } from '@chakra-ui/react';
import { Element } from 'react-scroll'
import Fade from 'react-reveal/Fade';


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
            image: 'https://avatars.githubusercontent.com/u/54212428?s=280&v=4'
        },
        {
            title: 'Bootstrap',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png'
        },
        {
            title: 'Node',
            image: 'https://midu.dev/images/tags/node.png'
        },
        {
            title: 'Jquery',
            image: 'https://blog.kakaocdn.net/dn/cP4qHo/btqCDkoCask/KeloVPIlvZQxDoOHw2x2r0/img.png'
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
            title: 'NPM',
            image: 'https://cdn.iconscout.com/icon/free/png-256/npm-3521612-2945056.png'
        },
    ]


    return (
        <Element
            name='skills'
        >
            <Fade bottom>
                <Box
                    py={'60px'}
                    px={[0, 0, '90px']}
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
                                textAlign={['center', 'center', 'start']}
                            >
                                Programming Lenguaje
                            </Heading>
                            <Flex
                                justifyContent={['center', 'center', 'start']}
                                gap={2}
                                maxW="100%"
                                wrap={'wrap'}
                            >
                                {Lenguaje.map(({ title, image }, index) =>
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
                                textAlign={['center', 'center', 'start']}
                                py={5}
                            >
                                Libraries & Frameworks
                            </Heading>
                            <Flex
                                justifyContent={['center', 'center', 'start']}
                                gap={2}
                                maxW="100%"
                                wrap={'wrap'}
                            >
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
                                textAlign={['center', 'center', 'start']}
                                py={5}
                            >
                                Tools & Platforms
                            </Heading>
                            <Flex
                                justifyContent={['center', 'center', 'start']}
                                gap={2}
                                maxW="100%"
                                wrap={'wrap'}
                            >
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

                </Box >
            </Fade>
        </Element >
    )
}

export default Skills
