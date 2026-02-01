import { Box, Card } from "@mui/material";
import type { Livre } from "../../models";

export function BookCard({ book }: { book: Livre }) {
  return (
    <Card sx={{ padding: 2, marginBottom: 2 }}>
        <Box sx={{ marginTop: 2, padding: 2, backgroundColor: "#727171",  height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}/>
        <h3>{book.Titre}</h3>
    </Card>
  );
}
