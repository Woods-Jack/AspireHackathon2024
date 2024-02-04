import { Flex, Heading } from "@chakra-ui/react";
import { CommunityOverview } from "./CommunityOverview";
import peopleData from "../../../data/dummy-users.json";

export const Community = () => {
  return (
    <Flex direction="column" flex="1">
      <Heading as="h2" fontSize="36" noOfLines={1} pb="30px" pt="30px">
        Trending Communities{" "}
      </Heading>
      <Flex gap="10px">
        <CommunityOverview
          title="GenAI"
          endorsement="Endorsed by Vinci Rufus, Nigel Vaz and 3 more."
          members={peopleData.people}
        />
        <CommunityOverview
          title="WDG"
          endorsement="Endorsed by Alice Pacuraru, Nilusha Perera and 1 more."
          members={peopleData.people}
        />
      </Flex>
    </Flex>
  );
};
