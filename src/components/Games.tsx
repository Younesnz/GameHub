import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { List, ListItem, useToast } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}
interface GameResult {
  count: number;
  results: Game[];
}
export const Games = () => {
  const [games, setGames] = useState<Game[]>([]);
  const toast = useToast();
  useEffect(() => {
    apiClient
      .get<GameResult>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => showToast(err.message));
    return () => {};
  }, []);
  const showToast = (error: string) => {
    toast({
      title: "Getting the Games List Failed!",
      description: error,
      duration: 5000,
      isClosable: true,
      status: "error",
      position: "top",
    });
  };
  return (
    <List>
      {games.map((game) => (
        <ListItem key={game.id}>{game.name}</ListItem>
      ))}
    </List>
  );
};
