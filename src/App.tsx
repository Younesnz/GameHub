import { Grid, GridItem, HStack, Show, Spacer } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { Games } from "./components/Games";
import { Genres } from "./components/Genres";
import { useState } from "react";
import { PlatformSelector } from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";
import { Genre } from "./hooks/useGenres";
import { SortSelector } from "./components/SortSelector";
import { Filters } from "./components/Filters";
import { GamesHeading } from "./components/GamesHeading";

export interface Query {
  genre: Genre | null;
  platform: Platform | null;
  order: string;
  search: string;
}
function App() {
  const [query, setQuery] = useState<Query>({ order: "" } as Query);
  const [resultCount, setResultCount] = useState(0);
  return (
    <Grid
      templateColumns={{ lg: "240px 1fr" }}
      gridTemplateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar
          setSearch={(newSearch) => {
            setQuery({ ...query, search: newSearch });
          }}
          search={query.search}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <Genres
            currentGenre={query.genre}
            setCurrentGenre={(newGenre) =>
              setQuery({ ...query, genre: newGenre })
            }
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <GamesHeading query={query} count={resultCount} />
        <HStack spacing={3} mx={4} mb={2}>
          <PlatformSelector
            currentPlatform={query.platform}
            setCurrentPlatform={(newPlatform) =>
              setQuery({
                ...query,
                platform: newPlatform,
              })
            }
          />
          <SortSelector
            sort={query.order}
            setSort={(newOrder) => setQuery({ ...query, order: newOrder })}
          />
          <Spacer />
          <Filters query={query} setQuery={setQuery} />
        </HStack>

        <Games query={query} setCount={setResultCount} />
      </GridItem>
    </Grid>
  );
}

export default App;
