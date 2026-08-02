import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "rgba(255,255,255,0.92)",
        color: "#0f172a",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 1 }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
          Dominique de Loppinot
        </Typography>

        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          <Button color="inherit" component={Link} to="/" sx={{ textTransform: "none" }}>
            Accueil
          </Button>
          <Button color="inherit" component={Link} to="/livres" sx={{ textTransform: "none" }}>
            Mes livres
          </Button>
          <Button color="inherit" component={Link} to="/materiel" sx={{ textTransform: "none" }}>
            Matériel pédagogique
          </Button>
          <Button color="inherit" component={Link} to="/animation" sx={{ textTransform: "none" }}>
            Animations
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
