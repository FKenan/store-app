import { Box, Divider, Stack, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function Review() {
  const { getValues } = useFormContext();
  return (
    <Stack spacing={2} sx={{ mb: 3 }} divider={<Divider />}>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Teslimat Bilgileri
        </Typography>
        <Typography gutterBottom>
          {getValues("firstname")} {getValues("lastname")}
        </Typography>
        <Typography gutterBottom>{getValues("phone")}</Typography>
        <Typography gutterBottom>
          {getValues("address")} / {getValues("city")}
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Ödeme Bilgileri
        </Typography>
        <Typography gutterBottom>{getValues("cartname")}</Typography>
        <Typography gutterBottom>{getValues("cartnumber")}</Typography>
        <Typography gutterBottom>{getValues("expiredate")}</Typography>
      </Box>
    </Stack>
  );
}
