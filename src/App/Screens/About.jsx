/**
 * Internal dependencies
 */
import React from 'react'
import { Stack, Text, Box, Image, Heading, Flex, Button, Container } from '@chakra-ui/react';
import Play from '../../Icons/play';

/**
 * External dependencies
 */

const About = () => {

    return (
        <Box py={"120px"}>
            <Stack
                direction={'row'}
                justifyContent="center"
                spacing={'60px'}
            >
                <Box>
                    <Image src='https://bit.ly/dan-abramov' alt='Santiago Salcedo' />
                </Box>
                <Box maxW={'600px'}>
                    <Heading>
                        About me
                    </Heading>
                    <Text>
                        I graduated from Wilson College with a degree in Computer
                        Science and I am passionate about the web and I've been
                        creating things for the web since past 5 years.
                    </Text>
                    <Text>
                        Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                    </Text>
                    <Button>Download cv</Button>
                    <Button>Hire me</Button>
                    {/* <Text>Here are a few technologies I've been working with recently:</Text> */}
                </Box>
            </Stack>
        </Box>
    )
}

export default About