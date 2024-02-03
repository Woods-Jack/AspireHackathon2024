"use client"

import { VStack, Box, Flex, Heading, Text, Button, HStack} from "@chakra-ui/react"
import NextLink from 'next/link'

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


export const LearningPath = ({content, tldr, learners}:LearningPathProps) => {
  const { learningPath } = content || {};

  const onSubmit = async (e:any) => {
    e.preventDefault()
    await callBackend();
  }

  return(
    <Box>
      <Heading as='h1' fontSize='64px' mb={16}>Your Path</Heading>
    <Text mb={12}>{tldr}</Text>
    {learningPath && learningPath.map((course) => {
      const { title, id, length, image, description, justification } = course || {};
      const url = id ? `https://marcel.ai/classes/course/course:${id}` : '#'
      return (
        <Flex key={id} gap={12}>
          <VStack spacing={0} justifyContent='stretch'>
            <Box rounded={48} minHeight={12} width={12} bgColor='#FE414D'/>
            <Box width={1} bgColor='#FE414D' height='100%'/>
          </VStack>
          <VStack alignItems='start' maxWidth='45%'>
            <Heading as='h2' fontSize='32px' >{title}</Heading>
            <Box backgroundColor='#EEEEEE' p={4} mt={2} mb={8} rounded='2xl'>
              <HStack spacing={4} alignItems='start'>
                <img src={image} alt={`${title} course image`} width={300} height={200} />
                <VStack alignItems='start'>
                  <Text>{length}</Text>
                  <Text>{description}</Text>
                  <Text>{justification}</Text>
                </VStack>
              </HStack>
            <Flex mt={6} width='100%' justifyContent='end'>
              <NextLink href={url} passHref>
                  <Button as="a" backgroundColor='black' textColor='white' onClick={onSubmit}>
                    Go to course
                  </Button>
                </NextLink>
            </Flex>
            </Box>
          </VStack>
          <VStack alignItems='start'>
            <Heading as='h3' fontSize='32px'>Other SPEED Learners:</Heading>
            <Box  p={4} mt={2} mb={8} rounded='2xl'>
              <Flex justifyContent='flex-start' gap={4}>
                {learners.map((profile:any) => (
                  <Box key={profile.llid}>
                    <p>{profile.name}</p>
                  </Box>
                ))}
              </Flex>
            </Box>
          </VStack>
        </Flex>
        
        
      )
    })}
    <VStack spacing={0} alignItems='start'>
      <Box rounded={48} minHeight={12} width={12} bgColor='#FE414D'/>
    </VStack>
  
  </Box>
)}