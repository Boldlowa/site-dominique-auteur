import Grid from "@mui/material/Grid";
import { CoupDeCoeur } from "./coupDeCoeur";
import { Bubba } from "./bubba";
import { Anatole } from "./anatole";
import { NextEvent } from "./nextEvent";
import { useLivres } from "../../../utils/livresContext";
import { Typography } from "@mui/material";


export function Home() {
  const { livres } = useLivres();
  const favoriteList = livres.filter(book => book.Favorite === true);
  console.log("Favorite Books:", favoriteList);
  return (
    <Grid container direction="column">
      <Grid container justifyContent="center">
        <Grid size={10} marginTop={2}>
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
