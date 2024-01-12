import React from "react";
import { Button, Link, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
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
        <strong style={{ fontSize: "40px" }}>Sign Up</strong>
      </Typography>

      <Stack
        gap={1.5}
        alignItems={"center"}
        flexDirection={"column"}
        sx={{ position: "relative" }}
      >
        <TextField sx={{ width: "440px" }} label="Email" variant="outlined" />
        <TextField
          sx={{ width: "440px" }}
          label="Password"
          variant="outlined"
        />
        <TextField
          sx={{ width: "440px" }}
          label="Password Again"
          variant="outlined"
        />

        <Stack
          sx={{ position: "absolute", left: 1, bottom: 65 }}
          alignItems={"center"}
          flexDirection={"row"}
        >
          <Typography mr={1}>Already have an account?</Typography>
          <Link
            href="#"
            onClick={() => {
              navTo("/login");
            }}
          >
            Login
          </Link>
        </Stack>

        <Button
          color="success"
          sx={{ height: "50px", mt: 5, width: "440px", fontWeight: "bold" }}
          variant="contained"
          onClick={() => {
            navTo("/");
          }}
        >
          Sign Up
        </Button>
      </Stack>
    </Stack>
  );
};

export default SignUpPage;
