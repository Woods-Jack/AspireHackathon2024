import { Box } from "@chakra-ui/react";

interface PageWrapperProps {
  children: React.ReactNode;
}
export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return <Box padding="100px 40px 40px 40px">{children}</Box>;
};
