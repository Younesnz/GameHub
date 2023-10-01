import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement, Spinner } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  setSearch: (search: string) => void;
}
export const SearchBar = ({ setSearch }: Props) => {
  const [isSearching, setSearching] = useState(false);
  const [timeOutId, setTimeOutId] = useState<number | undefined>(undefined);

  const handleSearch = (value: string) => {
    if (!value || value.length < 3) {
      clearTimeout(timeOutId);
      setSearching(false);
      return;
    }
    clearTimeout(timeOutId);
    setSearching(true);
    setTimeOutId(
      setTimeout(() => {
        setSearching(false);
        setSearch(value);
      }, 2000)
    );
  };
  return (
    <InputGroup mx={5}>
      <InputLeftElement>
        {isSearching ? <Spinner speed="0.5s" size="sm" /> : <SearchIcon />}
      </InputLeftElement>
      <Input
        placeholder="Search Games"
        borderRadius="full"
        variant="filled"
        onChange={(n) => handleSearch(n.target.value)}
      />
    </InputGroup>
  );
};
