/**
 * External dependencies
 */
import React from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  Stack,
  Button,
  Divider,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaArrowLeft, FaDownload } from "react-icons/fa";

/**
 * Internal dependencies
 */
import {
  personalInfo,
  experience,
  education,
  skillCategories,
} from "../../data/resumeData";
import AnimatedSection from "../Components/animations/AnimatedSection";
import { MotionBox } from "../Components/animations/motionComponents";

const ResumeSection = ({ title, children, delay = 0 }) => (
  <AnimatedSection delay={delay} mb={8}>
    <Heading
      fontSize="sm"
      textTransform="uppercase"
      letterSpacing="0.12em"
      color="#007D57"
      fontWeight={700}
      mb={4}
      pb={2}
      borderBottom="2px solid"
      borderColor="#00B389"
    >
      {title}
    </Heading>
    {children}
  </AnimatedSection>
);

const ResumeJob = ({ job, index }) => (
  <AnimatedSection delay={0.1 * index} mb={6}>
    <Flex
      direction={["column", "column", "row"]}
      justify="space-between"
      align={["start", "start", "baseline"]}
      gap={1}
      mb={2}
    >
      <Box>
        <Text fontWeight={700} fontSize="md" color="#1a1a1a">
          {job.role}
        </Text>
        <Text fontWeight={600} fontSize="sm" color="#007D57">
          {job.company}
        </Text>
      </Box>
      <Text fontSize="xs" color="#666" fontFamily="'PT Mono', monospace" whiteSpace="nowrap">
        {job.period}
      </Text>
    </Flex>
    <List spacing={2} styleType="disc" pl={5}>
      {job.pointsEs.map((point, i) => (
        <ListItem key={i} fontSize="sm" color="#333" lineHeight="1.6">
          {point}
        </ListItem>
      ))}
    </List>
  </AnimatedSection>
);

const Resume = () => {
  return (
    <Box minH="100vh" bg="#121212" py={["24px", "40px", "60px"]}>
      <Container maxW="960px">
        <AnimatedSection mb={6}>
          <Flex justify="space-between" align="center" wrap="wrap" gap={3}>
            <Button
              as={RouterLink}
              to="/"
              leftIcon={<FaArrowLeft />}
              variant="ghost"
              color="gray.300"
              _hover={{ color: "primary", bg: "whiteAlpha.100" }}
              size="sm"
            >
              Back to portfolio
            </Button>
            <Button
              as="a"
              href={personalInfo.resumePdf}
              download
              leftIcon={<FaDownload />}
              variant="primary"
              size="sm"
              borderRadius="3px"
            >
              Download PDF
            </Button>
          </Flex>
        </AnimatedSection>

        <MotionBox
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Box
            bg="white"
            color="#1a1a1a"
            borderRadius="lg"
            shadow="2xl"
            overflow="hidden"
            className="resume-document"
            sx={{
              "@media print": {
                boxShadow: "none",
                borderRadius: 0,
              },
            }}
          >
            {/* Header */}
            <Box px={["24px", "40px", "48px"]} pt={["32px", "40px", "48px"]} pb={6}>
              <Heading
                as="h1"
                fontSize={["2xl", "3xl", "4xl"]}
                fontWeight={700}
                color="#1a1a1a"
                fontFamily="'League Spartan', sans-serif"
                lineHeight="1.1"
              >
                {personalInfo.fullName}
              </Heading>
              <Text
                fontSize={["sm", "md"]}
                color="#007D57"
                fontWeight={600}
                mt={2}
                maxW="600px"
              >
                {personalInfo.title}
              </Text>
              <Link
                href={personalInfo.githubUrl}
                isExternal
                fontSize="sm"
                color="#555"
                mt={1}
                display="inline-block"
                _hover={{ color: "#007D57" }}
              >
                {personalInfo.github}
              </Link>
            </Box>

            <Divider borderColor="gray.200" />

            {/* Two-column body matching PDF layout */}
            <Grid
              templateColumns={["1fr", "1fr", "1.4fr 1fr"]}
              gap={0}
              px={["24px", "40px", "48px"]}
              py={8}
            >
              {/* Left column: Experience + Education */}
              <Box pr={[0, 0, 8]} borderRight={[0, 0, "1px solid"]} borderColor="gray.200">
                <ResumeSection title="Experiencia relevante" delay={0.1}>
                  {experience.map((job, index) => (
                    <ResumeJob key={job.company} job={job} index={index} />
                  ))}
                </ResumeSection>

                <ResumeSection title="Educación" delay={0.3}>
                  <Stack spacing={4}>
                    {education.map((item, index) => (
                      <AnimatedSection key={index} delay={0.05 * index}>
                        <Text fontWeight={700} fontSize="sm" color="#1a1a1a">
                          {item.degree}
                        </Text>
                        {item.institution && (
                          <Text fontSize="sm" color="#555">
                            {item.institution}
                          </Text>
                        )}
                        <Text fontSize="xs" color="#666" fontFamily="'PT Mono', monospace">
                          {item.period}
                        </Text>
                      </AnimatedSection>
                    ))}
                  </Stack>
                </ResumeSection>
              </Box>

              {/* Right column: Skills */}
              <Box pl={[0, 0, 8]} pt={[8, 8, 0]}>
                <ResumeSection title="Habilidades" delay={0.2}>
                  <Stack spacing={6}>
                    {skillCategories.map((category, index) => (
                      <AnimatedSection key={category.title} delay={0.08 * index}>
                        <Text
                          fontWeight={700}
                          fontSize="xs"
                          textTransform="uppercase"
                          letterSpacing="0.08em"
                          color="#007D57"
                          mb={2}
                        >
                          {category.title}
                        </Text>
                        <Flex wrap="wrap" gap={2}>
                          {category.items.map((skill) => (
                            <Box
                              key={skill}
                              px={3}
                              py={1}
                              bg="#f0faf6"
                              border="1px solid"
                              borderColor="#b8e6d4"
                              borderRadius="full"
                              fontSize="xs"
                              fontWeight={500}
                              color="#333"
                            >
                              {skill}
                            </Box>
                          ))}
                        </Flex>
                      </AnimatedSection>
                    ))}
                  </Stack>
                </ResumeSection>
              </Box>
            </Grid>

            {/* Footer contact */}
            <Box
              px={["24px", "40px", "48px"]}
              py={5}
              bg="#f8f8f8"
              borderTop="1px solid"
              borderColor="gray.200"
            >
              <Flex
                direction={["column", "row"]}
                justify="space-between"
                align={["start", "center"]}
                gap={2}
                fontSize="sm"
                color="#555"
              >
                <Link href={`mailto:${personalInfo.email}`} _hover={{ color: "#007D57" }}>
                  {personalInfo.email}
                </Link>
                <Link href={personalInfo.portfolio} isExternal _hover={{ color: "#007D57" }}>
                  {personalInfo.portfolio}
                </Link>
              </Flex>
            </Box>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Resume;
