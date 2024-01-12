import React, { useState } from "react";
import { Button, Link, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navTo = useNavigate();
  return (
    <Stack
      gap={1}
      alignItems={"center"}
      flexDirection={"column"}
      mt={7}
      sx={{
        p: "30px",
        ml: "33%",
        border: "2.5px solid #EEE",
        borderRadius: "30px",
        width: "500px",
      }}
      className="border"
    >
      <Typography mb={5}>
        <strong style={{ fontSize: "40px" }}>Log In</strong>
      </Typography>

      <Stack
        gap={1.5}
        alignItems={"center"}
        flexDirection={"column"}
        sx={{ position: "relative" }}
      >
        <TextField sx={{ width: "440px" }} label="Email" name="email" variant="outlined" />
        <TextField
        name="password"
          sx={{ width: "440px" }}
          label="Password"
          variant="outlined"
        />

        <Stack
          sx={{ position: "absolute", left: 1, bottom: 65 }}
          alignItems={"center"}
          flexDirection={"row"}
        >
          <Typography mr={1}>Forgot Password?</Typography>
          <Link
            href="#"
            onClick={() => {
              navTo("/signup");
            }}
          >
            Sign Up
          </Link>
        </Stack>

        <Button
          color="success"
          onClick={() =>
            navTo("http://127.0.0.1:8000/api/show_products")
          }
          sx={{ height: "50px", mt: 5, width: "440px", fontWeight: "bold" }}
          variant="contained"
        >
          Login
        </Button>
      </Stack>
    </Stack>
  );
};

export default LoginPage;
