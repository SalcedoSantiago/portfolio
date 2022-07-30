/**
 * External dependencies
 */
 import React from 'react'
 import { Stack, Text, Box, Heading, } from '@chakra-ui/react';
 import { ExternalLinkIcon } from '@chakra-ui/icons'
 import { FaGithub } from 'react-icons/fa'
 
 const Project = ({ desc, title, link, repo }) => {
 
     return (
         <Stack
             as="a"
             href={link ? link : repo ? repo : ''}
             target={'_blank'}
             w={['100%', '100%', 'calc(33% - 1rem)']}
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
         </Stack>
     )
 }
 
 export default Project
 
 