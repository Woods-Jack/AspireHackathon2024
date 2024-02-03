'use client'
import { color } from "@/theme/colors";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { PathComponent } from "./PathComponent";

export const PathGenerator = () => {
  const hardCoded = [
    {
      title: "Product Management",
      description: "theme1",
    },
    {
      title: "Data Capabilities",
      description: "theme1",
    },
    {
      title: "Agile Methodologies",
      description: "theme1",
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
