import useData from "./useData";

export interface Platform {
  id: number;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  currentGenre?: number | null,
  currentPlatform?: number | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: currentGenre, parent_platforms: currentPlatform } },
    [currentGenre, currentPlatform]
  );

export default useGames;
