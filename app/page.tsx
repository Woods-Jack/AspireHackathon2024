import MainInterface from "@/components/InputForm/MainInterface";
import { Header } from "@/components/common/Header";
import { PageWrapper } from "@/components/common/PageWrapper";
import { Button, Flex, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Header />
      <PageWrapper>
        {/* <MainInterface /> */}
        <Heading textAlign="center" size="lg" fontSize="75px">
          Welcome
        </Heading>
        <Flex w="100%" justifyContent='center' pt="12">
          <Button as="a" href="/form">
            Try out our tool
          </Button>
        </Flex>
      </PageWrapper>
    </>
  );
}
