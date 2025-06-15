import { Alert, Button, Paper, Typography } from "@mui/material";
import { Link, useLocation } from "react-router";

export default function NotFoundPage() {
  const { state } = useLocation();
  return (
    <Paper sx={{ p: 3 }}>
      <Typography gutterBottom variant="h4">
        Not Found Error
      </Typography>
      <Alert severity="error">Aradığınız kaynak bulunamadı.</Alert>
      <Button
        sx={{ m: 2 }}
        color="secondary"
        component={Link}
        to="/"
        variant="contained"
      >
        Anasayfa
      </Button>
    </Paper>
  );
}
