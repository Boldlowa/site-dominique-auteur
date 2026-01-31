import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <AppBar color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" component="div">
          Dominique de Loppinot
        </Typography>

        {/* Navigation */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Accueil
          </Button>
          <Button color="inherit" component={Link} to="/livres  ">
            Mes livres
          </Button>
          <Button color="inherit" component={Link} to="/materiel">
            Matériel pédagogique
          </Button>
          <Button color="inherit" component={Link} to="/animation">
            Animations
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
