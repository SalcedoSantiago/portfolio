/**
 * External dependencies
 */
import React from "react";
import { Container, Stack, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

/**
 * Internal dependencies
 */
import MenuMobile from "../Components/MenuMobile";
import Nav from "../Components/nav";
import LogoMe from "../Components/logo";

const Header = () => {
  return (
    <Box
      as="header"
      bgColor={["#0000006a", "#0000006a", "transparent"]}
      position={["fixed", "fixed", "initial"]}
      top={0}
      zIndex={3}
      shadow={["xl", "xl", "none"]}
      px={[0, 0, 0]}
      w="100%"
    >
      <Container maxW="5xl" shadow={["xl", "xl", "none"]} px={["40px", "40px", 0]}>
        <Stack
          direction="row"
          justifyContent="space-between"
          py={["24px", "24px", "32px"]}
          px={[0, 0, 0]}
          align="center"
        >
          <Box
            as={RouterLink}
            to="/"
            aria-label="Santiago Salcedo — Home"
            fontSize="20px"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.05)" }}
            _focusVisible={{
              outline: "2px solid",
              outlineColor: "primary",
              outlineOffset: "3px",
            }}
          >
            <LogoMe />
          </Box>
          <MenuMobile />
          <Box display={["none", "none", "block"]} as="nav" aria-label="Primary">
            <Nav />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
