import { CloseIcon } from "@chakra-ui/icons";
import { Box, HStack, IconButton, Text, useColorMode } from "@chakra-ui/react";

interface Props {
  label: string;
  value: string;
  onCancelClick: () => void;
}
export const FilterItem = ({ label, value, onCancelClick }: Props) => {
  const { colorMode } = useColorMode();
  const secondaryColor = { dark: "gray.300", light: "gray.700" }[colorMode];
  return (
    <Box
      py={1}
      px={2}
      border="1px"
      borderColor="gray.500"
      borderRadius={5}
      fontSize="xs"
      color={secondaryColor}
    >
      <HStack cursor="default" userSelect="none">
        <Text>{label + ":"}</Text>
        <Text fontWeight="bold">{value}</Text>
        <IconButton
          icon={<CloseIcon />}
          aria-label="Delete Filter"
          isRound={true}
          variant="ghost"
          size="0"
          fontSize="8px"
          colorScheme="red"
          onClick={() => onCancelClick()}
        />
      </HStack>
    </Box>
  );
};
