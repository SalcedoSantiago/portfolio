/**
 * External dependencies
 */
import { Stack, Link, Text, Box, Heading, Flex, Button, Container } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
/**
 * Internal dependencies
 */
import Github from '../../Icons/github';
import ImageProject from './project/Image'


const MainProject = ({ direction = 'r' }) => {
    return (
        <Stack
            direction={'row'}
            spacing={7}
            justifyContent="space-between"
            align={'center'}
            textAlign={direction == 'r' ? 'start' : 'end'}
        >
            {
                direction == 'l' && <ImageProject />
            }
            <Stack direction={'column'} w="50%">
                <Box
                    as="a"
                    href="htpps://www.google.com"
                    target="_blank"
                >
                    <Heading
                        pt={2}
                        color="gray.200"
                        fontSize={'3xl'}
                        textAlign={direction == 'r' ? 'start' : 'end'}
                        fontWeight={600}
                        fontFamily={"'PT Mono'"}
                        _hover={{
                            color: 'primary'
                        }}
                    >
                        Pokedex App
                    </Heading>
                </Box>

                <Text
                    fontSize={'sm'}
                    pb={2}
                    color={'gray.500'}
                >
                    Website, App
                </Text>
                <Text
                    color={'gray.300'}
                    fontSize="sm"
                    // lineHeight={"1.6em"}
                    // pb={5}
                    lineHeight={'35px'}
                    letterSpacing='0.2px'
                    pb={'20px'}
                >
                    A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
                </Text>

                <Stack
                    direction={'row'}
                    align={'center'}
                    pt={2}
                    justifyContent={direction == 'r' ? 'start' : 'end'}
                >
                    <Box
                        cursor={'pointer'}
                        as="a"
                        href='https://www.google.com'
                        target={'_blank'}
                        color="gray.400"
                        _hover={{
                            color: 'primary'
                        }}
                    >
                        <ExternalLinkIcon />
                    </Box>
                    <Box
                        cursor={'pointer'}
                        as="a"
                        href='https://www.google.com'
                        target={'_blank'}
                        color="gray.400"
                        _hover={{
                            color: 'primary'
                        }}
                    >
                        <Github />
                    </Box>
                </Stack>
            </Stack>

            {
                direction == 'r' && <ImageProject />
            }
        </Stack>
    )
}

export default MainProject