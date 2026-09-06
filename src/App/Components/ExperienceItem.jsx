/**
 * External dependencies
 */
import React, { useRef } from "react";
import {
  Text,
  Box,
  Heading,
  Flex,
  Tag,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { MdChevronRight } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import { keyframes } from "@emotion/react";

/**
 * Internal dependencies
 */
import { gsap } from "./animations/gsapSetup";

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(94, 236, 191, 0.5); }
  70% { box-shadow: 0 0 0 7px rgba(94, 236, 191, 0); }
  100% { box-shadow: 0 0 0 0 rgba(94, 236, 191, 0); }
`;

const ExperienceItem = ({
  role,
  company,
  period,
  points = [],
  stack = [],
  index = 0,
  isLast = false,
  currentLabel = "Current",
}) => {
  const rowRef = useRef(null);
  const isCurrent = /present|presente/i.test(period);

  useGSAP(
    () => {
      gsap.from(rowRef.current, {
        y: 36,
        opacity: 0,
        duration: 0.9,
        ease: "power4.out",
        scrollTrigger: {
          trigger: rowRef.current,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });

      const tags = rowRef.current?.querySelectorAll(".exp-tag");
      if (tags?.length) {
        gsap.from(tags, {
          y: 16,
          opacity: 0,
          stagger: 0.05,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rowRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: 0.15,
        });
      }
    },
    { scope: rowRef, dependencies: [index] }
  );

  return (
    <Box
      ref={rowRef}
      role="group"
      position="relative"
      borderBottomWidth={isLast ? 0 : "1px"}
      borderColor="gray.800"
      py={{ base: "32px", md: "48px" }}
      px={{ base: "12px", md: "16px" }}
      mx={{ base: "-12px", md: "-16px" }}
      borderRadius="lg"
      transition="background-color 0.3s ease"
      _hover={{ bg: "rgba(255,255,255,0.015)" }}
    >
      <Flex direction={{ base: "column", md: "row" }} gap={{ base: "16px", md: "40px" }}>
        <Box
          flexShrink={0}
          w={{ base: "auto", md: "120px" }}
          fontFamily="'Fraunces', serif"
          fontStyle="italic"
          fontWeight={500}
          fontSize={{ base: "40px", md: "72px" }}
          lineHeight="1"
          color="whiteAlpha.200"
          transition="color 0.4s ease"
          _groupHover={{ color: "rgba(94, 236, 191, 0.35)" }}
          userSelect="none"
        >
          {String(index + 1).padStart(2, "0")}
        </Box>

        <Box flex={1} minW={0}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "start", md: "center" }}
            gap={2}
            pb={4}
          >
            <Box>
              <Flex align="center" gap={2} wrap="wrap">
                <Heading
                  as="h3"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  color="gray.100"
                  fontWeight={700}
                >
                  {company}
                </Heading>
                {isCurrent && (
                  <Flex
                    align="center"
                    gap={1.5}
                    bg="rgba(94, 236, 191, 0.1)"
                    color="primary"
                    borderRadius="full"
                    px={2.5}
                    py="3px"
                  >
                    <Box
                      w="6px"
                      h="6px"
                      borderRadius="full"
                      bg="primary"
                      animation={`${pulse} 2.4s infinite`}
                      sx={{
                        "@media (prefers-reduced-motion: reduce)": {
                          animation: "none",
                        },
                      }}
                      aria-hidden="true"
                    />
                    <Text
                      fontFamily="'PT Mono', monospace"
                      fontSize="10px"
                      fontWeight={700}
                      letterSpacing="0.06em"
                      textTransform="uppercase"
                    >
                      {currentLabel}
                    </Text>
                  </Flex>
                )}
              </Flex>
              <Text color="gray.400" fontSize="md" fontWeight={500} pt="2px">
                {role}
              </Text>
            </Box>

            <Text
              color="gray.500"
              fontSize="xs"
              fontFamily="'PT Mono', monospace"
              letterSpacing="0.04em"
              textTransform="uppercase"
              flexShrink={0}
            >
              {period}
            </Text>
          </Flex>

          <List spacing={3}>
            {points.map((point, i) => (
              <ListItem
                key={i}
                color="gray.300"
                fontSize="md"
                lineHeight="25px"
                display="flex"
              >
                <ListIcon as={MdChevronRight} color="primary" mt="4px" />
                <Text as="span">{point}</Text>
              </ListItem>
            ))}
          </List>

          <Flex wrap="wrap" gap={2} pt={5}>
            {stack.map((item, i) => (
              <Tag
                key={i}
                className="exp-tag"
                bg="transparent"
                borderWidth="1px"
                borderColor="gray.700"
                color="gray.400"
                fontWeight={500}
                fontSize="sm"
                borderRadius="full"
                transition="background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease"
                _hover={{ bg: "primary", color: "gray.900", borderColor: "primary" }}
              >
                {item}
              </Tag>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default ExperienceItem;
