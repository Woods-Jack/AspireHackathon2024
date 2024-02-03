import { HStack, Text, Box } from "@chakra-ui/react"

export const Feedback = () => {
  return(
    <HStack mb={12} gap={4}>
      <Text>What do you think of your Path?</Text>
      <Box width={10} height={10} bgColor='#AAAAAA' rounded={24} />
      <Box width={10} height={10} bgColor='#AAAAAA' rounded={24} />
    </HStack>
  )
}