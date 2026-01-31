import { Grid } from "@mui/material";

export function Footer() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        bgcolor: "#1976d2",
        color: "white",
        padding: 1,
      }}
    >
      <h5>@Dominique de Lopptinot 2026</h5>
    </Grid>
  );
}
