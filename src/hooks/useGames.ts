import useData from "./useData";

export interface Platform {
  id: number;
  slug: string;
}

interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (currentGenre?: number | null) =>
  useData<Game>("/games", { params: { genres: currentGenre } }, [currentGenre]);

export default useGames;
