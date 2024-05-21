/**
 * External dependencies
 */
import React from 'react'
import { Stack, Text, Box, Heading, } from '@chakra-ui/react';
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FaGithub } from 'react-icons/fa'
import styled from 'styled-components';

const Project = ({ desc, title, link, repo }) => {



    const Container = styled.a`
        text-decoration: none!important;
        height: 100%;
        width: 100%;
        padding-bottom: 14px;
        &:hover{
            h2{
                color: var(--chakra-colors-primary);
            }
        }
    `

    return (
        <Stack
            w={['100%', '100%', 'calc(33% - 1rem)']}
            direction={'column'}
            bgColor={'gray.700'}
            shadow={'xl'}
            transition="all .2s ease-out"
            cursor={'pointer'}
            _hover={{
                transform: "translateY(-1em)",
                bgColor: 'gray.800'
            }}
            rounded="md"
        >
            <Container
                href={link ? link : repo ? repo : ''}
                target={'_blank'}
            >
                <Box
                    px={6}
                    py={4}
                >
                    <Stack direction={'row'} justifyContent='space-between'>
                        <Heading
                            color="gray.100"
                            fontSize={'2xl'}
                            py={4}
                            fontFamily={"'PT Mono'"}
                            className="custom-heading"
                            textDecoration={'none'}
                        >
                            {title}
                        </Heading>
                        <Stack direction={'row'} justifyContent='end' align={'center'}>
                            {link &&
                                <Box
                                    cursor={'pointer'}
                                    as="a"
                                    href={link}
                                    target={'_blank'}
                                    color="gray.400"
                                    _hover={{
                                        color: 'primary'
                                    }}
                                >
                                    {/* <ExternalLinkIcon /> */}
                                </Box>
                            }


                            {repo &&
                                <Box
                                    cursor={'pointer'}
                                    as="a"
                                    href={repo}
                                    target={'_blank'}
                                    color="gray.400"
                                    _hover={{
                                        color: 'primary'
                                    }}
                                >
                                    <FaGithub />
                                </Box>
                            }
                        </Stack>
                    </Stack>
                    <Text
                        fontSize={'sm'}
                        color={'gray.300'}
                        pb={1}
                    >
                        {desc}
                    </Text>

                </Box>
            </Container>
        </Stack>
    )
}

export default Project

