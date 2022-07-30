/**
 * External dependencies
 */
 import React from 'react'
 import { Container, Stack, Box, } from '@chakra-ui/react'
 
 /**
  * Internal dependencies
  */
 import MenuMobile from '../Components/MenuMobile'
 import Nav from '../Components/nav';
 
 
 const Header = () => {
 
     return (
         <Box
             bgColor={['#0000006a', '#0000006a', 'transparent']}
             position={['fixed', 'fixed', 'initial']}
             top={0}
             zIndex={3}
             shadow={['xl', 'xl', 'none']}
             w="100%"
         >
             <Container maxW={'5xl'} shadow={['xl', 'xl', 'none']}>
                 <Stack
                     direction={'row'}
                     justifyContent="space-between"
                     py={['30px', '30px', '40px']}
                     px={[0, 0, 3]}
                     align='center'
                 >
                     <Box
                         fontSize="20px"
                     >
                         Santiagod
                     </Box>
                     <MenuMobile />
                     <Box display={['none', 'none', 'block']}>
                         <Nav />
                     </Box>
                 </Stack>
             </Container>
         </Box>
     )
 }
 
 export default Header