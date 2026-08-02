import { Box, Grid, Typography, Paper } from "@mui/material";
import { CoupDeCoeur } from "./coupDeCoeur";
import { Bubba } from "./bubba";
import { Anatole } from "./anatole";
import { NextEvent } from "./nextEvent";
import { useLivres } from "../../../utils/livresContext";
import { Typography } from "@mui/material";


export function Home() {
  const { livres } = useLivres();
  const favoriteList = livres.filter((book) => book.Favorite === true);

  return (
    <Grid container direction="column">
      <Grid container justifyContent="center">
        <Grid size={10} marginTop={2}>
          <CoupDeCoeur favoriteList={favoriteList} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Anatole />
        </Grid>
        <Grid item xs={12} md={4}>
          <Bubba />
        </Grid>
        <Grid item xs={12} md={8}>
          <NextEvent />
        </Grid>
      </Grid>
    </Box>
  );
}
