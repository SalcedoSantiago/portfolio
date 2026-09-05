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
import { useLanguage } from "../../i18n/LanguageContext";

const MenuMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useLanguage();

  return (
    <Box display={["block", "block", "none"]}>
      <Button
        variant="ghost"
        color="gray.200"
        onClick={onOpen}
        aria-label={t("nav.openMenu")}
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
            aria-label={t("nav.closeMenu")}
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
              aria-label={t("nav.mobileAria")}
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
