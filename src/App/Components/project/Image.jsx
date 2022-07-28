import React from 'react'
import { Stack, Link, Text, Box, Image, Heading, Flex, Button, Container } from '@chakra-ui/react';
import Image_ from '../../../assets/test.jpg'

const ImageProject = ({ image }) => {
    return (
        <Box
            w={['100%', '100%', '50%']}
            as='a'
            h="100%"
            cursor={'pointer'}
            href="https://www.google.com"
            target={'_blank'}
            position={'relative'}
            transition="all .2s"
            _hover={{
                // transform: 'scale(1.03)',
            }}
        >
            <Image
                boxSize="100%"
                src={image || Image_}
            />
            <Box
                w="100%"
                h="100%"
                position={'absolute'}
                top={0}
                left={0}
                bgColor={'#00000036'}
            // mixBlendMode={'screen'}
            >
            </Box>
        </Box>
    )
}

export default ImageProject
