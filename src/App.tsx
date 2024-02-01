import {
  Box,
  Grid,
  GridItem,
  HStack,
  Hide,
  Show,
  Spacer,
} from "@chakra-ui/react";
import { Filters } from "./components/Filters";
import { FiltersDrawer } from "./components/FiltersDrawer";
import { Games } from "./components/Games";
import { GamesHeading } from "./components/GamesHeading";
import { Genres } from "./components/Genres";
import { NavBar } from "./components/NavBar";
import { PlatformSelector } from "./components/PlatformSelector";
import { SortSelector } from "./components/SortSelector";

function App() {
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
          <Genres />
        </GridItem>
      </Show>

      <GridItem area="main">
        <GamesHeading />
        <Hide below="md">
          <HStack spacing={3} mx={4} mb={2}>
            <PlatformSelector />
            <SortSelector />
            <Spacer />
            <Hide below="xl">
              <Filters />
            </Hide>
          </HStack>
        </Hide>
        <Show below="md">
          <FiltersDrawer />
        </Show>
        <Hide above="xl">
          <Box ml={4} mt={3}>
            <Filters />
          </Box>
        </Hide>
        <Games />
      </GridItem>
    </Grid>
  );
}

export default App;
