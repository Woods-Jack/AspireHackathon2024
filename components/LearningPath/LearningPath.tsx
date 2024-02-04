"use client"

import React, { useEffect, useState } from 'react'
import { VStack, Box, Flex, Heading, Text, Button, HStack} from "@chakra-ui/react"
import NextLink from 'next/link'
import { OtherLearners } from "./OtherLearners"
import { Feedback } from "./Feedback"
import { buildUserData } from '@/utils/buildUserData'
import { LoadingPage } from '../common/Loading'

interface LearningPathProps {
  content: {
    learningPath: LearningPath[]
  }
  tldr: string;
  learners: [];
}

interface LearningPath {
  title: string,
  length: string,
  image: string,
  description: string,
  id: number;
  justification: string;
}



const callBackend = async() => {
  const response = await fetch('/api/backend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      llid: 'jacwoods1',
    }),
  });
  console.log('response', response);
}


export const LearningPath = ({learners}:LearningPathProps) => {
  const [learningPlan, setLearningPlan] = useState<any>({});
  const [speedTLDR, setSpeedTLDR] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getLearningPlan = async() => {
    try {
      const indexName = 'courses';
      const getChain = 'getLearningPathChain';
      const input = buildUserData('AI');
  
      if (indexName) {
        const response = await fetch('/api/azure', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            getChain,
            indexName,
            input
          }),
        });
        const plan = await response.json();
        setLearningPlan(plan);
        return plan;
      } else {
        console.log('No indexes found, please create an index')
      }
  
  
    } catch(error: any) {
      console.log('Error', error)
    }
  }
  
  const getSpeedTLDR = async (descriptions: string) => {
    try {
      const indexName = 'courses';
      const getChain = 'getSpeedTLDRChain';
      const input = descriptions;
  
      if (indexName) {
        const response = await fetch('/api/azure', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            getChain,
            indexName,
            input
          }),
        });
  
        const res = await response.json();
        const tldr = res.kwargs.content;
        console.log('speedTLDR',tldr)
        setSpeedTLDR(tldr)
  
      } else {
      console.log('No indexes found, please create an index')
      } 
    } catch(error: any) {
      console.log('Error', error)
    }
  }

  const onSubmit = async (e:any) => {
    e.preventDefault()
    await callBackend();
  }

  useEffect(() => {
    async function generateLearningPlan() {
      const learningPlan = await getLearningPlan();
      const descriptions = learningPlan.learningPath.map((course: any) => course.description).join(' ');
      await getSpeedTLDR(descriptions);
      setIsLoading(false);
    }
    generateLearningPlan();
  },[]);
  
  const { learningPath } = learningPlan;
  return isLoading ? (<LoadingPage />) : (
    <Box>
      <Heading as='h1' fontSize='64px' fontWeight={300} mb={16}>Your Path</Heading>
      <Text mb={12}>{speedTLDR}</Text>
      <Feedback />
      {learningPath && learningPath.map((course) => {
        const { title, id, length, image, description, justification } = course || {};
        const url = id ? `https://marcel.ai/classes/course/course:${id}` : '#'
        return (
          <Flex key={id} gap={12}>
            <VStack spacing={0} justifyContent='stretch'>
              <Box rounded={48} minHeight={12} width={12} bgColor='#FE414D'/>
              <Box width={1} bgColor='#FE414D' height='100%'/>
            </VStack>
            <VStack alignItems='start' maxWidth='50%'>
              <Heading as='h2' fontSize='32px' fontWeight={350}>{title}</Heading>
              <Box backgroundColor='#EEEEEE' p={4} mt={2} mb={8} rounded='2xl'>
                <HStack spacing={4} alignItems='start'>
                  <img src={image} alt={`${title} course image`} width={300} />
                  <VStack alignItems='start'> 
                    <Text>{description}</Text>
                    <Text>{justification}</Text>
                  </VStack>
                </HStack>
              <Flex mt={6} width='100%' justifyContent='space-between' alignItems='end'>
                <Text><em>{length}</em></Text>
                <NextLink href={url} passHref>
                  <Button as="a" backgroundColor='black' textColor='white' onClick={onSubmit}>
                    Go to course
                  </Button>
                </NextLink>
              </Flex>
              </Box>
            </VStack>
            <OtherLearners learners={learners} />
          </Flex>
        )
     })}
    <VStack spacing={0} alignItems='start'>
      <Box rounded={48} minHeight={12} width={12} bgColor='#FE414D'/>
    </VStack>
  </Box>
)}