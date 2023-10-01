import { SimpleGrid, useToast } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { Query } from "../App";
import { useEffect } from "react";

interface Props {
  query: Query;
  setCount: (count: number) => void;
}
export const Games = ({ query, setCount }: Props) => {
  const { data, error, isLoading, count } = useGames(query);
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

  useEffect(() => setCount(count), [count]);
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing="4" p="4">
      {isLoading && skeletonItems.map((_, i) => <GameCardSkeleton key={i} />)}
      {data.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};
