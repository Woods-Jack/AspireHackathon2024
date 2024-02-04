import { VStack, Heading, Box, Flex,Wrap } from "@chakra-ui/react";
import UserProfile, { UserProfileProps } from "../common/UserComponent";
import { color } from "@/theme/colors";

interface LearnerProps {
  learners: UserProfileProps[];
}



export const OtherLearners = ({ learners }: LearnerProps) => {

  return (
    <VStack alignItems="start" flex='2' maxWidth='40%'>
      <Heading as="h3" fontSize="32px" fontWeight='medium'>
        Other SPEED Learners:
      </Heading>
      <Box p={4} mt={2} mb={8} rounded="2xl">
        <Wrap justifyContent="flex-start" gap={4}>
          
          {learners.map((member, index) => (
            <UserProfile
              key={index}
              firstName={member.firstName}
              lastName={member.lastName}
              location={member.location}
              bg={color.lightGrey}
            />
          ))}
        </Wrap>
      </Box>
    </VStack>
  );
};
