import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import type { Livre } from "../../models";

const truncateText = (text: string, max = 120) =>
  text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;

export function BookCard({
  book,
  variant = "grid",
}: {
  book: Livre;
  variant?: "grid" | "list";
}) {
  const isList = variant === "list";
  const truncated = truncateText(book.Resume, isList ? 110 : 90);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: isList ? { xs: "column", sm: "row" } : "column",
        width: "100%",
        maxWidth: isList ? 960 : "100%",
        alignSelf: "stretch",
        height: "100%",
        boxShadow: "0 14px 35px rgba(15, 23, 42, 0.08)",
        transition: "transform 220ms ease, box-shadow 220ms ease",
        '&:hover': {
          transform: "translateY(-4px)",
          boxShadow: "0 24px 55px rgba(15, 23, 42, 0.14)",
        },
      }}
    >
      <CardMedia
        component="img"
        height={isList ? undefined : 220}
        image={book.LienImage || "https://via.placeholder.com/360x220?text=Couverture+indisponible"}
        alt={book.Titre}
        sx={{
          width: isList ? { xs: "100%", sm: 220 } : "100%",
          height: isList ? { xs: 220, sm: 180 } : 220,
          objectFit: "cover",
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <CardContent sx={{ flexGrow: 1, py: 2, px: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
            {book.Titre}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
            {truncated}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between", px: 3, pb: 2 }}>
          <Button size="small" variant={book.Dispo ? "contained" : "outlined"} disabled={!book.Dispo}>
            {book.Dispo ? "Disponible" : "Indisponible"}
          </Button>
          <Button size="small" component="a" href={book.LienAchat} target="_blank" rel="noreferrer">
            Voir
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}
