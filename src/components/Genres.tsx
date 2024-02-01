import {
  Badge,
  HStack,
  Image,
  List,
  ListItem,
  Spacer,
  Text,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { GenresSkeleton } from "./GenresSkeleton";
import useQueryStore from "../hooks/stores/queryStore";

export const Genres = () => {
  const { data: { results: data } = {}, isLoading, error } = useGenres();
  const currentGenre = useQueryStore((s) => s.query.genre);
  const setGenre = useQueryStore((s) => s.setGenre);
  const toast = useToast();
  const { colorMode } = useColorMode();
  const skeletonItems = new Array(15).fill(0);
  const secondaryColor = { dark: "gray.700", light: "gray.200" }[
    colorMode.toString()
  ];
  if (error)
    toast({
      title: "Getting the Genres List Failed!",
      description: error.message,
      duration: 5000,
      isClosable: true,
      status: "error",
      position: "top",
    });
  return (
    <List>
      <Text fontSize="xl" mb={3} fontWeight="bold" px={3}>
        Genres
      </Text>
      {isLoading &&
        skeletonItems.map((_, index) => (
          <ListItem
            key={index}
            borderBottom="1px"
            borderColor={secondaryColor}
            p={2}
            ml={2}
          >
            <GenresSkeleton />
          </ListItem>
        ))}
      {data?.map((genre) => (
        <ListItem
          key={genre.id}
          cursor="pointer"
          backgroundColor={genre.id === currentGenre?.id ? secondaryColor : ""}
          _hover={{
            backgroundColor: { dark: "gray.700", light: "gray.200" }[
              colorMode.toString()
            ],
          }}
          transition="background-color ease 0.3s"
          p={2}
          ml={2}
          borderRadius={5}
          borderBottom="1px"
          borderColor={secondaryColor}
          onClick={() => setGenre(genre)}
        >
          <HStack>
            <Image
              src={genre.image_background}
              objectFit="cover"
              width="40px"
              aspectRatio={1}
              borderRadius={10}
            />
            <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
              {genre.name}
            </Text>
            <Spacer />
            <Badge>{Math.round(genre.games_count / 1000)}k</Badge>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
