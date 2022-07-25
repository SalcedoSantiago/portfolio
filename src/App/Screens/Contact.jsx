/**
 * External dependencies
 */
import React from 'react'
import { Stack, Link, Text, Box, Image, Heading, Flex, Button, Container } from '@chakra-ui/react';

/**
 * Internal dependencies
 */

const Contact = () => {
    return (
        <Stack
            py={'150px'}
            justify='center'
            align={'center'}
            spacing={6}
        >
            <Heading
                textAlign={'center'}
            >
                Get in touch
            </Heading>
            <Text
                color={'gray.400'}
                maxW={'600px'}
                textAlign='center'
            >
                Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </Text>
            <Button
                variant={'outline'}
                color='primary'
                as='a'
                href="mailto:santiagosalcedod@gmail.com"
            >
                say hello!
            </Button>
        </Stack>
    )
}

export default Contact