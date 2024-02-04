import { color } from "@/theme/colors";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
export interface UserProfileProps {
  firstName: string
  lastName: string
  location: string
  bg?: string
}
const UserProfile = ({ firstName, lastName, location, bg="white" }: UserProfileProps) => {
  return (
    <Flex alignItems="center" m='10px'>
      <Avatar name={firstName} size="md" bg={bg} color="black" mr="4" />
      <Box>
        <Text fontWeight="medium"> {`${firstName} ${lastName}`}</Text>
        <Text color={color.grey} fontSize='12px'> {location}</Text>
      </Box>
    </Flex>
  );
};

export default UserProfile;
