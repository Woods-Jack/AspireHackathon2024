import { VStack, Heading, Box, Flex } from "@chakra-ui/react"

interface LearnerProps {
  learners: []
}

export const OtherLearners = ({learners}:LearnerProps) => {

  return(
    <VStack alignItems='start'>
    <Heading as='h3' fontSize='32px' fontWeight={350}>Other SPEED Learners:</Heading>
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
  )
}