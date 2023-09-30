import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { Games } from "./components/Games";
import { Genres } from "./components/Genres";
import { useState } from "react";
import { PlatformSelector } from "./components/PlatformSelector";

function App() {
  const [currentGenre, setCurrentGenre] = useState<number | null>(null);
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
        <PlatformSelector />
        <Games currentGenre={currentGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
