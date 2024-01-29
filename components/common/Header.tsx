import { Box, Button, Flex, Link } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex
      h="100px"
      p="20px 15px"
      justifyContent="space-between"
      alignItems="center"
      background='#D9D9D9'
    >
      <Box bg="tomato" w="100px" p={4} color="white">
        logo
      </Box>

      <Flex gap='20px' alignItems='center'>
        <Link href="/" color="blue.400" _hover={{ color: "blue.500" }}>
          About
        </Link>
        <Button>LogIn</Button>
      </Flex>
    </Flex>
  );
};
