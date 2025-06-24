import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import { isValidElement, useState } from "react";
import LoginImage from "../assets/6378759.jpg";

function LoginPage() {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        height: "100vh",
        mt: 2,
        mx: 4,
      }}
    >
      <ImageSection />
      <FormSection />
    </Box>
  );
}

function ImageSection() {
  return (
    <Box component="div" sx={{ height: "29rem ", width: "50%", mx: 2 }}>
      <Box
        component="img"
        src={LoginImage}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top",
          borderRadius: "1rem",
        }}
      />
    </Box>
  );
}

function FormSection() {
  const [validEmail, setValidEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid = isValidEmail(validEmail);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isFormValid) {
      setFormError("please Enter correct details");
      return;
    }
  }

  return (
    <Paper
      component="div"
      sx={{ width: "50%", height: "29rem", padding: "2rem" }}
    >
      <Typography
        variant="h5"
        sx={{
          mt: 6,
          color: "var(--secondary-color)",
          fontFamily: "var(--primary-font)",
          fontWeight: 700,
        }}
      >
        {" "}
        Welcome to Task Manager
      </Typography>
      <Typography variant="body2" sx={{ color: "var(--text-color)" }}>
        stay organized
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 5, display: "flex", flexDirection: "column", gap: "2rem" }}
      >
        <Box component="div">
          {formError && <Alert severity="error">{formError}</Alert>}
        </Box>
        <TextField
          required
          variant="outlined"
          label="Email Address"
          size="small"
          value={validEmail}
          onChange={(e) => setValidEmail(e.target.value)}
        >
          Email Address
        </TextField>
        <TextField
          required
          variant="outlined"
          label="password"
          size="small"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        >
          Password
        </TextField>
        <Button
          variant="contained"
          type="submit"
          sx={{ backgroundColor: "var(--secondary-color)" }}
          disabled={!isFormValid}
        >
          submit
        </Button>
      </Box>
    </Paper>
  );
}

export default LoginPage;
