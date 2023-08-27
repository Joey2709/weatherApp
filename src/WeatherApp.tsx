import {
  Box,
  IconButton,
  PaletteMode,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import SideBar from "./components/SideBar";
import AppRouter from "./routes/AppRouter";

import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React, { useMemo } from "react";
import { amber, deepOrange } from "@mui/material/colors";
import { Brightness7, Brightness4 } from "@mui/icons-material";

const getDesignTokens = (mode: PaletteMode) => ({
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
            primary: "#808691",
            secondary: "#3F2305",
          },
        }
      : {
          // palette values for dark mode
          primary: { main: "#0b131e" }, //1F2B3B
          background: {
            paper: "#1F2B3B", //35455E
            main: "#35455E", //0b131e
          },
          text: {
            primary: "#808691",
            secondary: "#fff",
          },
        }),
  },
});

function App() {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const colorMode = React.useMemo(
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

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="p-5 flex w-screen h-screen gap-7"
        sx={{ backgroundColor: "background.main" }}
      >
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        <SideBar />
        <AppRouter />
      </Box>
    </ThemeProvider>
  );
}

export default App;
