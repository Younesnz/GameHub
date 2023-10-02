import { HStack, Heading, Text, useColorMode } from "@chakra-ui/react";
import { Query } from "../App";
import { SearchIcon } from "@chakra-ui/icons";

interface Props {
  query: Query;
  count: number;
}
export const GamesHeading = ({ query, count }: Props) => {
  const { colorMode } = useColorMode();
  const title = `${query.platform?.name || ""} ${
    query.genre?.name || ""
  } Games`;
  const secondaryColor = {
    dark: { bg: "gray.700", text: "gray.400" },
    light: { bg: "gray.200", text: "gray.600" },
  }[colorMode];
  const SearchText = () => {
    const searchLable =
      query.search.length <= 15
        ? query.search
        : query.search.slice(0, 15) + "...";
    return (
      <HStack
        fontSize="sm"
        py={2}
        pl={3}
        pr={4}
        border="2px"
        borderColor="gray.500"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        borderRadius="full"
        fontWeight="medium"
        mt="6px"
      >
        <SearchIcon />
        <Text>{searchLable}</Text>
      </HStack>
    );
  };

  const GamesCount = () => {
    return (
      <Text
        fontSize="md"
        fontWeight="normal"
        py={1}
        px={2}
        bgColor={secondaryColor.bg}
        color={secondaryColor.text}
        borderRadius={6}
        alignSelf="center"
        mt="10px"
      >
        {count.toLocaleString()} found
      </Text>
    );
  };
  return (
    <Heading as="h1" fontSize="4xl" mb={5} ml={3}>
      <HStack>
        {query.search && <SearchText />}
        <Text>{title}</Text>
        {count > 0 && <GamesCount />}
      </HStack>
    </Heading>
  );
};
