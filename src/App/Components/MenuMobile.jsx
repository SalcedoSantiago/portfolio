/**
 * External dependencies
 */
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
} from '@chakra-ui/react';
import { Box, Flex, Button, } from '@chakra-ui/react';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { RiCloseLine } from 'react-icons/ri';
import Nav from './nav';


const MenuMobile = () => {

    const [isOpen, toggleOpen] = useState(false)
    // const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box display={['block', 'block', 'none']}>
            <Button colorScheme='dark' onClick={() => { toggleOpen(!isOpen) }}>
                <FaBars
                    fontSize={'40px'}
                />
            </Button>
            <Drawer
                size={'md'}
                isOpen={isOpen}
                placement='right'
                onClose={() => { toggleOpen(!isOpen) }}
            >
                <DrawerOverlay />
                <DrawerContent
                    bgColor={'gray.800'}
                >

                    <DrawerBody >
                        <Box pt={'30px'}>
                            <Flex w="100%" justifyContent={'center'}>
                                <Button colorScheme='dark' onClick={() => { toggleOpen(!isOpen) }}>
                                    <RiCloseLine
                                        fontSize={'40px'}
                                    />
                                </Button>
                            </Flex>
                            <Box pt={'30px'}>
                                <Nav />
                            </Box>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default MenuMobile