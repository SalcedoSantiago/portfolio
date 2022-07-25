/**
 * External dependencies
 */
import { Stack, Link, Text, Box, Image, Heading, Flex, Button, Container } from '@chakra-ui/react';


/**
 * Internal dependencies
 */
import Github from '../../Icons/github';
import Linkedin from '../../Icons/linkedin';
import Email from '../../Icons/email';


/**
 * Internal dependencies
 */

const Footer = () => {


    return (
        <Container maxW={'5xl'} py={'50px'}>
            <Stack textAlign={'center'}>
                <Text
                    color={'gray.300'}
                    fontWeight="500"
                >
                    Thanks for scrolling, that's all folks.
                </Text>

                <Stack direction={'row'} justifyContent={'center'} align='center' spacing={6}>
                    <Box>
                        <Linkedin />
                    </Box>
                    <Box>
                        <Github />
                    </Box>

                    <Box>
                        <Email />
                    </Box>
                </Stack>

                <Text
                    color={'gray.300'}
                    fontWeight="500"
                >
                    Built by Santiago Salcedo
                </Text>
                <Text
                    color={'gray.300'}
                    fontWeight="500"
                >
                    Design inspired by Brittany Chiang's Portfolio
                </Text>
            </Stack>
        </Container>
    )
}

export default Footer
