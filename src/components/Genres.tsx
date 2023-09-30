import { List, ListItem, useToast } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

export const Genres = () => {
  const { data, isLoading, error } = useGenres();
  const toast = useToast();
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
      {data.map((genre) => (
        <ListItem>
          {genre.name} ({Math.round(genre.games_count / 1000)}k)
        </ListItem>
      ))}
    </List>
  );
};
