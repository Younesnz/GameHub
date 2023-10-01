import { HStack } from "@chakra-ui/react";
import { Query } from "../App";
import { FilterItem } from "./FilterItem";

interface Props {
  query: Query;
  setQuery: (query: Query) => void;
}
export const Filters = ({ query, setQuery }: Props) => {
  return (
    <HStack>
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
          value={query.search}
          onCancelClick={() => setQuery({ ...query, search: "" })}
        />
      )}
    </HStack>
  );
};
