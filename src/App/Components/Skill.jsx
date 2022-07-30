/**
 * External dependencies
 */
 import React from 'react'
 import { Stack, Text, Image, } from '@chakra-ui/react';
 
 /**
  * Internal dependencies
  */
 
 const Skill = ({ text, image = '' }) => {
     return (
         <Stack
             direction={'row'}
             spacing={3}
             bgColor={'gray.700'}
             w="auto"
             minW={'150px'}
             py={4}
             px={6}
             rounded="xl"
             alignItems={'center'}
             color="gray.300"
             shadow={'xl'}
             fontWeight={500}
         >
             <Image
                 // objectFit={'cover'}
                 boxSize={'30px'}
                 src={image || 'https://cdn-icons-png.flaticon.com/512/732/732212.png'}
             />
             <Text
                 fontSize={'sm'}
             >
                 {text}
             </Text>
         </Stack>
     )
 }
 
 export default Skill
 