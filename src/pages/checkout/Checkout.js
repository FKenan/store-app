import { Paper, Grid } from "@mui/material";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import Info from "./Info";

export default function CheckoutPage() {
  return (
    <Paper>
      <Grid container spacing={3}>
        <Grid
          size={4}
          sx={{ p: 3, borderRight: "1px solid", borderColor: "divider" }}
        >
          <Info />
        </Grid>
        <Grid size={8} sx={{ p: 3 }}>
          <AddressForm />
          <PaymentForm />
          <Review />
        </Grid>
      </Grid>
    </Paper>
  );
}
