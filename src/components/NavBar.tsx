import { HStack, Image, Spacer, Text } from "@chakra-ui/react";
import Logo from "../assets/GameHubLogo.png";
import { ColorModeSwitch } from "./ColorModeSwitch";

export const NavBar = () => {
  return (
    <HStack as="nav" py="0.5rem" px="2rem">
      <Image src={Logo} boxSize="4rem" />
      <Text as="h1">GameHub</Text>
      <Spacer />
      <ColorModeSwitch />
    </HStack>
  );
};
