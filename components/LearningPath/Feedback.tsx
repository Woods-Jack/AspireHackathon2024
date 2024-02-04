import { color } from "@/theme/colors"
import { HStack, Text, Box, Button } from "@chakra-ui/react"
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa"

export const Feedback = () => {
  return(
    <HStack mb={12} gap={4} alignContent='center'>
      <Text>What do you think of your Path?</Text>
      <Button variant="round" bg={color.lightGrey}>
        <FaThumbsUp />
      </Button>
      <Button variant="round" colorScheme="red">
        <FaThumbsDown />
      </Button>
    </HStack>
  )
}