import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { Games } from "./components/Games";

function App() {
  return (
    <Grid
      templateColumns={{ lg: "200px 1fr" }}
      gridTemplateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="coral">
          Aside
        </GridItem>
      </Show>

      <GridItem area="main">
        <Games />
      </GridItem>
    </Grid>
  );
}

export default App;
