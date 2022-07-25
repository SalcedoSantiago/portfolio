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


const MainProject = ({ direction = 'r', image, title }) => {
    return (
        <Stack
            direction={'row'}
            spacing={'30px'}
            justifyContent="space-between"
            align={'center'}
            textAlign={direction == 'r' ? 'start' : 'end'}
        >
            {
                direction == 'l' && <ImageProject image={image} />
            }
            <Stack direction={'column'} w="50%">
                <Text
                    color={'primary'}
                    fontSize="lg"
                >
                    Featured Project
                </Text>
                <Heading
                    pt={2}
                    color="gray.300"
                    fontSize={'3xl'}
                    textAlign={direction == 'r' ? 'start' : 'end'}
                    // pt={2}
                    fontWeight={600}
                    fontFamily={"'Inter'"}
                >
                    {title || 'Pokedex App'}
                </Heading>
                <Text
                    color={'gray.300'}
                    fontSize="md"
                    lineHeight={"1.6em"}
                    pb={5}
                    // bgColor='gray.900'
                    // px={3}
                    py={4}
                    borderRadius={3}
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
                direction == 'r' && <ImageProject image={image} />
            }
        </Stack>
    )
}

export default MainProject