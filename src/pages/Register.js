import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import requests from "../api/apiClient";
import { useNavigate } from "react-router";

export default function RegisterPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function handleForm(data) {
    requests.account
      .register(data)
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((error) => console.log(error));
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
          Register
        </Typography>
        <Box
          component="form"
          sx={{ mb: 2 }}
          noValidate
          onSubmit={handleSubmit(handleForm)}
        >
          <TextField
            {...register("username", {
              required: "username zorunlu alan",
              minLength: {
                value: 3,
                message: "username min 3 karakter olmalıdır.",
              },
            })}
            name="username"
            label="Enter username"
            size="small"
            fullWidth
            required
            autoFocus
            sx={{ mb: 2 }}
          />
          <TextField
            {...register("email", {
              required: "email zorunlu alan",
              minLength: {
                value: 3,
                message: "email min 3 karakter olmalıdır.",
              },
            })}
            name="email"
            label="Enter email"
            size="small"
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            {...register("password", {
              required: "password zorunlu alan",
              minLength: {
                value: 3,
                message: "password min 3 karakter olmalıdır.",
              },
            })}
            name="password"
            type="password"
            label="Enter password"
            size="small"
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 1 }}
            color="secondary"
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
