import React from 'react'
import { Stack, Link, Text, Box, Image, Heading, Flex, Button, Container } from '@chakra-ui/react';

import imageHtml from '../assets/html.png';


const Html = () => {

    return (
        <Image
        objectFit={'contain'}
            src={imageHtml}
        />
    )
}

export default Html