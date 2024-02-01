import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useQueryStore from "../hooks/stores/queryStore";

export const SortSelector = () => {
  const order = useQueryStore((s) => s.query.order);
  const setOrder = useQueryStore((s) => s.setOrder);
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
        Order By: {sortData.find((s) => s.value === order)?.label}
      </MenuButton>
      <MenuList>
        {sortData.map((sort, index) => (
          <MenuItem key={index} onClick={() => setOrder(sort.value)}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
