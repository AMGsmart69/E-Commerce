import React, { useContext, useState } from "react";
import "./Header1.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonIcon from "@mui/icons-material/Person";
import {
  Badge,
  Box,
  Button,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { ColorModeContext } from "../../../darkMode";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { KeyboardArrowDown, SearchOutlined } from "@mui/icons-material";

// Menu Options
const options = ["EN", "Ar", "Fr"];

function Header1() {
  const navigate = useNavigate();

  ///////////// Menu Functions /////////////
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  ///////////// Menu Functions /////////////

  ///////////// Dark Mode /////////////
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  ///////////// Dark Mode /////////////

  return (
    <Box>
      {/* First Header */}
      <Stack
        sx={{
          alignItems: "center",
          flexDirection: "row",
          padding: "10px",
          px: 2,
          // backgroundColor: theme.palette.favColor.main,
          backgroundColor: "#AFD3E2",
          boxShadow: "0px 0px 9px 2px rgb(0 0 0 / 30%)",
        }}
        className="fr-header"
      >
        {/* Logo */}
        <Link flexGrow={1} href="#" pl={2}>
          <img
            className="logo-img"
            src="/imgs/logo.png"
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
          />
        </Link>
        {/* Logo */}

        {/* Menu Bar */}
        <Box>
          <List
            // className="border"
            component="nav"
            sx={{
              color: "black",
              ".MuiTypography-root": { fontSize: "15px" },
            }}
          >
            <ListItem onClick={handleClickListItem}>
              <ListItemText
                sx={{ ":hover": { cursor: "pointer" } }}
                primary={options[selectedIndex]}
              />
              <KeyboardArrowDown
                className="lang-icon"
                sx={{ ":hover": { cursor: "pointer" }, color: "black" }}
              />
            </ListItem>
          </List>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Box>
        {/* Menu Bar */}

        {/* Dark Mode */}
        <Box sx={{ mr: 1 }}>
          {theme.palette.mode === "light" ? (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <LightModeOutlinedIcon
                sx={{ fontSize: "22px", color: "black" }}
              />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <DarkModeOutlinedIcon
                sx={{ fontSize: "22px", color: "#A94438" }}
              />
            </IconButton>
          )}
        </Box>
        {/* Dark Mode */}

        {/* Cart Badge */}
        <Box mr={2}>
          <Badge
            sx={{
              ".MuiBadge-badge": { top: "10px", right: "4px" },
            }}
            badgeContent={1}
            color="error"
          >
            <IconButton>
              <ShoppingCartOutlinedIcon
                sx={{ fontSize: "25px", color: "black" }}
              />
            </IconButton>
          </Badge>
        </Box>
        {/* Cart Badge */}

        {/* Profile Icon */}
        <Box>
          <IconButton>
            <PersonIcon sx={{ fontSize: "25px", color: "black" }} />
          </IconButton>
        </Box>
        {/* Profile Icon */}
      </Stack>
      {/* First Header */}
    </Box>
  );
}

export default Header1;
