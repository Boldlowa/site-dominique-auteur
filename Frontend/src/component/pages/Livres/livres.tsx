import { Box } from "@mui/material";
import { useLivres } from "../../../utils/livresContext";
import { BookCard } from "../../commons/bookCard";

export function Livres() {
  const { livres } = useLivres();

  return (
    <>
      <h1>Mes Livres</h1>

      <Box
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        gap={16}
        margin={20}
      >
        {livres.map((livre) => (
          <BookCard key={livre.id} book={livre} />
        ))}
      </Box>
    </>
  );
}