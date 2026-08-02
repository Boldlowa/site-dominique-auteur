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
    <Card sx={{ padding: 2, marginBottom: 2 }}>
        <Box sx={{ marginTop: 2, padding: 2, backgroundColor: "#727171",  height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}/>
        <Typography variant="h5" align="center" marginTop={2}>{book.Titre}</Typography>
    </Card>
  );
}
