import { Box, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "#111827",
        color: "#f8fafc",
        py: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        © 2026 Dominique de Loppinot
      </Typography>
    </Box>
  );
}
