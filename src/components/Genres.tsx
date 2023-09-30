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
import useGenres, { Genre } from "../hooks/useGenres";
import { GenresSkeleton } from "./GenresSkeleton";

interface Props {
  currentGenre: Genre | null;
  setCurrentGenre: (genre: Genre | null) => void;
}

export const Genres = ({ currentGenre, setCurrentGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const toast = useToast();
  const { colorMode } = useColorMode();
  const skeletonItems = new Array(15).fill(0);
  const secondaryColor = { dark: "gray.700", light: "gray.200" }[
    colorMode.toString()
  ];
  if (error)
    toast({
      title: "Getting the Genres List Failed!",
      description: error,
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
      {data.map((genre) => (
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
          onClick={() => setCurrentGenre(genre)}
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
