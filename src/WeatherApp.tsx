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

import { useDarkmode } from "./theme";

function App() {
  const { theme, colorMode, mode } = useDarkmode();
  return (
    <ThemeProvider theme={theme}>
      <Box
        className="p-5 flex w-screen h-screen gap-7"
        sx={{ backgroundColor: "background.main" }}
      >
        <SideBar colorMode={colorMode} mode={mode} />
        <AppRouter />
      </Box>
    </ThemeProvider>
  );
}

export default App;
