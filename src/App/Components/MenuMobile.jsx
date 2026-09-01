/**
 * External dependencies
 */
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import Nav from "./nav";

const MenuMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box display={["block", "block", "none"]}>
      <Button
        variant="ghost"
        color="gray.200"
        onClick={onOpen}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-drawer"
        _focusVisible={{
          outline: "2px solid",
          outlineColor: "primary",
          outlineOffset: "3px",
        }}
      >
        <FaBars fontSize="32px" aria-hidden="true" focusable="false" />
      </Button>
      <Drawer
        size="md"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="gray.800" id="mobile-nav-drawer">
          <DrawerCloseButton
            aria-label="Close navigation menu"
            size="lg"
            color="gray.200"
            top="24px"
            right="24px"
            _focusVisible={{
              outline: "2px solid",
              outlineColor: "primary",
              outlineOffset: "3px",
            }}
          />
          <DrawerBody pt="80px">
            <Box
              as="nav"
              aria-label="Mobile"
              onClick={(event) => {
                if (event.target.closest("a")) {
                  onClose();
                }
              }}
            >
              <Nav />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MenuMobile;
