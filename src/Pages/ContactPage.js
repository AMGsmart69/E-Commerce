import { useTheme } from "@emotion/react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function ContactPage() {
  const navTo = useNavigate();
  const theme = useTheme();
  return (
    <Stack gap={1} alignItems={"center"} flexDirection={"column"} mt={7}>
      <Typography>
        <strong style={{ fontSize: "30px" }}>Contact Us</strong>
      </Typography>

      <Stack mt={3} gap={1} alignItems={"center"} flexDirection={"column"}>
        <TextField sx={{ width: "440px" }} label="Name" variant="outlined" />
        <TextField sx={{ width: "440px" }} label="Email" variant="outlined" />
        <textarea
          style={{
            resize: "none",
            padding: "10px",
            fontSize: "18px",
            fontWeight: "bold",
            backgroundColor: "transparent",
            color: theme.palette.text.primary,
          }}
          rows="10"
          cols="40"
          placeholder="Your Message..."
        />
        <Button
          color="success"
          sx={{ height: "50px", mt: 1, width: "440px", fontWeight: "bold" }}
          variant="contained"
          onClick={() => {
            navTo("/");
          }}
        >
          Submit
        </Button>
      </Stack>
    </Stack>
  );
}

export default ContactPage;
