import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          text: {
            primary: "#2B3445",
          },
          hovertextTheme: {
            main: "black",
          },
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: "#EEE",
          },
          catColor: {
            main: "#EEF5FF",
          },
        }
      : {
          // palette values for dark mode
          hovertextTheme: {
            main: "white",
          },
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[500],
          },
          text: {
            primary: "#fff",
          },
          catColor: {
            main: "black",
          }
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};
