import { Query } from "./stores/queryStore";
import { useInfiniteData } from "./useData";
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
  const result = useInfiniteData<Game>("/games", ["games", { ...params }], {
    params,
  });
  return { ...result, count: result.data?.pages[0].count };
};

export default useGames;
