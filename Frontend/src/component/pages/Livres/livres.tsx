import { Box, Button, Grid, Typography } from "@mui/material";
import ViewListIcon from '@mui/icons-material/ViewList';
import AppsIcon from '@mui/icons-material/Apps';
import { useState } from "react";
import { useLivres } from "../../../utils/livresContext";
import { BookCard } from "../../commons/bookCard";

export function Livres() {
  const { livres } = useLivres();
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  return (
    <Box sx={{ display: "grid", gap: 3 }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center" }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
          Mes Livres
        </Typography>
        <Box sx={{ display: "flex", gap: 1, ml: "auto" }}>
          <Button
            variant={viewMode === "list" ? "contained" : "outlined"}
            onClick={() => setViewMode("list")}
            size="small"
            startIcon={<ViewListIcon />}
          >
            Ligne
          </Button>
          <Button
            variant={viewMode === "grid" ? "contained" : "outlined"}
            onClick={() => setViewMode("grid")}
            size="small"
            startIcon={<AppsIcon />}
          >
            Grille
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {livres.map((livre) => (
          <Grid
            item
            xs={12}
            sm={viewMode === "grid" ? 6 : 12}
            md={viewMode === "grid" ? 4 : 12}
            key={livre.id}
          >
            <BookCard book={livre} variant={viewMode} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}