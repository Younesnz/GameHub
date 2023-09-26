import {
  BsPlaystation,
  BsXbox,
  BsWindows,
  BsApple,
  BsNintendoSwitch,
  BsAndroid2,
} from "react-icons/bs";

import { PiLinuxLogoFill } from "react-icons/pi";
import { FaAppStoreIos, FaGlobe } from "react-icons/fa";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
export const PlatformList = ({ platforms }: Props) => {
  const platformMap: { [key: string]: IconType } = {
    pc: BsWindows,
    playstation: BsPlaystation,
    xbox: BsXbox,
    mac: BsApple,
    android: BsAndroid2,
    linux: PiLinuxLogoFill,
    ios: FaAppStoreIos,
    web: FaGlobe,
    nintendo: BsNintendoSwitch,
  };
  return (
    <HStack>
      {platforms.map((p) => (
        <Icon as={platformMap[p.slug]} color="gray.500" key={p.id} />
      ))}
    </HStack>
  );
};
