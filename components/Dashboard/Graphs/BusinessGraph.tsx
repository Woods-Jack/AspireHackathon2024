import { Image, Flex, Heading, Select, Text } from "@chakra-ui/react";
import { color } from "../../../theme/colors";
export const BusinessGraph = () => {
  return (
    <Flex direction="column" gap="10px" flex="1">
      <Heading as="h2" fontSize="36" noOfLines={1}>
        Publicis Sapient at glance
      </Heading>
      <Heading as="h2" fontSize="24" noOfLines={1}>
        By Client Demand
      </Heading>
      <Text color={color.grey} pr="5px">
        Objectives for the next quarter:
      </Text>
      <Image src="/image-2.png" />
      <Text color={color.grey} pr="5px" fontSize="12px">
        Word cloud generated from business input.
      </Text>
    </Flex>
  );
};
