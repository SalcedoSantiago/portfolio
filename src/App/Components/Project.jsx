/**
 * External dependencies
 */
import React from 'react'
import { Stack, Link, Text, Box, Image, Heading, Flex, Button, Container, Badge } from '@chakra-ui/react';
import Github from '../../Icons/github';
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Project = ({ image }) => {


    return (
        <Stack
            as="a"
            href='https://www.google.com'
            target={'_blank'}
            w={'calc(33% - 1rem)'}
            direction={'column'}
            bgColor={'gray.700'}
            textDecoration="none"
            pb={6}
            // rounded="xl"
            shadow={'xl'}
            transition="all .2s ease-out"
            cursor={'pointer'}
            _hover={{
                transform: "translateY(-1em)"
            }}
        >
            {
                image && <Image
                    src={image}
                />
            }
            <Box
                px={5}
                py={3}
            >

                <Stack direction={'row'} justifyContent='space-between'>

                    <Heading
                        color="primary"
                        fontSize={'2xl'}
                        // fontWeight={600}
                        py={4}
                        fontFamily={"'PT Mono'"}
                    >
                        Halcyon Theme
                    </Heading>
                    <Stack direction={'row'} justifyContent='end' align={'center'}>
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
                <Text
                    fontSize={'sm'}
                    color={'white'}
                    pb={7}
                >
                    A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace.
                </Text>
                <Stack direction={'row'}>
                    <Badge colorScheme={'blue'}>html</Badge>
                    <Badge colorScheme={'blue'}>css</Badge>
                    <Badge colorScheme={'blue'}>JS</Badge>
                </Stack>
            </Box>
        </Stack>
    )
}

export default Project

