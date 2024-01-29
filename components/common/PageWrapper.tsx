import { Box } from "@chakra-ui/react";

interface PageWrapperProps {
  children: React.ReactNode;
}
export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return <Box padding={{ lg: 100, md: 50, sm: 30, base: 10 }}>{children}</Box>;
};
