import { Flex, Box, VStack, Heading, Text } from "@chakra-ui/react";


interface OutputProps {
  content: {
    title: string,
    numberOfDays: string,
    location: string,
    activities: Activity[]
  }
}
interface Activity {
  title: string,
  length: string,
  description: string,
}

const Output = ({content}:OutputProps) => {
  const { title, numberOfDays, location, activities } = content || {} ;

  return(
    <Box w='75vw' bg='#f8f8ff'  p={4} mt={4} rounded='xl'>
      <Flex pb={4} justify='space-between'>
        <Heading as='h1'>{title}</Heading>
        <VStack alignItems='end' spacing={0}>
          {numberOfDays && <p>{`${numberOfDays} Days`}</p>}
          <em>{location}</em>
        </VStack>
      </Flex>
      {activities && activities.map((activity) => (
        <Box p={2} mt={4} mx={2} key={activity.title} bg='#f3f3f3'> 
          <Flex justify='space-between' alignItems='end' pb={1}>
            <Heading as='h2' size='lg'>{activity.title}</Heading>
            <em>{activity.length}</em>
          </Flex>
          <Text w='75%'>{activity.description}</Text>
        </Box>
      ))}
    </Box>
  )
}

export default Output;