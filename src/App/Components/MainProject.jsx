/**
 * External dependencies
 */
import { Stack, Link, Text, Box, Heading, Flex, Button, Container } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
/**
 * Internal dependencies
 */
import Github from '../../Icons/github';
import ImageProject from './project/Image'


const MainProject = ({ direction = 'r' }) => {
    return (
        <Stack
            direction={'row'}
            spacing={7}
            justifyContent="space-between"
            align={'center'}
        >
            {
                direction == 'l' && <ImageProject />
            }
            <Stack direction={'column'} w="50%">
                <Text
                    color='secondary'
                    fontWeight={400}
                    fontSize="sm"
                    // fontFamily={"'Space Mono'"}
                >
                    Featured Project
                </Text>
                <Heading
                    color="gray.300"
                    fontSize={'2xl'}
                    pb={4}
                    // pt={2}
                    fontWeight={600}
                    fontFamily={"'Space Mono'"}
                >
                    Halcyon Theme
                </Heading>


                <Text
                    color={'gray.200'}
                    fontSize="sm"
                    lineHeight={"1.6em"}
                    pb={5}

                >
                    A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
                </Text>

                <Stack direction={'row'} justifyContent='end' pt={4}>
                    <ExternalLinkIcon />
                    <Github />
                </Stack>
            </Stack>

            {
                direction == 'r' && <ImageProject />
            }
        </Stack>
    )
}

export default MainProject