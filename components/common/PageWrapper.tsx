import { Box, Flex } from "@chakra-ui/react";

interface PageWrapperProps {
  children: React.ReactNode;
}
export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <Flex h="100%" w="100%" padding="60px" pl="190px" direction="column">
      {children}
    </Flex>
  );
};
