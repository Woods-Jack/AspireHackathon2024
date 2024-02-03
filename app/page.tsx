import { IndustryGraph } from "@/components/Dashboard/Graphs/IndustryGraph";
import MainInterface from "@/components/InputForm/MainInterface";
import { Header } from "@/components/common/Header";
import LeftSidebar from "@/components/common/LeftSidebar";
import { PageWrapper } from "@/components/common/PageWrapper";
import { Button, Flex, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <LeftSidebar />
      <PageWrapper>
        <Heading as="h1" fontSize="64" noOfLines={1} pb='60px'>
          Hi, Anne
        </Heading>
        <IndustryGraph />
      </PageWrapper>
    </>
  );
}
