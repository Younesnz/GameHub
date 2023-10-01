import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { Games } from "./components/Games";
import { Genres } from "./components/Genres";
import { useState } from "react";
import { PlatformSelector } from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";
import { Genre } from "./hooks/useGenres";
import { SortSelector } from "./components/SortSelector";

export interface Query {
  genre: Genre | null;
  platform: Platform | null;
  order: string;
  search: string;
}
function App() {
  const [query, setQuery] = useState<Query>({ order: "" } as Query);
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
        <HStack spacing={3} ml={4} mb={2}>
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
        </HStack>

        <Games query={query} />
      </GridItem>
    </Grid>
  );
}

export default App;
