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
import { useLanguage } from "../../i18n/LanguageContext";

const parseStartYear = (period) => {
  const match = period.match(/(\d{4})/);
  return match ? parseInt(match[1], 10) : null;
};

const Experience = () => {
  const { t, lang } = useLanguage();

  const stats = useMemo(() => {
    const startYears = experience.map((job) => parseStartYear(job.periodEn || job.period)).filter(Boolean);
    const earliest = startYears.length ? Math.min(...startYears) : new Date().getFullYear();
    const yearsCount = Math.max(1, new Date().getFullYear() - earliest);
    const stackSet = new Set(experience.flatMap((job) => job.stack || []));

    return [
      {
        label: t("experience.stats.experience.label"),
        value: `${yearsCount}+`,
        sub: t("experience.stats.experience.sub"),
        tone: "solid",
      },
      {
        label: t("experience.stats.trackRecord.label"),
        value: `${experience.length}`,
        sub: t("experience.stats.trackRecord.sub"),
        tone: "outline",
      },
      {
        label: t("experience.stats.toolbox.label"),
        value: `${stackSet.size}+`,
        sub: t("experience.stats.toolbox.sub"),
        tone: "muted",
      },
      {
        label: t("experience.stats.workflow.label"),
        value: t("experience.stats.workflow.value"),
        sub: t("experience.stats.workflow.sub"),
        tone: "accent",
      },
    ];
  }, [t]);

  return (
    <Element name="experience">
      <Box py={SECTION_PY}>
        <GsapSectionTitle>{t("experience.title")}</GsapSectionTitle>

        <GsapReveal variant="fadeUp" delay={0.05}>
          <Eyebrow>{t("experience.eyebrow")}</Eyebrow>
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
            {t("experience.headlineBefore")}{" "}
            <Text as="span" fontStyle="italic" color="primary">
              {t("experience.headlineAccent")}
            </Text>{" "}
            {t("experience.headlineAfter")}
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
              period={lang === "es" ? job.periodEs || job.period : job.periodEn || job.period}
              points={lang === "es" ? job.pointsEs : job.points}
              currentLabel={t("experience.current")}
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
