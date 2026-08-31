/**
 * External dependencies
 */
import React from "react";
import { Stack, Box, Divider } from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const socialLinks = [
  {
    href: "https://wa.me/541125709209?text=Hello!",
    label: "WhatsApp (opens in a new tab)",
    icon: FaWhatsapp,
  },
  {
    href: "https://github.com/SalcedoSantiago",
    label: "GitHub (opens in a new tab)",
    icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/santiago-dalmiro-salcedo/",
    label: "LinkedIn (opens in a new tab)",
    icon: FaLinkedinIn,
  },
  {
    href: "mailto:santiagosalcedod@gmail.com",
    label: "Email Santiago Salcedo",
    icon: MdOutlineMail,
    external: false,
  },
];

const StickyLeft = () => {
  return (
    <Box
      as="aside"
      aria-label="Social links"
      position="fixed"
      bottom="0px"
      color="gray.300"
      fontFamily="'Inter', sans-serif"
      opacity={[0, 0, 1]}
      display={["none", "none", "block"]}
      left="40px"
      zIndex={2}
    >
      <Stack direction="column" justifyContent="center" align="center" spacing={6}>
        {socialLinks.map(({ href, label, icon: Icon, external = true }) => (
          <Box
            key={href}
            as="a"
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={label}
            color="gray.400"
            fontSize="24px"
            _hover={{ color: "primary" }}
            _focusVisible={{
              outline: "2px solid",
              outlineColor: "primary",
              outlineOffset: "3px",
            }}
          >
            <Icon aria-hidden="true" focusable="false" />
          </Box>
        ))}
        <Divider orientation="vertical" height="100px" aria-hidden="true" />
      </Stack>
    </Box>
  );
};

export default StickyLeft;
