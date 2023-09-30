import useData from "./useData";

interface PlatformDetails {
  games_count: number;
}
export interface Platform {
  id: number;
  name: string;
  slug: string;
  platforms: PlatformDetails[];
}

export default () => useData<Platform>("/platforms/lists/parents");
