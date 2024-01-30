import { Flex, Box } from "@chakra-ui/react";


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
    <>
      <Flex>
        <h1>{title}</h1>
        <p>{numberOfDays}</p>
        <em>{location}</em>
      </Flex>
      {activities && activities.map((activity) => (
        <Box key={activity.title}>
          <Flex>
            <h2>{activity.title}</h2>
            <em>{activity.length}</em>
          </Flex>
          <p>{activity.description}</p>
        </Box>
      ))}
    </>
  )
}

export default Output;