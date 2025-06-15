import { Alert, Button, Paper, Typography } from "@mui/material";
import { Link, useLocation } from "react-router";

export default function ServerErrorPage() {
  const { state } = useLocation();
  return (
    <Paper sx={{ p: 3 }}>
      {state?.error ? (
        <>
          <Typography gutterBottom variant="h4">
            {state.error.message} - {state.status}
          </Typography>
          <Alert severity="error">
            {state.error.details || "Bilinmeyen bir hata oluştu."}
          </Alert>
        </>
      ) : (
        <>
          <Typography variant="h4">Server Error</Typography>
          <Alert severity="error">Bilinmeyen bir hata oluştu.</Alert>
        </>
      )}
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
