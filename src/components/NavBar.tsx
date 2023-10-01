import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/GameHubLogo.png";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchBar } from "./SearchBar";

interface Props {
  setSearch: (search: string) => void;
  search: string;
}
export const NavBar = ({ setSearch, search }: Props) => {
  return (
    <HStack as="nav" py="0.5rem" px="2rem">
      <Image src={Logo} boxSize="4rem" />
      <Text as="h1">GameHub</Text>
      <SearchBar setSearch={setSearch} search={search} />
      <ColorModeSwitch />
    </HStack>
  );
};
