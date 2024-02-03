import { Image, Box, Flex, Heading, Select, Text } from "@chakra-ui/react";
import { color } from "../../../theme/colors";
export const IndustryGraph = () => {
  return (
    <Flex direction="column" gap="10px" flex="2">
      <Heading as="h2" fontSize="36" noOfLines={1}>
        The Industry Pulse
      </Heading>

      {/* chart goes here */}
      <Flex direction="row" gap="20px">
        <Flex direction="column">
          <Flex alignItems="center">
            <Text color={color.grey} pr="5px">
              Previous and estimated trend analysis for:
            </Text>
            <Select width="100px" variant="filled" placeholder="GenAI" />
          </Flex>

          <Image src="/Graph.png" />
          <Text color={color.grey} pr="5px" fontSize="12px">
            Data from Google Trends.
          </Text>
        </Flex>

        <Box borderRadius="14" p="20px" bg={color.lightGrey} w="50%">
          <Text>
            AI overview Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum ut odio ac nisi convallis convallis. Donec auctor semper
            justo, ac placerat dui vehicula eu. Nullam consectetur lectus non
            nibh volutpat fermentum. Sed at eros vehicula, lacinia lorem eu,
            vulputate justo.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};
