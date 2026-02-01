import Grid from "@mui/material/Grid";
import { CoupDeCoeur } from "./coupDeCoeur";
import { Bubba } from "./bubba";
import { Anatole } from "./anatole";
import { NextEvent } from "./nextEvent";
import { useLivres } from "../../../utils/livresContext";


export function Home() {
  const { livres } = useLivres();
  const favoriteList = livres.filter(book => book.Favorite === true);
  console.log("Favorite Books:", favoriteList);
  return (
    <Grid container direction="column">
      <h1>Bienvenue sur le site de Dominique de Loppinot</h1>
      <Grid container justifyContent="center">
        <Grid size={10}>
          <CoupDeCoeur favoriteList={favoriteList} />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" spacing={2} mt="1em">
        <Grid size={5}>
          <Anatole />
        </Grid>
        <Grid size={5}>
          <Bubba />
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid size={10}>
          <NextEvent />
        </Grid>
      </Grid>
    </Grid>
  );
}
