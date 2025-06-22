import { Grid, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
export default function AddressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          {...register("firstname", {
            required: "firstname zorunlu alandır",
          })}
          label="Enter firstname"
          size="small"
          fullWidth
          autoFocus
          sx={{ mb: 2 }}
          error={!!errors.firstname}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          {...register("lastname", {
            required: "lastname zorunlu alandır",
          })}
          label="Enter lastname"
          size="small"
          fullWidth
          sx={{ mb: 2 }}
          error={!!errors.lastname}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          {...register("phone", {
            required: "phone zorunlu alandır",
          })}
          label="Enter phone"
          size="small"
          fullWidth
          sx={{ mb: 2 }}
          error={!!errors.phone}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          {...register("city", {
            required: "city zorunlu alandır",
          })}
          label="Enter city"
          size="small"
          fullWidth
          sx={{ mb: 2 }}
          error={!!errors.city}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField
          {...register("addressline", {
            required: "addressline zorunlu alandır",
          })}
          label="Enter addressline"
          size="small"
          fullWidth
          sx={{ mb: 2 }}
          error={!!errors.addressline}
        />
      </Grid>
    </Grid>
  );
}
