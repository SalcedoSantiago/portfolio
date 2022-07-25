/**
 * Internal dependencies
 */
import React from 'react'
import { Stack, Text, Box, Image, Heading, Flex, Button, Container, Grid, styled } from '@chakra-ui/react';
import Play from '../../Icons/play';
import Skill from '../Components/Skill';

/**
 * External dependencies
 */

import devs from '../../assets/dev.png'

const About = () => {

    const Libraries = [
        {
            title: 'React',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
            // image: 'https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png'
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



    return (
        <Flex
            py={'120px'}
            justifyContent={'start'}
        >
            <Box
                // maxW='50%'
                maxW={'880px'}
            >
                <Heading
                    fontSize={'5xl'}
                    // color="primary"
                    // fontWeight="500"
                    textAlign={'center'}
                    py={6}
                >
                    About me
                </Heading>
                <Text
                    fontSize={'lg'}
                    letterSpacing='0.2px'
                    py={3}
                >
                    I used to <Box as='span' color="primary">
                        make </Box>make Android applications which can still be found on <Box as='span' color="primary">PlayStore</Box> until 2017. Post that I found web to be more exciting and have shifted my focus to it since then. I have created multiple web applications / websites using different technologies for a vast number of clients.
                </Text>
                <Text
                    py={3}
                    fontSize={'lg'}
                    lineHeight={'35px'}
                >
                    My main focus these days is <Box as='span' color="primary">shipping</Box> great products, becoming a better developer and growing a career in tech.
                </Text>
                <Text
                    fontSize={'lg'}
                    lineHeight={'35px'}
                    py={3}
                >
                    Here are a few technologies I’ve been working with recently:
                </Text>

                {/* <Stack direction={'row'} spacing={'100px'} pt="30px">
                    <Stack >
                        <Heading fontSize={'lg'} fontWeight={500}>Programming Lenguaje</Heading>
                        <Flex gap={3}>
                            <Play />
                            <Text>HTML</Text>
                        </Flex>
                        <Flex gap={3}>
                            <Play />
                            <Text>Css</Text>
                        </Flex>
                        <Flex gap={3}>
                            <Play />
                            <Text>Js</Text>
                        </Flex>
                        <Flex gap={3}>
                            <Play />
                            <Text>Php</Text>
                        </Flex>
                    </Stack>

                    <Stack>
                        <Heading fontSize={'lg'} fontWeight={500}>Libraries & Frameworks</Heading>
                        <Flex gap={3}>
                            <Play />
                            <Text>React</Text>
                        </Flex>
                        <Flex gap={3}>
                            <Play />
                            <Text>Nextjs</Text>
                        </Flex>
                        <Flex gap={3}>
                            <Play />
                            <Text>Chakra</Text>
                        </Flex>
                        <Flex gap={3}>
                            <Play />
                            <Text>Jquery</Text>
                        </Flex>
                        <Flex gap={3}>
                            <Play />
                            <Text>Node</Text>
                        </Flex>
                    </Stack>

                    <Stack>
                        <Heading fontSize={'lg'} fontWeight={500}>Tools & Platforms</Heading>
                        <Flex gap={3}>
                            <Play />
                            <Text>Wordpress</Text>
                        </Flex>
                        <Flex gap={3}>
                            <Play />
                            <Text>Github</Text>
                        </Flex>
                        <Flex gap={3}>
                            <Play />
                            <Text>Webpack</Text>
                        </Flex>
                        <Flex gap={3}>
                            <Play />
                            <Text>NPM</Text>
                        </Flex>
                    </Stack>

                </Stack> */}

            </Box>


        </Flex>
    )
}

export default About