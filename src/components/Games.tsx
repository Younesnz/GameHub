import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { List, ListItem, useToast } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

export const Games = () => {
  const { games, error } = useGames();
  const toast = useToast();

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
    <List>
      {games.map((game) => (
        <ListItem key={game.id}>{game.name}</ListItem>
      ))}
    </List>
  );
};
