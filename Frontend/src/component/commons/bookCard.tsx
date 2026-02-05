import { Box, Card, Typography } from "@mui/material";
import type { Livre } from "../../models";

export function BookCard({ book }: { book: Livre }) {
  return (
    <Card sx={{ padding: 2, marginBottom: 2 }}>
        <Box sx={{ marginTop: 2, padding: 2, backgroundColor: "#727171",  height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}/>
        <Typography variant="h5" align="center" marginTop={2}>{book.Titre}</Typography>
    </Card>
  );
}
