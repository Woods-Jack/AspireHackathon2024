import { BusinessGraph } from "@/components/Dashboard/Graphs/BusinessGraph";
import { IndustryGraph } from "@/components/Dashboard/Graphs/IndustryGraph";
import { PathGenerator } from "@/components/Dashboard/PathGenerator/PathGenerator";
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
        <Heading as="h1" fontSize="64" noOfLines={1} pb="60px">
          Hi, Anne
        </Heading>
        <Flex dir="row" w='100%' gap='60px' justifyContent='space-between'>
          <IndustryGraph />
          <BusinessGraph />
        </Flex>
        <Flex dir="row" w='100%' gap='60px' justifyContent='space-between'>

        <PathGenerator />
        <Flex flex='1'></Flex>
        </Flex>
      </PageWrapper>
    </>
  );
}
