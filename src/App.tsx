import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { Games } from "./components/Games";
import { Genres } from "./components/Genres";
import { useState } from "react";
import { PlatformSelector } from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";

export interface Query {
  genre: number | null;
  platform: Platform | null;
}
function App() {
  const [query, setQuery] = useState<Query>({} as Query);
  // const [currentGenre, setCurrentGenre] = useState<number | null>(null);
  // const [currentPlatform, setCurrentPlatform] = useState<Platform | null>(null);
  return (
    <Grid
      templateColumns={{ lg: "240px 1fr" }}
      gridTemplateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
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
        <PlatformSelector
          currentPlatform={query.platform}
          setCurrentPlatform={(newPlatform) =>
            setQuery({
              ...query,
              platform: newPlatform,
            })
          }
        />
        <Games query={query} />
      </GridItem>
    </Grid>
  );
}

export default App;
