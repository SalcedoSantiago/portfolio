/**
 * External dependencies
 */
import React, { useMemo, useRef } from "react";
import {
  Text,
  Box,
  Heading,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { Element } from "react-scroll";
import { useGSAP } from "@gsap/react";

/**
 * Internal dependencies
 */
import Skill from "../Components/Skill";
import Eyebrow from "../Components/Eyebrow";
import StatCard from "../Components/StatCard";
import GsapSectionTitle from "../Components/animations/GsapSectionTitle";
import GsapReveal from "../Components/animations/GsapReveal";
import { skillIcons } from "../../data/resumeData";
import { gsap } from "../Components/animations/gsapSetup";
import { SECTION_PY } from "../constants/layout";
import { useLanguage } from "../../i18n/LanguageContext";

const SkillCategory = ({ title, items, index }) => {
  const cardRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(cardRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.08,
      });

      const chips = cardRef.current?.querySelectorAll(".skill-chip");
      if (chips?.length) {
        gsap.from(chips, {
          y: 20,
          opacity: 0,
          stagger: 0.04,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: 0.15 + index * 0.08,
        });
      }
    },
    { scope: cardRef, dependencies: [index] }
  );

  return (
    <Box
      ref={cardRef}
      role="group"
      position="relative"
      overflow="hidden"
      p={[5, 6, 7]}
      bg="gray.800"
      borderWidth="1px"
      borderColor="gray.800"
      borderRadius="2xl"
      transition="border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{
        borderColor: "primary",
        transform: "translateY(-4px)",
        boxShadow: "0 16px 34px -18px rgba(94, 236, 191, 0.3)",
      }}
      h="100%"
    >
      <Box
        position="absolute"
        top={{ base: "-6px", md: "-14px" }}
        right={{ base: "12px", md: "20px" }}
        fontFamily="'Fraunces', serif"
        fontStyle="italic"
        fontWeight={500}
        fontSize={{ base: "56px", md: "88px" }}
        lineHeight="1"
        color="whiteAlpha.100"
        transition="color 0.4s ease"
        _groupHover={{ color: "rgba(94, 236, 191, 0.18)" }}
        userSelect="none"
        pointerEvents="none"
      >
        {String(index + 1).padStart(2, "0")}
      </Box>

      <Flex align="center" gap={2} mb={5} position="relative">
        <Heading
          as="h3"
          fontSize={["md", "md", "lg"]}
          fontWeight={600}
          color="gray.100"
          letterSpacing="0.01em"
        >
          {title}
        </Heading>
        <Text
          fontFamily="'PT Mono', monospace"
          fontSize="10px"
          fontWeight={700}
          color="gray.500"
          bg="whiteAlpha.50"
          borderRadius="full"
          px={2}
          py="2px"
        >
          {items.length}
        </Text>
      </Flex>

      <Flex wrap="wrap" gap={2} position="relative">
        {items.map(({ title: skillTitle, image }, chipIndex) => (
          <Box key={`${skillTitle}-${chipIndex}`} className="skill-chip">
            <Skill text={skillTitle} image={image} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

const Skills = () => {
  const { t } = useLanguage();

  const sections = useMemo(
    () => [
      { title: t("skills.categories.languages"), items: skillIcons.languages },
      { title: t("skills.categories.libraries"), items: skillIcons.libraries },
      { title: t("skills.categories.ai"), items: skillIcons.aiTools },
      { title: t("skills.categories.tools"), items: skillIcons.tools },
    ],
    [t]
  );

  const stats = useMemo(() => {
    const totalTools = sections.reduce((sum, section) => sum + section.items.length, 0);

    return [
      {
        label: t("skills.stats.toolbox.label"),
        value: `${totalTools}+`,
        sub: t("skills.stats.toolbox.sub"),
        tone: "solid",
      },
      {
        label: t("skills.stats.categories.label"),
        value: `${sections.length}`,
        sub: t("skills.stats.categories.sub"),
        tone: "outline",
      },
      {
        label: t("skills.stats.aiTools.label"),
        value: `${skillIcons.aiTools.length}`,
        sub: t("skills.stats.aiTools.sub"),
        tone: "muted",
      },
      {
        label: t("skills.stats.coreStack.label"),
        value: t("skills.stats.coreStack.value"),
        sub: t("skills.stats.coreStack.sub"),
        tone: "accent",
      },
    ];
  }, [sections, t]);

  return (
    <Element name="skills">
      <Box py={SECTION_PY} px={[0, 0, "40px"]}>
        <GsapSectionTitle>{t("skills.title")}</GsapSectionTitle>

        <GsapReveal variant="fadeUp" delay={0.05}>
          <Eyebrow>{t("skills.eyebrow")}</Eyebrow>
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
            {t("skills.headlineBefore")}{" "}
            <Text as="span" fontStyle="italic" color="primary">
              {t("skills.headlineAccent")}
            </Text>{" "}
            {t("skills.headlineAfter")}
          </Text>
        </GsapReveal>

        <GsapReveal variant="fadeUp" delay={0.18}>
          <SimpleGrid
            columns={{ base: 2, md: 4 }}
            spacing={{ base: 3, md: 4 }}
            pt={8}
            pb={{ base: "24px", md: "32px" }}
            maxW="820px"
            mx="auto"
          >
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </SimpleGrid>
        </GsapReveal>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
          {sections.map((section, index) => (
            <SkillCategory
              key={section.title}
              title={section.title}
              items={section.items}
              index={index}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Element>
  );
};

export default Skills;
