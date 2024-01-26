import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Flex,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { Query } from "../App";
import { useEffect } from "react";
import React from "react";

interface Props {
  query: Query;
  setCount: (count: number) => void;
}
export const Games = ({ query, setCount }: Props) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(query);
  const toast = useToast();
  const skeletonItems = new Array(12).fill(0);
  if (error)
    toast({
      title: "Getting the Games List Failed!",
      description: error.message,
      duration: 5000,
      isClosable: true,
      status: "error",
      position: "top",
    });

  useEffect(() => {
    const count = data?.pages[0].count || 0;
    setCount(count), [count];
  });
  if (!isLoading && data?.pages?.length === 0)
    return (
      <Flex justify="center" alignItems="center">
        <Alert
          status="warning"
          borderRadius={8}
          m={5}
          variant="solid"
          flexDir="column"
          textAlign="center"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={3} mb={1} fontSize="lg">
            No Matching Games Found
          </AlertTitle>
          <AlertDescription maxW="sm">
            Please adjust your filters or try a different search to find the
            games you're looking for.
          </AlertDescription>
        </Alert>
      </Flex>
    );
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing="4" p="4">
        {isLoading && skeletonItems.map((_, i) => <GameCardSkeleton key={i} />)}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results?.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          mx="4"
          mb="4"
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </>
  );
};
