import { SimpleGrid, useToast } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { Platform } from "../hooks/usePlatform";

interface Props {
  currentGenre: number | null;
  currentPlatform: Platform | null;
}
export const Games = ({ currentGenre, currentPlatform }: Props) => {
  const { data, error, isLoading } = useGames(
    currentGenre,
    currentPlatform?.id
  );
  const toast = useToast();
  const skeletonItems = new Array(12).fill(0);
  if (error)
    toast({
      title: "Getting the Games List Failed!",
      description: error,
      duration: 5000,
      isClosable: true,
      status: "error",
      position: "top",
    });

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing="4" p="4">
      {isLoading && skeletonItems.map((_, i) => <GameCardSkeleton key={i} />)}
      {data.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};
