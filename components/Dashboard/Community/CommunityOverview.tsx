import { color } from "@/theme/colors";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface CommunityOverviewProps {
  title: string;
  endorsement: string;
  members: [];
}
export const CommunityOverview = (props: CommunityOverviewProps) => {
  return (
    <Flex
      direction="column"
      bg={color.lightGrey}
      borderRadius="14"
      w="245px"
      gap="10px"
      padding={"15px"}
    >
      <Flex direction="row" gap='10px'>
        <Image h='64px' src="/community.png" />
        <Box pb="10px">
          <Text fontWeight='600'>{props.title}</Text>
          <Text>{props.endorsement}</Text>
        </Box>
      </Flex>

      <Text>Members:</Text>
    </Flex>
  );
};
