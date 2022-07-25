/**
 * Internal dependencies
 */
import React from 'react'
import { Stack, Text, Box, Image, Heading, Flex, Button, Container, Grid, styled, Divider } from '@chakra-ui/react';
import Play from '../../Icons/play';
import Skill from '../Components/Skill';

/**
 * External dependencies
 */

import devs from '../../assets/dev.png'
import Linkedin from '../../Icons/linkedin';
import Github from '../../Icons/github';
import Email from '../../Icons/email';

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
                color="gray.300"
            >
                <Heading
                    fontSize={'5xl'}
                    // color="primary"
                    // fontWeight="500"
                    color="gray.100"
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
                    Currently I'm a UI Developer @ Media.net where I work on various applications under Forbes, primarily on Advisor (US and UK), Wheels, Homes and Health WordPress applications.
                </Text>

                <Stack py={7} mt="20px" direction={'row'} justifyContent={'center'} align='center' spacing={6}>
                    <Box
                        color="gray.300"
                    >
                        <Linkedin />
                    </Box>
                    <Box
                        color="gray.300"
                    >
                        <Github />
                    </Box>

                    <Box
                        color="gray.300"
                    >
                        <Email />
                    </Box>
                    <Box cursor={'pointer'} fontWeight={600} bgColor={'gray.600'} color="gray.300" p={2} px={3} borderRadius="6px" borderWidth="1px" borderColor="gray.900">
                        @ Email Me
                    </Box>
                </Stack>

            </Box>


        </Flex>
    )
}

export default About