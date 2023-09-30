import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { Games } from "./components/Games";
import { Genres } from "./components/Genres";
import { useState } from "react";
import { PlatformSelector } from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";

function App() {
  const [currentGenre, setCurrentGenre] = useState<number | null>(null);
  const [currentPlatform, setCurrentPlatform] = useState<Platform | null>(null);
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
            currentGenre={currentGenre}
            setCurrentGenre={setCurrentGenre}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector
          currentPlatform={currentPlatform}
          setCurrentPlatform={setCurrentPlatform}
        />
        <Games currentGenre={currentGenre} currentPlatform={currentPlatform} />
      </GridItem>
    </Grid>
  );
}

export default App;
