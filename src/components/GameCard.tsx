import {
  AspectRatio,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { PlatformList } from "./PlatformList";
import { CriticScore } from "./CriticScore";
import cropImgUrl from "../services/cropImgUrl";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card overflow="hidden">
      <AspectRatio ratio={3 / 2}>
        <Image
          src={cropImgUrl(game.background_image)}
          h={{ sm: "64", md: "52", lg: "48", xl: "40" }}
          objectFit="cover"
        />
      </AspectRatio>

      <CardHeader py={2}>{game.name}</CardHeader>
      <CardBody pt={1} pb={4}>
        <HStack>
          <PlatformList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <Spacer />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};
