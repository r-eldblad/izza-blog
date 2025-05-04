import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h5" gutterBottom>
          Logga in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="E-post"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{
              "& label.Mui-focused": {
                color: purple[300], // Your desired focus color
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: purple[300],
                },
              },
            }}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <TextField
            label="Lösenord"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{
              "& label.Mui-focused": {
                color: purple[300],
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: purple[300],
                },
              },
            }}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, bgcolor: purple[300] }}
          >
            Logga in
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginForm;
