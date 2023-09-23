import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/GameHubLogo.png";

export const NavBar = () => {
  return (
    <HStack>
      <Image src={Logo} boxSize="4rem" />
      <Text as="h1">GameHub</Text>
    </HStack>
  );
};
