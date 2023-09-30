import {
  BsPlaystation,
  BsXbox,
  BsWindows,
  BsApple,
  BsNintendoSwitch,
  BsAndroid2,
} from "react-icons/bs";

import { SiAtari, SiSega, SiCommodore } from "react-icons/si";
import { PiLinuxLogoFill, PiNumberThreeBold } from "react-icons/pi";
import { FaAppStoreIos, FaGlobe, FaRegSmile } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

export const PlatformIcon = ({ platformSlug }: { platformSlug: string }) => {
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
    atari: SiAtari,
    sega: SiSega,
    "commodore-amiga": SiCommodore,
    "3do": PiNumberThreeBold,
    "neo-geo": FaRegSmile,
  };
  return <Icon as={platformMap[platformSlug]} color="gray.500" />;
};
