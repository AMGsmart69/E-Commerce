import {
  Box,
  Button,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Icons
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import GamesIcon from "@mui/icons-material/Games";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { useTheme } from "@emotion/react";
import Lists from "./Lists";
// Icons

const Header3 = () => {
  const theme = useTheme();
  const navTo = useNavigate();
  ////////// Category Functions //////////
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  ////////// Category Functions //////////

  ////////// Category Options //////////
  const catOptions = [
    { name: "Clothes", icon: <CheckroomIcon sx={{ mr: 2 }} />, link: "/about" },
    { name: "Games", icon: <GamesIcon sx={{ mr: 2 }} />, link: "/contact" },
    {
      name: "Electronics",
      icon: <ElectricBoltIcon sx={{ mr: 2 }} />,
      link: "/",
    },
  ];
  ////////// Category Options //////////
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        my: 2,
        p: "10px",
        // mx: 2,
        px: 2.5,
        justifyContent: "space-between",
        flexWrap: "wrap"
      }}
    >
      {/* Categories menu */}
      <Stack>
        <Button
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ backgroundColor: theme.palette.catColor.main }}
        >
          <WindowIcon />
          <Typography sx={{ mx: 2, textTransform: "capitalize" }}>
            Categories
          </Typography>
          <KeyboardArrowRightIcon />
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {catOptions.map((item) => {
            return (
              <MenuItem
                onClick={() => {
                  handleClose();
                  navTo(item.link);
                }}
              >
                {item.icon}
                {item.name}
              </MenuItem>
            );
          })}
          {/* <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem> */}
        </Menu>
      </Stack>

      <Stack gap={7} alignItems={"center"} flexDirection={"row"}>
        <Lists title={"Home"} />
        <Lists title={"Mega Menu"} />
        <Lists title={"Full Screen Menu"} />
        <Lists title={"Pages"} />
        <Lists title={"User Account"} />
        <Lists title={"Vendor Account"} />
      </Stack>
    </Box>
  );
};

export default Header3;
