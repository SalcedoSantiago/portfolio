/**
 * External dependencies
 */
 import { Stack, Text, Button, } from '@chakra-ui/react';
 import { Link as LinkR } from 'react-scroll'
 import styled from 'styled-components';
 
 /**
  * Internal dependencies
  */
 
 const Nav = () => {
 
     const links = ['home', 'about', 'skills', 'projects', 'contact'];
 
     const Link = styled(LinkR)`
     text-decoration: none!important;
     color:var(--chakra-colors-gray-200);
     transition: all .2s;
     letter-spacing: inherit;
 
     &:hover{
         color:var(--chakra-colors-primary);
     }
     `
 
     return (
         <Stack
             as={'nav'}
             direction={['column', 'column', 'row']}
             spacing={'30px'}
             align={'center'}
         >
             {links.map((link) =>
                 <Text
                     key={link}
                     textTransform={'capitalize'}
                     fontSize={['24px', '24px', '18px']}
                     fontFamily={'Jost'}
                     cursor="pointer"
                     letterSpacing={'0.20px'}
                     textDecor={'none'}
                     fontWeight={400}
                     color="gray.300"
                     _hover={{
                         color: 'primary'
                     }}
                 >
                     <Link
                         to={link}
                         smooth={true}
                         duration={500}
                     >
                         {link}
                     </Link>
                 </Text >
             )}
             <Button
                 as="a"
                 href="mailto:santiagosalcedod@gmail.com"
                 my={3}
                 px={'30px'}
                 variant="primary"
                 borderRadius={'3px'}
                 transition="all 0.2s ease"
                 fontSize={['20px', '20px', "16px"]}
                 fontWeight={400}
                 w={['70%', '70%', 'auto']}
             >
                 Resume
             </Button>
         </Stack>
     )
 }
 
 export default Nav