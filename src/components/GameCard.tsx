import {
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

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card overflow="hidden">
      <Image
        src={game.background_image}
        h={{ sm: "64", md: "52", lg: "48", xl: "40" }}
        objectFit="cover"
      />
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
