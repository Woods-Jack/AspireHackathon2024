import { color } from "@/theme/colors";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
export interface UserProfileProps {
  firstName: string
  lastName: string
  location: string
}
const UserProfile = ({ firstName, lastName, location }: UserProfileProps) => {
  return (
    <Flex alignItems="center">
      <Avatar name={firstName} size="md" bg="white" color="black" mr="4" />
      <Box>
        <Text fontWeight="medium"> {`${firstName} ${lastName}`}</Text>
        <Text color={color.grey} fontSize='12px'> {location}</Text>
      </Box>
    </Flex>
  );
};

export default UserProfile;
