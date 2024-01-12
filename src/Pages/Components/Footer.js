import { Box, IconButton, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import "./Footer.css";
import { useTheme } from "@emotion/react";

function Footer() {
  const theme = useTheme();
  const navTo = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        p: "10px",
        px: 2,
        mt: 12.5,
        pt: "1px",
        position: "relative",
        backgroundColor: "#F9D949",
      }}
    >
      {/* Logo */}
      <Box mb={23}>
        <Link flexGrow={1} href="#">
          <img
            className="logo-img"
            src="/imgs/logo.png"
            alt="logo"
            onClick={() => {
              navTo("/");
            }}
            style={{ width: "200px" }}
          />
        </Link>
      </Box>
      {/* Logo */}

      {/* About Column */}
      <Stack mb={21} alignItems={"center"}>
        <Typography sx={{ color: "black" }} mb={1}>
          <strong>About Us</strong>
        </Typography>
        <Link
          sx={{
            mb: 1,
            color: "blue",
            ":hover": { textDecoration: "underline" },
          }}
          href="#"
          underline="none"
        >
          aboutLink1
        </Link>
        <Link
          sx={{
            mb: 1,
            color: "blue",
            ":hover": { textDecoration: "underline" },
          }}
          href="#"
          underline="none"
        >
          aboutLink2
        </Link>
        <Link
          sx={{
            mb: 1,
            color: "blue",
            ":hover": { textDecoration: "underline" },
          }}
          href="#"
          underline="none"
        >
          aboutLink3
        </Link>
        <Link
          sx={{
            mb: 1,
            color: "blue",
            ":hover": { textDecoration: "underline" },
          }}
          href="#"
          underline="none"
        >
          aboutLink4
        </Link>
      </Stack>
      {/* About Column */}

      {/* Contact Column */}
      <Stack mb={21} alignItems={"center"}>
        <Typography sx={{ color: "black" }} mb={1}>
          <strong>Contact Us</strong>
        </Typography>
        <Link
          href="#"
          sx={{
            mb: 1,
            color: "blue",
            ":hover": { textDecoration: "underline" },
          }}
          underline="none"
        >
          contactLink1
        </Link>
        <Link
          href="#"
          sx={{
            mb: 1,
            color: "blue",
            ":hover": { textDecoration: "underline" },
          }}
          underline="none"
        >
          contactLink2
        </Link>
        <Link
          href="#"
          sx={{
            mb: 1,
            color: "blue",
            ":hover": { textDecoration: "underline" },
          }}
          underline="none"
        >
          contactLink3
        </Link>
        <Link
          href="#"
          sx={{
            mb: 1,
            color: "blue",
            ":hover": { textDecoration: "underline" },
          }}
          underline="none"
        >
          contactLink4
        </Link>
      </Stack>
      {/* Contact Column */}

      {/* Services */}
      <Stack mb={21} alignItems={"center"}>
        <Typography sx={{ color: "black" }} mb={1}>
          <strong>Services</strong>
        </Typography>
        <Link
          href="#"
          sx={{
            mb: 1,
            color: "blue",
            ":hover": { textDecoration: "underline" },
          }}
          underline="none"
        >
          serviceLink1
        </Link>
        <Link
          href="#"
          sx={{
            mb: 1,
            color: "blue",
            ":hover": { textDecoration: "underline" },
          }}
          underline="none"
        >
          serviceLink2
        </Link>
        <Link
          href="#"
          sx={{
            mb: 1,
            color: "blue",
            ":hover": { textDecoration: "underline" },
          }}
          underline="none"
        >
          serviceLink3
        </Link>
        <Link
          href="#"
          sx={{
            mb: 1,
            color: "blue",
            ":hover": { textDecoration: "underline" },
          }}
          underline="none"
        >
          serviceLink4
        </Link>
      </Stack>
      {/* Services */}

      {/* Images */}
      <Stack mt={3}>
        {/* Our App */}
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
          <Typography sx={{ color: "black" }}>
            <strong>Our App</strong>
          </Typography>
          <img src="/imgs/google-play-img.png" alt="googlePlay-img.png" />
        </Box>

        {/* Pyment Method */}
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
          <Typography sx={{ color: "black" }}>
            <strong>Payment Method</strong>
          </Typography>
          <img src="/imgs/payment-method-img.png" alt="googlePlay-img.png" />
        </Box>
      </Stack>
      {/* Images */}

      {/* Info */}
      <Stack
        sx={{ position: "absolute", left: "365px", bottom: "50px" }}
        alignItems={"center"}
        flexDirection={"row"}
      >
        <Typography fontSize={"30px"}>
          <strong style={{ color: "black" }}>
            Created By ... <span style={{ color: "#D80032" }}>AMG</span>
          </strong>
        </Typography>

        <Typography sx={{ color: "black" }} ml={1}>
          &#169;2024
        </Typography>

        <IconButton>
          <FacebookOutlinedIcon sx={{ ml: 1, color: "black" }} />
        </IconButton>

        <IconButton>
          <InstagramIcon sx={{ mx: 1.5, color: "black" }} />
        </IconButton>

        <IconButton>
          <TwitterIcon sx={{ color: "black" }} />
        </IconButton>

        <IconButton>
          <YouTubeIcon sx={{ mx: 1.5, color: "black" }} />
        </IconButton>

        <IconButton>
          <PinterestIcon sx={{ color: "black" }} />
        </IconButton>
      </Stack>
      {/* Info */}
    </Box>
  );
}

export default Footer;
