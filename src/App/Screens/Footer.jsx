/**
 * External dependencies
 */
import { Stack, Link, Text, Box, Image, Heading, Flex, Button, Container, Divider } from '@chakra-ui/react';


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
                    lineHeight={'35px'}
                    letterSpacing='0.2px'
                    fontSize={'18px'}
                    textAlign='center'
                    pb={'20px'}
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
                    lineHeight={'35px'}
                    letterSpacing='0.2px'
                    fontSize={'18px'}
                    textAlign='center'
                    pt={3}
                    cursor="pointer"
                    transition={'al .2s '}
                >
                    Built by <Box as="a" color="primary">Santiago Salcedo</Box>
                </Text>
                <Text
                    color={'gray.300'}
                    fontWeight="500"
                    lineHeight={'35px'}
                    letterSpacing='0.2px'
                    fontSize={'18px'}
                    textAlign='center'
                    pb={'20px'}
                    cursor="pointer"
                    transition={'al .2s '}
                >
                    Design inspired by <Box as="a" color="primary"> Brittany Chiang's </Box> Portfolio
                </Text>
            </Stack>
        </Container>
    )
}

export default Footer
