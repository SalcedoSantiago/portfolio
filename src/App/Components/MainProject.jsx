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


const MainProject = ({ direction = 'r', image, desc, title }) => {
    return (
        <Stack
            direction={['column', 'column', 'row']}
            spacing={7}
            justifyContent="space-between"
            align={'center'}
            textAlign={direction == 'r' ? 'start' : 'end'}
        >
            {
                direction == 'l' && <ImageProject image={image} />
            }
            <Stack direction={'column'} w={['100%', '100%', '50%']} order={[2, 2, 0]}>
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
                        {title}
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
                    fontSize="md"
                    // lineHeight={"1.6em"}
                    // pb={5}
                    lineHeight={'25px'}
                    // letterSpacing='0.2px'
                    pb={'20px'}
                >
                    {desc}
                    {/* A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm. */}
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
                direction == 'r' && <ImageProject image={image} />
            }
        </Stack>
    )
}

export default MainProject