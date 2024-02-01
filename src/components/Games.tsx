import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Flex,
  SimpleGrid,
  useToast,
  Text,
  Spinner,
} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { useEffect } from "react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useQueryStore from "../hooks/stores/queryStore";

export const Games = () => {
  const { query, setResultCount } = useQueryStore();
  const { data, error, isLoading, fetchNextPage, hasNextPage, count } =
    useGames(query);
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
    setResultCount(count || 0);
  }, [count]);
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
      <InfiniteScroll
        dataLength={data?.pages.length || 0}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={
          <Flex
            justify="center"
            align="center"
            maxW="50%"
            mx="auto"
            my="3"
            gap={2}
          >
            <Spinner />
            <Text>Loading Games</Text>
          </Flex>
        }
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing="4" p="4">
          {isLoading &&
            skeletonItems.map((_, i) => <GameCardSkeleton key={i} />)}

          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results?.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};
