/**
 * External dependencies
 */
import React from 'react'
import { Stack as Stack, Link, Text, Box, Image, Heading, Flex, Button, Container, Badge } from '@chakra-ui/react';
import Github from '../../Icons/github';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import styled from 'styled-components';

const Project = ({ desc, title, link, repo }) => {

    return (
        <Stack
            as="a"
            href={link ? link : repo ? repo : ''}
            target={'_blank'}
            w={'calc(33% - 1rem)'}
            direction={'column'}
            bgColor={'gray.700'}
            textDecoration="none"
            pb={6}
            shadow={'xl'}
            transition="all .2s ease-out"
            cursor={'pointer'}
            _hover={{
                transform: "translateY(-1em)"
            }}
            rounded="md"
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
                                <ExternalLinkIcon />
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
                                <Github />
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
        </Stack>
    )
}

export default Project

