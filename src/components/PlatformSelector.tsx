import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Badge,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import { PlatformIcon } from "./PlatformIcon";
import useQueryStore from "../hooks/stores/queryStore";

const renderGameCount = (count: number) => {
  if (count >= 100_000) return Math.round(count / 1000) + "K";
  if (count >= 1000) return (count / 1000).toFixed(1) + "K";
  return count.toString();
};
export const PlatformSelector = () => {
  const { data: { results: data } = {} } = usePlatform();
  const currentPlatform = useQueryStore((s) => s.query.platform);
  const setPlatform = useQueryStore((s) => s.setPlatform);
  return (
    <Menu>
      <MenuButton
        as={Button}
        leftIcon={
          currentPlatform ? (
            <PlatformIcon platformSlug={currentPlatform.slug} />
          ) : undefined
        }
        rightIcon={<ChevronDownIcon />}
      >
        {currentPlatform ? currentPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.map((platform) => (
          <MenuItem
            key={platform.id}
            transition="all ease 0.3s"
            onClick={() => {
              setPlatform(platform);
            }}
          >
            <HStack spacing={2} minW="240px">
              <PlatformIcon platformSlug={platform.slug} />
              <Text>{platform.name}</Text>
              <Spacer />
              <Badge>
                {renderGameCount(
                  platform.platforms.reduce(
                    (acc, current) => acc + current.games_count,
                    0
                  )
                )}
              </Badge>
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
