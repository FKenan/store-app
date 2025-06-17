import {
  Button,
  CircularProgress,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { currencyTry } from "../utils/formats";
import ReportIcon from "@mui/icons-material/Report";

export default function ProductItem({
  product,
  handleAddItem,
  cartItem,
  isAdding,
}) {
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
          <Typography variant="h5" color="secondary" sx={{ mt: 3 }}>
            {currencyTry.format(product.price)}
          </Typography>
          <Stack
            direction="row"
            display="flex"
            alignItems="center"
            gap={2}
            sx={{ mt: 3 }}
          >
            <Button
              onClick={() => handleAddItem(product.id)}
              variant="contained"
              color="secondary"
            >
              Sepete Ekle
            </Button>
            {cartItem?.product.quantity > 0 && (
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <ReportIcon color="secondary" /> Sepetinizde{" "}
                {cartItem.product.quantity} adet ekli
              </Typography>
            )}
            {isAdding && <CircularProgress size="20px" />}
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}
