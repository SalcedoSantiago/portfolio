import React from 'react'
import { Stack, Link, Text, Box, Image, Heading, Flex, Button, Container } from '@chakra-ui/react';
import Image_ from '../../../assets/test.jpg'

const ImageProject = ({ image }) => {
    return (
        <Box
            w="50%"
            as='a'
            cursor={'pointer'}
            href="https://www.google.com"
            target={'_blank'}
            position={'relative'}
            transition="all .2s"
            _hover={{
                transform: 'scale(1.03)'
            }}
            rounded="lg"
        >
            <Image
                boxSize="100%"
                src={image || Image_}
                rounded="lg"
            />
            <Box
                w="100%"
                h="100%"
                position={'absolute'}
                top={0}
                left={0}
                bgColor={'black'}
                mixBlendMode={'screen'}
                rounded="lg"
            >
            </Box>
        </Box>
    )
}

export default ImageProject
