/**
 * External dependencies
 */
 import React from 'react'
 import { Stack, Box, Divider } from '@chakra-ui/react';
 import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa'
 import { MdOutlineMail } from 'react-icons/md';
 
 
 
 const StickyLeft = () => {
     return (
         <Box
             position="fixed"
             bottom={'0px'}
             as="a"
             color={'gray.300'}
             cursor={'pointer'}
             fontFamily="'Inter'"
             opacity={[0, 0, 1]}
             left={'40px'}
         >
             <Stack direction={'column'} justifyContent={'center'} align='center' spacing={6} flex={1}>
                 <Box
                     as="a"
                     href='https://wa.me/541125709209?text=Hello!'
                     target={'_blank'}
                     color="gray.400"
                     cursor={'pointer'}
                     fontSize={'24px'}
                     _hover={{
                         color: 'primary'
                     }}
                 >
                     <FaWhatsapp />
                 </Box>
                 <Box
                     as="a"
                     href='https://github.com/SalcedoSantiago'
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
 
                 <Box
                     as="a"
                     href='https://www.linkedin.com/in/santiago-dalmiro-salcedo/'
                     target={'_blank'}
                     color="gray.400"
                     cursor={'pointer'}
                     fontSize={'24px'}
                     _hover={{
                         color: 'primary'
                     }}
                 >
                     <FaLinkedinIn />
                 </Box>
                 <Box
                     as="a"
                     href="mailto:santiagosalcedod@gmail.com"
                     target={'_blank'}
                     color="gray.400"
                     cursor={'pointer'}
                     fontSize={'24px'}
                     _hover={{
                         color: 'primary'
                     }}
                 >
                     <MdOutlineMail />
                 </Box>
                 <Divider
                     orientation='vertical'
                     height="100px"
                 />
             </Stack>
         </Box>
     )
 }
 
 export default StickyLeft
 