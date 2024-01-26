import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useGenres = () => useData<Genre>("/genres", ["genres"]);
// export default () =>
//   useQuery<Genre[], Error, Genre[]>({
//     queryKey: ["genres"],
//     queryFn: () =>
//       apiClient.get<Genre[]>("/genres").then((res) => {
//         console.log(res.data.results);
//         return res.data;
//       }),
//   });

export default useGenres;
