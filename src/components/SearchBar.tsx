import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useQueryStore from "../hooks/stores/queryStore";

export const SearchBar = () => {
  const [isSearching, setSearching] = useState(false);
  const [timeOutId, setTimeOutId] = useState<number | undefined>(undefined);
  const [inputValue, setInputValue] = useState("");
  const search = useQueryStore((s) => s.query.search);
  const setSearch = useQueryStore((s) => s.setSearch);
  useEffect(() => {
    if (search === "") {
      setInputValue("");
    }
  }, [search]);

  const handleSearch = (value: string) => {
    if (value.length < 3 && value.length > 0) {
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
        onChange={(e) => {
          setInputValue(e.target.value);
          handleSearch(e.target.value);
        }}
        value={inputValue}
      />
    </InputGroup>
  );
};
