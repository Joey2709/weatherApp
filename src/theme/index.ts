import { PaletteMode, createTheme } from "@mui/material";
import { useMemo, useState } from "react";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: { main: "#DFD7BF" },
          background: {
            paper: "#F2EAD3", //F2EAD3
            main: "#f5f5f5",
          },
          text: {
            primary: "#e5e5e5",
            secondary: "#3F2305",
          },
          breakpoints: {
            values: {
              xs: 0,
              sm: 600,
              md: 960,
              lg: 1280,
              xl: 1920,
            },
          },
        }
      : {
          // palette values for dark mode
          primary: { main: "#35455E" }, //1F2B3B
          background: {
            paper: "#1F2B3B", //35455E
            main: "#0b131e", //0b131e
          },
          text: {
            primary: "#e5e5e5",
            secondary: "#fff",
          },
          breakpoints: {
            values: {
              xs: 0,
              sm: 600,
              md: 960,
              lg: 1280,
              xl: 1920,
            },
          },
        }),
  },
});

export const useDarkmode = () => {
  const [mode, setMode] = useState<PaletteMode>("dark");
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return { theme, colorMode, mode };
};
