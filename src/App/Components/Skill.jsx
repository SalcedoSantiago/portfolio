/**
 * External dependencies
 */
import React from 'react'
import { Stack, Link, Text, Box, Image, Heading, Flex, Button, Container } from '@chakra-ui/react';

/**
 * Internal dependencies
 */

const Skill = ({ text, image = '' }) => {
    return (
        <Stack
            direction={'row'}
            spacing={3}
            bgColor={'#3b3f57'}
            shadow={'xl'}
            w="auto"
            minW={'190px'}
            py={4}
            px={6}
            rounded="xl"
            alignItems={'center'}
        >
            <Image
                // objectFit={'cover'}
                boxSize={'30px'}
                src={image || 'https://cdn-icons-png.flaticon.com/512/732/732212.png'}
            />
            <Text
                // fontWeight={600}
                // fontFamily={"'Space Mono'"}
            >
                {text}
            </Text>
        </Stack>
    )
}

export default Skill
