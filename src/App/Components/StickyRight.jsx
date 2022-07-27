import React from 'react'
import { Stack, Divider, Text, Box, } from '@chakra-ui/react';
import styled from 'styled-components';

const StickyRight = () => {
    const TextLink = styled(Text)`
        text-decoration: none!important;
        color:var(--chakra-colors-gray-200);
        transition: all .2s;
        letter-spacing: inherit;

        &:hover{
            color:var(--chakra-colors-primary);
        }
    `;


    return (
        <Box
            position="fixed"
            bottom={'120px'}
            color={'gray.300'}
            cursor={'pointer'}
            right={'0'}
        >
            <Stack direction={'column'} justifyContent={'center'} align='center' spacing={6} flex={1}>
                <Box
                    transform={'rotate(0.25turn)'}
                    w="400px"
                >
                    <TextLink
                        color="gray.300"
                        _hover={{
                            color: 'primary'
                        }}
                        fontWeight={600}
                        as="a"
                    >
                        santiagosalcedod@gmail.com
                    </TextLink>
                </Box>

                <Divider
                    orientation='vertical'
                    height="50px"
                />
            </Stack>
        </Box>
    )
}

export default StickyRight