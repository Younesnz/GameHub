import { Card, CardHeader, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

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
      <CardHeader>{game.name}</CardHeader>
    </Card>
  );
};
