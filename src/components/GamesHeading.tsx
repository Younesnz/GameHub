import {
  Box,
  Flex,
  HStack,
  Heading,
  Hide,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import useQueryStore from "../hooks/stores/queryStore";

export const GamesHeading = () => {
  const { query, resultCount: count } = useQueryStore();
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
        fontSize={{ base: "xs", md: "sm", xl: "md" }}
        fontWeight="normal"
        py={1}
        px={2}
        bgColor={secondaryColor.bg}
        color={secondaryColor.text}
        borderRadius={6}
        mt={{ lg: "8px", xl: "10px" }}
      >
        {count.toLocaleString()} found
      </Text>
    );
  };
  return (
    <Box mb={5} ml={3}>
      <Flex
        flexDir={{ base: "column", sm: "row" }}
        alignItems={{ base: "start", sm: "center" }}
        gap={2}
      >
        <Hide below="sm">{query.search && <SearchText />}</Hide>
        <Heading fontSize={{ base: "xl", sm: "2xl", lg: "3xl", xl: "4xl" }}>
          {title}
        </Heading>
        {count > 0 && <GamesCount />}
      </Flex>
    </Box>
  );
};
