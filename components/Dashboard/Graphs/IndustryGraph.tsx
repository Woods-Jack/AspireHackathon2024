import { Box, Flex, Heading, Select, Text } from "@chakra-ui/react";
import {color} from '../../../theme/colors'
export const IndustryGraph = () => {
  return (
    <Flex direction="column" gap='10px'>
      <Heading as="h2" fontSize="36" noOfLines={1}>
        The Industry Pulse
      </Heading>
      <Flex> 
      <Text color={color.grey}> Previous and estimated trend analysis for:</Text>
      <Select variant='filled' placeholder='Filled' />
      </Flex>
     
    </Flex>
  );
};
