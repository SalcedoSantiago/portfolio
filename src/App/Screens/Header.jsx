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
import LogoMe from '../Components/logo';

const Header = () => {

    return (
        <Box
            bgColor={['#0000006a', '#0000006a', 'transparent']}
            position={['fixed', 'fixed', 'initial']}
            top={0}
            zIndex={3}
            shadow={['xl', 'xl', 'none']}
            px={[0, 0, 0]}
            w="100%"
        >
            <Container maxW={'5xl'} shadow={['xl', 'xl', 'none']} px={['40px', '40px', 0]}>
                <Stack
                    direction={'row'}
                    justifyContent="space-between"
                    py={['30px', '30px', '40px']}
                    px={[0, 0, 0]}
                    align='center'
                >
                    <Box
                        fontSize="20px"
                    >
                        <LogoMe />
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