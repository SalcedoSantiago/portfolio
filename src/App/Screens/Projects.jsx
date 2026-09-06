/**
 * External dependencies
 */
import React from "react";
import { Stack, Text, Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { Element } from "react-scroll";

/**
 * Internal dependencies
 */
import Project from "../Components/Project";
import MainProject from "../Components/MainProject";
import Eyebrow from "../Components/Eyebrow";
import Pokedex from "../../assets/pokedex.jpg";
import Todo from "../../assets/todo.jpg";
import Store from "../../assets/store.jpg";
import GsapSectionTitle from "../Components/animations/GsapSectionTitle";
import GsapReveal from "../Components/animations/GsapReveal";
import { SECTION_PY, SECTION_GAP } from "../constants/layout";
import { useLanguage } from "../../i18n/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  const mainProjects = [
    {
      title: "Pokedex",
      image: Pokedex,
      desc: t("projects.main.pokedex"),
      url: "https://salcedosantiago.github.io/pokedex/",
      repo: "https://github.com/SalcedoSantiago/pokedex",
    },
    {
      title: "Todo App",
      image: Todo,
      desc: t("projects.main.todo"),
      repo: "https://github.com/SalcedoSantiago/todo-app",
      url: "https://salcedosantiago.github.io/todo-app/",
    },
    {
      title: "Store App",
      image: Store,
      desc: t("projects.main.store"),
      repo: "https://github.com/SalcedoSantiago/ecommerce-app",
      url: "https://salcedosantiago.github.io/ecommerce-app/",
    },
  ];

  const miniProjects = [
    {
      title: "Store Coder",
      desc: t("projects.mini.storeCoder"),
      link: "https://salcedosantiago.github.io/store-coder/",
      repo: "https://github.com/SalcedoSantiago/store-coder",
    },
    {
      title: "Travel",
      desc: t("projects.mini.travel"),
      link: "https://salcedosantiago.github.io/travel/",
      repo: "https://github.com/SalcedoSantiago/travel",
    },
    {
      title: "Portfolio v2",
      desc: t("projects.mini.portfolioV2"),
      link: "https://salcedosantiago.github.io/Mi-portafolio/",
      repo: "https://github.com/SalcedoSantiago/Mi-portafolio",
    },
    {
      title: "Portfolio v1",
      desc: t("projects.mini.portfolioV1"),
      link: "https://salcedosantiago.github.io/Mi-portafolio/",
      repo: "https://github.com/SalcedoSantiago/Mi-portafolio",
    },
    {
      title: "Blog cafe",
      desc: t("projects.mini.course"),
      link: "https://salcedosantiago.github.io/blog-cafe/",
      repo: "https://github.com/SalcedoSantiago/blog-cafe",
    },
    {
      title: "Freelancer",
      desc: t("projects.mini.course"),
      link: "https://salcedosantiago.github.io/freelancer/",
      repo: "https://github.com/SalcedoSantiago/freelancer",
    },
    {
      title: "Frontend",
      desc: t("projects.mini.course"),
      link: "https://salcedosantiago.github.io/frontend/",
      repo: "https://github.com/SalcedoSantiago/frontend",
    },
    {
      title: "Bienes Raices",
      desc: t("projects.mini.course"),
      link: "https://salcedosantiago.github.io/bienes-raices/",
      repo: "https://github.com/SalcedoSantiago/bienes-raices",
    },
    {
      title: "Viajes",
      desc: t("projects.mini.course"),
      link: "https://salcedosantiago.github.io/viajes/",
      repo: "https://github.com/SalcedoSantiago/viajes",
    },
  ];

  return (
    <Element name="projects">
      <Stack py={SECTION_PY} direction="column" spacing={SECTION_GAP}>
        <Box>
          <GsapSectionTitle pb={3}>{t("projects.title")}</GsapSectionTitle>

          <GsapReveal variant="fadeUp" delay={0.1}>
            <Text
              lineHeight="35px"
              letterSpacing="0.2px"
              fontSize="18px"
              textAlign="center"
              color="gray.300"
              pb={[2, 2, "32px"]}
              pt={0}
              maxW="800px"
              mx="auto"
              px={[0, 0, "50px"]}
            >
              {t("projects.intro")}
            </Text>
          </GsapReveal>

          <Stack direction="column" py={4} spacing={{ base: "32px", md: "40px" }}>
            {mainProjects.map(({ title, desc, image, url, repo }, index) => (
              <GsapReveal
                key={title}
                variant={index % 2 === 0 ? "slideLeft" : "slideRight"}
                duration={1.1}
              >
                <MainProject
                  image={image}
                  direction="r"
                  desc={desc}
                  url={url}
                  repo={repo}
                  title={title}
                />
              </GsapReveal>
            ))}
          </Stack>
        </Box>

        <Box pt={SECTION_GAP}>
          <GsapReveal variant="fadeUp">
            <Eyebrow>{t("projects.sideEyebrow")}</Eyebrow>
          </GsapReveal>

          <Box overflow="hidden" pb="24px">
            <GsapReveal variant="clipUp">
              <Heading as="h2" textAlign="center" fontSize="4xl" color="gray.200">
                {t("projects.otherTitle")}
              </Heading>
            </GsapReveal>
          </Box>

          <GsapReveal variant="fadeUp" stagger={0.08}>
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={7}
              py={4}
              px={["10px", "10px", 0]}
            >
              {miniProjects.map(({ title, desc, link, repo }, index) => (
                <Project
                  key={title}
                  title={title}
                  link={link}
                  desc={desc}
                  repo={repo}
                  index={index}
                />
              ))}
            </SimpleGrid>
          </GsapReveal>
        </Box>
      </Stack>
    </Element>
  );
};

export default Projects;
