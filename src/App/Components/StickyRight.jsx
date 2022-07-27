import React from 'react'
import { Stack, Divider, Text, Box, } from '@chakra-ui/react';
import styled from 'styled-components';

const StickyRight = () => {
    const TextLink = styled(Text)`
        text-decoration: none!important;
        color:var(--chakra-colors-gray-200);
        transition: all .2s;
        letter-spacing: inherit;
        writing-mode: vertical-rl;
        &:hover{
            color:var(--chakra-colors-primary);
        }
    `;


    return (
        <Box
            position="fixed"
            bottom={'0px'}
            color={'gray.300'}
            cursor={'pointer'}
            w="40px"
            right={'40px'}
        >
            <Stack direction={'column'} justifyContent={'center'} align='center' spacing={6} flex={1}>
                <TextLink
                    color="gray.300"
                    _hover={{
                        color: 'primary'
                    }}
                    fontWeight={600}
                    as="a"
                    href="mailto:santiagosalcedod@gmail.com"
                    writingMode={'vertical-rl'}
                >
                    santiagosalcedod@gmail.com
                </TextLink>
                <Divider
                    orientation='vertical'
                    height="100px"
                />
            </Stack>
        </Box>
    )
}

export default StickyRight