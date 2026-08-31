import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Image_ from "../../../assets/pokedex.jpg";

const ImageProject = ({ image, url, title = "Project" }) => {
  return (
    <Box
      w={["100%", "100%", "50%"]}
      as="a"
      h="100%"
      cursor="pointer"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} preview (opens in a new tab)`}
      position="relative"
      transition="all .2s"
      _focusVisible={{
        outline: "2px solid",
        outlineColor: "primary",
        outlineOffset: "4px",
      }}
    >
      <Image
        boxSize="100%"
        src={image || Image_}
        alt=""
        aria-hidden="true"
      />
      <Box
        w="100%"
        h="100%"
        position="absolute"
        top={0}
        left={0}
        bgColor="#00000036"
        mixBlendMode="screen"
        aria-hidden="true"
      />
    </Box>
  );
};

export default ImageProject;
