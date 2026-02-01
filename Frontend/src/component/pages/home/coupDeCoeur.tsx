import { Card } from "@mui/material";
import type { Livre } from "../../../models";

export function CoupDeCoeur( { favoriteList }: { favoriteList: Livre[] } ) {
  return (
    <Card>
      <h2>Coup de Coeur</h2>
      <p>Découvrez mes œuvres préférées et les raisons de mon attachement.</p>
    </Card>
  );
}
