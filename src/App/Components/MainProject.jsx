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
                <Heading
                    pt={2}
                    color="primary"
                    fontSize={'3xl'}
                    textAlign={direction == 'r' ? 'start' : 'end'}
                    // pt={2}
                    fontWeight={600}
                    fontFamily={"'Inter'"}
                >
                    Pokedex App
                </Heading>

                <Text
                    fontSize={'sm'}
                    pb={4}
                    color={'gray.400'}
                >
                    Website, App
                </Text>
                <Text
                    color={'gray.200'}
                    fontSize="sm"
                    lineHeight={"1.6em"}
                    pb={5}

                >
                    A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
                </Text>

                <Stack
                    direction={'row'}
                    align={'center'}
                    pt={4}
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