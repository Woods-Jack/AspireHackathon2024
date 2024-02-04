'use client'
import { color } from "@/theme/colors";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { PathComponent } from "./PathComponent";

export const PathGenerator = () => {
  const hardCoded = [
    {
      title: "Experience Engineering",
      description: "Explore you personalised Experience Engineering path.",
    },
    {
      title: "Generative AI",
      description: "Explore you personalised Generative AI path.",
    },
    {
      title: "Customer Experience",
      description: "Explore you personalised Customer Experience path.",
    },
  ];
  return (
    <Flex direction="column" w="100%" flex="2" gap="10px" mt="20px">
      <Heading as="h2" fontSize="36" noOfLines={1}>
        Generate your path
      </Heading>
      <Text color={color.grey} pr="5px">
        Personalised recommendations for courses that will help you upskill in
        relevant areas.
      </Text>
      {hardCoded.map((path, index) => (
        <PathComponent key={index} title={path.title} description={path.description} />
      ))}
    </Flex>
  );
};
