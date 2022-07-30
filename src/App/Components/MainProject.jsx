/**
 * External dependencies
 */
import { Stack, Text, Box, Heading, } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FaGithub } from 'react-icons/fa'
/**
 * Internal dependencies
 */
// import Github from '../../Icons/github';
import ImageProject from './project/Image'
import styled from 'styled-components';


const MainProject = ({ direction = 'r', image, desc, title, url, repo }) => {


    const urlSIte = url ? url : repo ? repo : 'https://www.google.com';


    const HeadingA = styled.a`
        text-decoration: none!important;
        transition: all .2s;


        &:hover{
            transform: scale(1.02);
            .main-heading{
             color:var(--chakra-colors-primary);
            }
        }
    `;



    return (

        <HeadingA
            href={urlSIte}
            target="_blank"
        >
            <Stack
                direction={['column', 'column', 'row']}
                spacing={7}
                justifyContent="space-between"
                align={'center'}
                textAlign={direction === 'r' ? 'start' : 'end'}
            >
                {
                    direction === 'l' && <ImageProject image={image} url={urlSIte} />
                }
                <Stack direction={'column'} w={['100%', '100%', '50%']} order={[2, 2, 0]}>
                    <Heading
                        className='main-heading'
                        pt={2}
                        color="gray.200"
                        fontSize={'3xl'}
                        textAlign={direction === 'r' ? 'start' : 'end'}
                        fontWeight={600}
                        fontFamily={"'PT Mono'"}
                        _hover={{
                            color: 'primary'
                        }}
                    >
                        {title}
                    </Heading>

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
                        lineHeight={'25px'}
                        pb={'20px'}
                    >
                        {desc}
                    </Text>

                    <Stack
                        direction={'row'}
                        align={'center'}
                        pt={2}
                        justifyContent={direction === 'r' ? 'start' : 'end'}
                        spacing={6}
                    >
                        <Box
                            as="a"
                            target={'_blank'}
                            color="gray.400"
                            href={urlSIte}
                            cursor={'pointer'}
                            fontSize={'24px'}
                            _hover={{
                                color: 'primary'
                            }}
                        >
                            <ExternalLinkIcon />
                        </Box>
                        {
                            repo &&
                            <Box
                                as="a"
                                href={repo}
                                target={'_blank'}
                                color="gray.400"
                                cursor={'pointer'}
                                fontSize={'24px'}
                                _hover={{
                                    color: 'primary'
                                }}
                            >
                                <FaGithub />
                            </Box>
                        }
                    </Stack>
                </Stack>

                {
                    direction == 'r' && <ImageProject image={image} url={urlSIte} />
                }
            </Stack >
        </HeadingA>
    )
}

export default MainProject