"use client"

import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { VStack, Box, Flex, Heading, Text, Button, HStack, Image, Select, color} from "@chakra-ui/react"
import NextLink from 'next/link'
import { OtherLearners } from "./OtherLearners"
import { Feedback } from "./Feedback"
import { buildUserData } from '@/utils/buildUserData'
import { LoadingPage } from '../common/Loading'
import { UserProfileProps } from '../common/UserComponent'
import { FaArrowRight, FaBookmark } from 'react-icons/fa'

interface LearningPathProps {
  content: {
    learningPath: LearningPath[];
  };
  tldr: string;
  learners: UserProfileProps[];
}

interface LearningPath {
  title: string;
  length: string;
  image: string;
  description: string;
  id: number;
  justification: string;
}

const getMarcelData = async (llid:string) => {
  const response = await fetch("/api/marcel", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      llid,
    }),
  });
  const marcelData = await response.json();
  const dataString = `
    Name: ${marcelData.Name}
    Surname: ${marcelData.Surname}
    Skills: ${marcelData.Skills.join(', ')}
  `
  return dataString
};

const getCCData = async (llid:string) => {
  const response = await fetch("/api/cc", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      llid,
    }),
  });
  const ccData = await response.json();
  console.log('data', ccData)
  return ccData
};

export const LearningPath = ({ learners }: LearningPathProps) => {
  const searchParams = useSearchParams()

  const [learningPlan, setLearningPlan] = useState<any>({});
  const [speedTLDR, setSpeedTLDR] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getLearningPlan = async (theme: string, marcelData: string, ccData: string) => {
    try {
      const indexName = "courses";
      const getChain = "getLearningPathChain";
      const input = buildUserData(theme, marcelData, ccData);
      console.log('input', input);
      if (indexName) {
        const response = await fetch("/api/azure", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            getChain,
            indexName,
            input,
          }),
        });
        const plan = await response.json();
        setLearningPlan(plan);
        return plan;
      } else {
        console.log("No indexes found, please create an index");
      }
    } catch (error: any) {
      console.log("Error", error);
    }
  };

  const getSpeedTLDR = async (descriptions: string) => {
    try {
      const indexName = "courses";
      const getChain = "getSpeedTLDRChain";
      const input = descriptions;

      if (indexName) {
        const response = await fetch("/api/azure", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            getChain,
            indexName,
            input,
          }),
        });

        const res = await response.json();
        const tldr = res.kwargs.content;
        setSpeedTLDR(tldr);
      } else {
        console.log("No indexes found, please create an index");
      }
    } catch (error: any) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    async function generateLearningPlan(theme: string) {
      const marcelData = await getMarcelData('annravioli');
      const ccData = await getCCData('annravioli');
      console.log("MARCEL", ccData);
      const learningPlan = await getLearningPlan(theme.replace('_',' '), marcelData, ccData);
      const descriptions = learningPlan.learningPath
        .map((course: any) => course.description)
        .join(" ");
      await getSpeedTLDR(descriptions);
      setIsLoading(false);
    }
    const theme = searchParams.get('theme') || ''
    generateLearningPlan(theme);
  }, []);


  const { learningPath } = learningPlan;

  return isLoading ? (
    <LoadingPage />
  ) : (
    <Box>
      <Heading as="h1" fontSize="64px" mb={16}>
        Your Path
      </Heading>
      <Flex justifyContent='space-between' width='90%'>
        <Text mb={8} flex="2" maxWidth='70%'>
          {speedTLDR}
        </Text>
        <Flex direction="column" gap='15px'>
          <Button
            variant="outline"
            borderRadius="full"
            rightIcon={<FaBookmark />}
            background={color.lightGrey}
          >
            Save
          </Button>
          <Select
            width="200px"
            variant="filled"
            borderRadius="full"
            placeholder="Make Shorter"
            background={color.lightGrey}
          />
        </Flex>
      </Flex>

      <Feedback />
      {learningPath &&
        learningPath.map((course) => {
          const { title, id, length, image, description, justification } =
            course || {};
          const url = id
            ? `https://marcel.ai/classes/course/course:${id}`
            : "#";
          return (
            <Flex key={id} gap={12}>
              <VStack spacing={0} justifyContent="stretch">
                <Box rounded={48} minHeight={12} width={12} bgColor="#FE414D" />
                <Box width={1} bgColor="#FE414D" height="100%" />
              </VStack>
              <VStack alignItems="start" width="55%">
                <Heading as="h2" fontSize="32px" fontWeight="medium">
                  {title}
                </Heading>
                <Box
                  backgroundColor="#EEEEEE"
                  p={4}
                  mt={2}
                  mb={8}
                  rounded="2xl"
                >
                  <HStack spacing={4} alignItems="start">
                    <Image
                      src={image}
                      alt={`${title} course image`}
                      width={300}
                      height={200}
                      borderRadius="14"
                    />
                    <VStack alignItems="start">
                      <Text>{description}</Text>
                      <Text as='i'>{justification}</Text>
                    </VStack>
                  </HStack>
                  <Flex
                    mt={6}
                    width="100%"
                    justifyContent="space-between"
                    alignItems="end"
                  >
                    <Text>
                      <em>{length}</em>
                    </Text>
                    <NextLink href={url} passHref>
                      <Button
                        as='a'
                        bg={color.black}
                        borderRadius="14"
                        color={color.white}
                        gap="3px"
                        href={url}
                      >
                        Go to course
                        <FaArrowRight />
                      </Button>
                    </NextLink>
                  </Flex>
                </Box>
              </VStack>
              <OtherLearners learners={learners} />
            </Flex>
          );
        })}
      <VStack spacing={0} alignItems="start">
        <Box rounded={48} minHeight={12} width={12} bgColor="#FE414D" />
      </VStack>
    </Box>
  );
};
