import { PaletteMode, createTheme } from "@mui/material";
import { useMemo, useState } from "react";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: { main: "#484bb6" },
          background: {
            paper: "#41434c",
            main: "#25275e",
          },
          text: {
            primary: "#b1b6ce",
            secondary: "#fff",
          },
        }
      : {
          // palette values for dark mode
          primary: { main: "#35455E" },
          background: {
            paper: "#1F2B3B",
            main: "#0b131e",
          },
          text: {
            primary: "#e5e5e5",
            secondary: "#fff",
          },
        }),
  },
});

export const useDarkmode = () => {
  const auxMode = window.localStorage.getItem("mode") ?? "dark";
  const [mode, setMode] = useState<PaletteMode>(auxMode as PaletteMode);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          window.localStorage.setItem("mode", newMode);
          return newMode;
        });
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return { theme, colorMode, mode };
};
