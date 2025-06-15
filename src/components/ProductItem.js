import { Grid, Paper, Typography } from "@mui/material";

export default function ProductItem({ product }) {
  return (
    <Grid container spacing={2}>
      <Grid size={{ sm: 6, md: 5, lg: 4, xs: 12 }}>
        <Paper>
          <img
            src={`http://localhost:5000/images/${product.image}`}
            style={{ width: "100%" }}
          />
        </Paper>
      </Grid>
      <Grid size={{ sm: 6, md: 7, lg: 8, xs: 12 }}>
        <Paper variant="outlined" sx={{ p: 3 }}>
          <Typography variant="h1" component="h4" color="secondary.dark">
            {product.title}
          </Typography>
          <Typography variant="body1">{product.description}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
