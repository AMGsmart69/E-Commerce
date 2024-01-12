import { useTheme } from "@emotion/react";
import { SearchOutlined } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import React from "react";

const Header2 = () => {
    const theme = useTheme();
  return (
    <Stack
      my={6}
      alignItems={"center"}
      flexDirection={"row"}
      mx={3.5}
      sx={{ position: "relative" }}
    >
      <Box sx={{ position: "absolute", left: "33%" }}>
        <input
          style={{
            position: "relative",
            width: "70vh",
            height: "7vh",
            borderRadius: "20px",
            border: `1px ${theme.palette.text.primary} solid`,
            fontSize: "15px",
            paddingLeft: "10px",
            fontWeight: "bold",
            color: theme.palette.text.primary,
            backgroundColor: "transparent",
          }}
          className="search-input"
          type="text"
          placeholder="Search..."
        />
        <Button
          sx={{
            height: "7vh",
            position: "absolute",
            right: 0,
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
          variant="outlined"
        >
          <SearchOutlined />
        </Button>
      </Box>
    </Stack>
  );
};

export default Header2;
