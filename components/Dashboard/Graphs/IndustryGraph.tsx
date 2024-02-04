import { Image, Box, Flex, Heading, Select, Text } from "@chakra-ui/react";
import { color } from "../../../theme/colors";
import ChartComponent from "../Chart";
export const IndustryGraph = () => {
  return (
    <Flex direction="column" gap="auto" flex="2">
      <Heading as="h2" fontSize="36" noOfLines={1}>
        The Industry Pulse
      </Heading>

      {/* chart goes here */}
      <Flex direction="row" gap="20px">
        <Flex direction="column" flex="1">
          <Flex alignItems="center">
            <Text color={color.grey} pr="5px">
              Previous and estimated trend analysis for:
            </Text>
            <Select width="100px" variant="filled" placeholder="GenAI" />
          </Flex>
          <ChartComponent />
          <Text color={color.grey} pr="5px" fontSize="12px">
            Data from Google Trends.
          </Text>
        </Flex>

        <Box
          borderRadius="14"
          p="30px"
          bg={color.lightGrey}
          w="100%"
          mb="45px"
          flex="1"
        >
          <Flex h='100%' m='auto' alignContent='center' alignItems='center'>
          <Text>
           In recent years, generative AI has
            captured the imagination of the technology industry, heralded as a
            groundbreaking innovation with the potential to revolutionize
            various sectors. Its ability to autonomously generate content,
            images, and even entire virtual worlds has sparked widespread
            excitement and anticipation for its transformative capabilities.
            However, amidst the hype, there are also concerns about ethical
            implications, data privacy, and the potential for misuse,
            highlighting the need for responsible development and deployment of
            generative AI technologies.
          </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
