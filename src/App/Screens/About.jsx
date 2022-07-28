/**
 * Internal dependencies
 */
import React from 'react'
import { Stack, Text, Box, Image, Heading, Flex, Button, Container, Grid, styled, Divider } from '@chakra-ui/react';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md';
import { Element } from 'react-scroll'

/**
 * External dependencies
 */


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
        <Element
            name="about"
        >

            <Flex
                py={'120px'}
                justifyContent={'center'}
            >
                <Box
                    color="gray.300"
                >
                    <Heading
                        fontSize={'5xl'}
                        // color="primary"
                        // fontWeight="500"
                        color="gray.100"
                        textAlign={'center'}
                        py={6}
                        px={[3, 3, 3]}
                    >
                        About me
                    </Heading>
                    <Box
                        lineHeight={'35px'}
                        letterSpacing='0.2px'
                        maxW={'800px'}
                        fontSize={'18px'}
                        textAlign='center'
                        color="gray.300"
                    >
                        <Text
                            py={2}
                        >
                            I started in the world of development in 2018 or so, and since I met him I have never stopped learn, I have a deep love to learn something new.
                        </Text>
                        <Text
                            py={2}
                        >
                            I don't give up easily and always try to reach my goals.
                            I am currently working on @Quadlayers as a Full Stack Developer.
                            currently i created several applications using different technologies for tried to learn new things
                        </Text>
                        <Text
                            lineHeight={'35px'}
                            py={2}
                        >
                            My current goal is to dedicate myself to the Front End.
                        </Text>
                    </Box>

                    <Stack py={7} mt="50px" direction={'row'} justifyContent={'center'} align='center' spacing={6}>
                        <Box
                            as="a"
                            href='https://wa.me/541125709209?text=Hello!'
                            target={'_blank'}
                            color="gray.400"
                            cursor={'pointer'}
                            fontSize={'24px'}
                            _hover={{
                                color: 'primary'
                            }}
                        >
                            <FaWhatsapp />
                        </Box>
                        <Box
                            as="a"
                            href='https://github.com/SalcedoSantiago'
                            target={'_blank'}
                            color="gray.400"
                            cursor={'pointer'}
                            fontSize={'24px'}
                            _hover={{
                                color: 'primary'
                            }}
                        >
                            <FaGithub />
                        </Box>

                        <Box
                            as="a"
                            href='https://www.linkedin.com/in/santiago-dalmiro-salcedo/'
                            target={'_blank'}
                            color="gray.400"
                            cursor={'pointer'}
                            fontSize={'24px'}
                            _hover={{
                                color: 'primary'
                            }}
                        >
                            <FaLinkedinIn />
                        </Box>

                        <Box
                            cursor={'pointer'}
                            fontSize={'18px'}
                            fontWeight={500}
                            bgColor={'gray.600'}
                            color="gray.400"
                            p={2}
                            href="mailto:santiagosalcedod@gmail.com"
                            px={3}
                            borderRadius="6px"
                            borderWidth="1px"
                            borderColor="gray.900"
                            _hover={{
                                color: 'primary'
                            }}
                        >
                            @ Email Me
                        </Box>
                    </Stack>



                </Box>


            </Flex>
        </Element>
    )
}

export default About