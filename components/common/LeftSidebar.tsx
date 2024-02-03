// LeftSidebar.js
import React from "react";
import {
  Box,
  VStack,
  Link,
  IconButton,
  Button,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { FaHome, FaUser } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { color } from "@/theme/colors";
const LeftSidebar = () => {
  return (
    <Box pos="fixed" left={0} top={0} h="100%" w="130px" bg={color.black} p="20px">
      <VStack spacing="4" h='100%' alignItems='center'>
        <Heading
          as="h1"
          aria-hidden={true}
          size="3xl"
          noOfLines={2}
          color="white"
          h='30%'
          textAlign='center'
        >
          {"FY \n PS"}
        </Heading>
        <Flex direction='column' height='100%' gap='10%'>
          <IconButton
            as="a"
            href="/"
            aria-label="Path"
            variant="ghost"
            outline="none"
            color="white"
            icon={<FaHome />}
            fontSize="40px"
          />
          <IconButton
            as="a"
            href="/"
            aria-label="Path"
            variant="ghost"
            outline="none"
            color="white"
            icon={<IoIosSchool />}
            fontSize="40px"
          />
          <IconButton
            as="a"
            href="/"
            aria-label="Profile"
            variant="ghost"
            color="white"
            icon={<FaUser />}
            fontSize="40px"
          />
        </Flex>
        <Flex h='100%' alignItems='end'>
        <IconButton
            as="a"
            href="/"
            aria-label="Profile"
            variant="ghost"
            color="white"
            icon={<FaUser />}
            fontSize="40px"
          />
        </Flex>
       
      </VStack>
    </Box>
  );
};

export default LeftSidebar;
