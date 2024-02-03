import { VStack, Box, Heading, Text, Button} from "@chakra-ui/react"
import NextLink from 'next/link'

interface LearningPathProps {
  content: {
    learningPath: LearningPath[]
  }
  tldr: string;
}

interface LearningPath {
  title: string,
  length: string,
  image: string,
  description: string,
  id: number;
}

export const LearningPath = ({content, tldr}:LearningPathProps) => {
  const { learningPath } = content || {};
  return(
    <Box>
    <Text>{tldr}</Text>
    {learningPath && learningPath.map((course) => {
      const { title, id, length, image, description} = course || {};
      const url = id ? `https://marcel.ai/classes/course/course:${id}` : '#'
      return (
        <VStack key={course.title}>
          <Heading as='h2'>{title}</Heading>
          <Text>{length}</Text>
          <img src={image} alt={`${title} course image`} width={300} height={200} />
          <Text>{description}</Text>
          <NextLink href={url} passHref>
            <Button as="a">
              Get Started
            </Button>
          </NextLink>
        </VStack>
        
      )
    })}
  
  </Box>
)}