import { LockOutlined, Password } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./accountSlice";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.account);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function handleForm(data) {
    dispatch(loginUser(data));
  }

  return (
    <Container maxWidth="xs">
      <Paper sx={{ padding: 2 }} elevation={3}>
        <Avatar sx={{ mx: "auto", mb: 2, color: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          sx={{ textAlign: "center", mb: 2 }}
        >
          Login
        </Typography>
        <Box
          noValidate
          component="form"
          onSubmit={handleSubmit(handleForm)}
          sx={{ mb: 2 }}
        >
          <TextField
            {...register("username", {
              required: "username zorunlu alan",
              minLength: {
                value: 3,
                message: "username min 3 karakter olmalıdır.",
              },
            })}
            label="Enter username"
            size="small"
            fullWidth
            required
            autoFocus
            error={!!errors.username}
            sx={{ mb: 2 }}
            helperText={errors.username?.message}
          />
          <TextField
            {...register("password", {
              required: "password zorunlu alandır",
              minLength: {
                value: 3,
                message: "password min 3 karakter olmalıdır.",
              },
            })}
            type="password"
            label="Enter password"
            size="small"
            fullWidth
            required
            error={!!errors.password}
            sx={{ mb: 2 }}
            helperText={errors.password?.message}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 1 }}
            color="secondary"
            disabled={!isValid}
          >
            {status === "pending" ? <CircularProgress size="25px" /> : "Submit"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
