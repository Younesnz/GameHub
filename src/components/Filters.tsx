import { Flex } from "@chakra-ui/react";
import { Query } from "../App";
import { FilterItem } from "./FilterItem";

interface Props {
  query: Query;
  setQuery: (query: Query) => void;
}
export const Filters = ({ query, setQuery }: Props) => {
  return (
    <Flex gap={2} flexDir={{ base: "column", md: "row" }}>
      {query.genre && (
        <FilterItem
          label="Genre"
          value={query.genre.name}
          onCancelClick={() => setQuery({ ...query, genre: null })}
        />
      )}
      {query.platform && (
        <FilterItem
          label="Platform"
          value={query.platform.name}
          onCancelClick={() => setQuery({ ...query, platform: null })}
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
          onCancelClick={() => setQuery({ ...query, search: "" })}
        />
      )}
    </Flex>
  );
};
