import { Flex, Box, Heading, VStack, Text } from "@chakra-ui/react";

interface OutputProps {
  content: {
    title: string;
    numberOfDays: string;
    location: string;
    activities: Activity[];
  };
}
interface Activity {
  title: string;
  length: string;
  description: string;
}

const Output = ({ content }: OutputProps) => {
  const { title, numberOfDays, location, activities } = content || {};

  return (
    <>
      <Flex>
        <VStack>
          <Heading as="h1" size="md" noOfLines={1} pt="10">
            {title}
          </Heading>
          <Text>{numberOfDays}</Text>
          <Text as='i'>{location}</Text>
        </VStack>
      </Flex>
      {activities &&
        activities.map((activity) => (
          <Box key={activity.title}>
            <Flex>
              <h2>{activity.title}</h2>
              <Text as='i'>{activity.length}</Text>
            </Flex>
            <p>{activity.description}</p>
          </Box>
        ))}
    </>
  );
};

export default Output;
