/**
 * External dependencies
 */
import React from 'react'
import { Stack, Link, Text, Box, Image, Heading, Flex, Button, Container } from '@chakra-ui/react';

/**
 * Internal dependencies
 */

const Skill = ({ text, icon }) => {
    return (
        <Stack
            direction={'row'}
            spacing={3}
            bgColor={'#2a2524'}
            shadow={'xl'}
            w="200px"
            py={4}
            px={3}
            rounded="xl"
        >
            {icon}
            <Text
                fontWeight={500}
                // textTransform='uppercase'
            >
                {text}
            </Text>
        </Stack>
    )
}

export default Skill
