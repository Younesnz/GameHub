import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <SunIcon boxSize="1rem" />
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <MoonIcon boxSize="1rem" />
    </HStack>
  );
};
