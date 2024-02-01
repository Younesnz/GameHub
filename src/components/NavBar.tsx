import { Box, HStack, Hide, Image, Show, Spacer, Text } from "@chakra-ui/react";
import Logo from "../assets/GameHubLogo.png";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchBar } from "./SearchBar";

export const NavBar = () => {
  return (
    <>
      <HStack as="nav" py="0.5rem" px="2rem">
        <Image src={Logo} boxSize="4rem" />
        <Text as="h1">GameHub</Text>
        <Hide below="md">
          <SearchBar />
        </Hide>
        <Show below="md">
          <Spacer />
        </Show>
        <ColorModeSwitch />
      </HStack>
      <Show below="md">
        <Box maxW="90vw" mt={2} mb={4}>
          <SearchBar />
        </Box>
      </Show>
    </>
  );
};
