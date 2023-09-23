import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <SunIcon boxSize="1rem" color="orange.300" />
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="purple"
        sx={{
          "span.chakra-switch__track:not([data-checked])": {
            backgroundColor: "orange.300",
          },
        }}
      />
      <MoonIcon boxSize="1rem" color="purple.300" />
    </HStack>
  );
};
