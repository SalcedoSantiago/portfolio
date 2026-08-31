/**
 * External dependencies
 */
import React, { useMemo } from "react";
import { Stack, Text, Box, SimpleGrid } from "@chakra-ui/react";
import { Element } from "react-scroll";

/**
 * Internal dependencies
 */
import ExperienceItem from "../Components/ExperienceItem";
import Eyebrow from "../Components/Eyebrow";
import StatCard from "../Components/StatCard";
import GsapSectionTitle from "../Components/animations/GsapSectionTitle";
import GsapReveal from "../Components/animations/GsapReveal";
import { experience } from "../../data/resumeData";
import { SECTION_PY } from "../constants/layout";

const parseStartYear = (period) => {
  const match = period.match(/(\d{4})/);
  return match ? parseInt(match[1], 10) : null;
};

const Experience = () => {
  const stats = useMemo(() => {
    const startYears = experience.map((job) => parseStartYear(job.period)).filter(Boolean);
    const earliest = startYears.length ? Math.min(...startYears) : new Date().getFullYear();
    const yearsCount = Math.max(1, new Date().getFullYear() - earliest);
    const stackSet = new Set(experience.flatMap((job) => job.stack || []));

    return [
      { label: "Experience", value: `${yearsCount}+`, sub: "years shipping products", tone: "solid" },
      { label: "Track record", value: `${experience.length}`, sub: "companies, zero gaps", tone: "outline" },
      { label: "Toolbox", value: `${stackSet.size}+`, sub: "technologies in rotation", tone: "muted" },
      { label: "Workflow", value: "AI-native", sub: "Claude + MCP in the loop", tone: "accent" },
    ];
  }, []);

  return (
    <Element name="experience">
      <Box py={SECTION_PY}>
        <GsapSectionTitle>Experience</GsapSectionTitle>

        <GsapReveal variant="fadeUp" delay={0.05}>
          <Eyebrow>Career timeline</Eyebrow>
        </GsapReveal>

        <GsapReveal variant="fadeUp" delay={0.1}>
          <Text
            fontFamily="'Fraunces', serif"
            fontWeight={500}
            lineHeight="1.35"
            fontSize={["22px", "22px", "28px"]}
            textAlign="center"
            color="gray.300"
            maxW="640px"
            mx="auto"
            pb="8px"
          >
            Where I've been{" "}
            <Text as="span" fontStyle="italic" color="primary">
              building
            </Text>{" "}
            products, professionally.
          </Text>
        </GsapReveal>

        <GsapReveal variant="fadeUp" delay={0.18}>
          <SimpleGrid
            columns={{ base: 2, md: 4 }}
            spacing={{ base: 3, md: 4 }}
            pt={8}
            pb={{ base: "8px", md: "16px" }}
            maxW="820px"
            mx="auto"
          >
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </SimpleGrid>
        </GsapReveal>

        <Stack direction="column" spacing={0} pt={6} maxW="820px" mx="auto">
          {experience.map((job, index) => (
            <ExperienceItem
              key={job.company}
              {...job}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </Stack>
      </Box>
    </Element>
  );
};

export default Experience;
