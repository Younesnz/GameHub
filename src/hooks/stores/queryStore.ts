import { create } from "zustand";
import { Genre } from "../useGenres";
import { Platform } from "../usePlatform";

export interface Query {
  genre?: Genre | null;
  platform?: Platform | null;
  order?: string;
  search: string;
}

interface QueryStore {
  query: Query;
  resultCount: number;
  setGenre: (genre: Genre | null) => void;
  setPlatform: (platform: Platform | null) => void;
  setOrder: (order: string) => void;
  setSearch: (search: string) => void;
  setResultCount: (count: number) => void;
}

const useQueryStore = create<QueryStore>((set) => ({
  query: { search: "" },
  resultCount: 0,
  setGenre: (genre) => set((store) => ({ query: { ...store.query, genre } })),
  setPlatform: (platform) =>
    set((store) => ({ query: { ...store.query, platform } })),
  setOrder: (order) => set((store) => ({ query: { ...store.query, order } })),
  setSearch: (search) => set(() => ({ query: { search } })),
  setResultCount: (count) => set(() => ({ resultCount: count })),
}));

export default useQueryStore;
