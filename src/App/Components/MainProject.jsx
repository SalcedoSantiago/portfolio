/**
 * External dependencies
 */
import { Stack, Text, Box, Heading } from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

/**
 * Internal dependencies
 */
import ImageProject from "./project/Image";

const MainProject = ({ direction = "r", image, desc, title, url, repo }) => {
  const urlSite = url || repo || "#";

  return (
    <Stack
      direction={["column", "column", "row"]}
      spacing={7}
      justifyContent="space-between"
      align="center"
      textAlign={direction === "r" ? "start" : "end"}
    >
      {direction === "l" && (
        <ImageProject image={image} url={urlSite} title={title} />
      )}

      <Stack direction="column" w={["100%", "100%", "50%"]} order={[2, 2, 0]}>
        <Heading
          as="h3"
          className="main-heading"
          pt={2}
          color="gray.200"
          fontSize="3xl"
          textAlign={direction === "r" ? "start" : "end"}
          fontWeight={600}
          fontFamily="'PT Mono', monospace"
        >
          <Box
            as="a"
            href={urlSite}
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            textDecoration="none"
            _hover={{ color: "primary" }}
            _focusVisible={{
              outline: "2px solid",
              outlineColor: "primary",
              outlineOffset: "3px",
            }}
          >
            {title}
          </Box>
        </Heading>

        <Text fontSize="sm" pb={2} color="gray.400">
          Website, App
        </Text>
        <Text color="gray.300" fontSize="md" lineHeight="25px" pb="20px">
          {desc}
        </Text>

        <Stack
          direction="row"
          align="center"
          pt={2}
          justifyContent={direction === "r" ? "start" : "end"}
          spacing={6}
        >
          {url && (
            <Box
              as="a"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} — live site (opens in a new tab)`}
              color="gray.400"
              fontSize="20px"
              _hover={{ color: "primary" }}
              _focusVisible={{
                outline: "2px solid",
                outlineColor: "primary",
                outlineOffset: "3px",
              }}
            >
              <FaExternalLinkAlt aria-hidden="true" />
            </Box>
          )}
          {repo && (
            <Box
              as="a"
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} — GitHub repository (opens in a new tab)`}
              color="gray.400"
              fontSize="24px"
              _hover={{ color: "primary" }}
              _focusVisible={{
                outline: "2px solid",
                outlineColor: "primary",
                outlineOffset: "3px",
              }}
            >
              <FaGithub aria-hidden="true" />
            </Box>
          )}
        </Stack>
      </Stack>

      {direction === "r" && (
        <ImageProject image={image} url={urlSite} title={title} />
      )}
    </Stack>
  );
};

export default MainProject;
