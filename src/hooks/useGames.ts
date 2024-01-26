import { Query } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatform";

// export interface Platform {
//   id: number;
//   slug: string;
// }

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (query: Query) => {
  const params = {
    genres: query.genre?.id,
    parent_platforms: query.platform?.id,
    ordering: query.order,
    search: query.search,
  };
  return useData<Game>("/games", ["games", { ...params }], {
    params,
  });
};

export default useGames;
