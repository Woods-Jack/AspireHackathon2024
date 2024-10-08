import { color } from "@/theme/colors";
import { Button, Flex, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
interface PathComponentProps {
  title: string;
  description: string;
}
export const PathComponent = (props: PathComponentProps) => {
  const urlSlug = props.title.replace(" ", "_");
  return (
    <Flex
      direction="row"
      bg={color.lightGrey}
      justifyContent="space-between"
      p={"20px 30px"}
      borderRadius="14"
    >
      <Flex direction="column">
        <Text>{props.title}</Text>
        <Text fontSize="12">{props.description}</Text>
      </Flex>
      <Button
        bg={color.black}
        borderRadius="14"
        color={color.white}
        gap="3px"
        as="a"
        href={`/your-path?theme=${urlSlug}`}
        _hover={{ bg: color.lightBlack}}
      >
        Explore your Path
        <FaArrowRight />
      </Button>
    </Flex>
  );
};
