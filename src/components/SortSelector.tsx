import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface Props {
  sort: string;
  setSort: (sort: string) => void;
}
export const SortSelector = ({ sort, setSort }: Props) => {
  const sortData = [
    { value: "", label: "Relevance" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-released", label: "Rlease Date" },
    { value: "-rating", label: "Rating" },
    { value: "name", label: "Name" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Order By: {sortData.find((s) => s.value === sort)?.label}
      </MenuButton>
      <MenuList>
        {sortData.map((sort, index) => (
          <MenuItem key={index} onClick={() => setSort(sort.value)}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
