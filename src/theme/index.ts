import { PaletteMode, createTheme } from "@mui/material";
import { useMemo, useState } from "react";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: { main: "#484bb6" }, //b2dffe
          background: {
            paper: "#41434c", //b2dffe
            main: "#25275e", //e4f2f6
          },
          text: {
            primary: "#b1b6ce",
            secondary: "#fff",
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
