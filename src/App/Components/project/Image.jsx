import React from 'react'
import { Stack, Link, Text, Box, Image, Heading, Flex, Button, Container } from '@chakra-ui/react';
import Image_ from '../../../assets/test.jpg'

const ImageProject = () => {
    return (
        <Box
            w="50%"
            as='a'
            cursor={'pointer'}
            href="https://www.google.com"
            target={'_blank'}
            position={'relative'}
        >
            <Image
                boxSize="100%"
                src={Image_}
                roundedLeft="xl"
            />
        </Box>
    )
}

export default ImageProject
