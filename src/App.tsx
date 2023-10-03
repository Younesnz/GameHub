import {
  Grid,
  GridItem,
  HStack,
  Hide,
  Show,
  Spacer,
  Box,
} from "@chakra-ui/react";
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
import { FiltersDrawer } from "./components/FiltersDrawer";

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
        <Hide below="md">
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
            <Hide below="xl">
              <Filters query={query} setQuery={setQuery} />
            </Hide>
          </HStack>
        </Hide>
        <Show below="md">
          <FiltersDrawer query={query} setQuery={setQuery} />
        </Show>
        <Hide above="xl">
          <Box ml={4} mt={3}>
            <Filters query={query} setQuery={setQuery} />
          </Box>
        </Hide>
        <Games query={query} setCount={setResultCount} />
      </GridItem>
    </Grid>
  );
}

export default App;
