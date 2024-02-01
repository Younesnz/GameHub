import { Flex } from "@chakra-ui/react";
import { FilterItem } from "./FilterItem";
import useQueryStore from "../hooks/stores/queryStore";

export const Filters = () => {
  const { query, setGenre, setPlatform, setSearch } = useQueryStore();
  return (
    <Flex gap={2} flexDir={{ base: "column", md: "row" }}>
      {query.genre && (
        <FilterItem
          label="Genre"
          value={query.genre.name}
          onCancelClick={() => setGenre(null)}
        />
      )}
      {query.platform && (
        <FilterItem
          label="Platform"
          value={query.platform.name}
          onCancelClick={() => setPlatform(null)}
        />
      )}
      {query.search && (
        <FilterItem
          label="Search"
          value={
            query.search.length <= 15
              ? query.search
              : query.search.slice(0, 15) + "..."
          }
          onCancelClick={() => setSearch("")}
        />
      )}
    </Flex>
  );
};
