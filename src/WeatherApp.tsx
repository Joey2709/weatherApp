import { Box, ThemeProvider } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";

import AppRouter from "./routes/AppRouter";
import SideBar from "./components/SideBar";
import { useDarkmode } from "./theme";

function App() {
  const { theme, colorMode, mode } = useDarkmode();
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: "background.main", p: 3.5 }}>
        <SideBar colorMode={colorMode} mode={mode} />
        <AppRouter />
      </Box>
    </ThemeProvider>
  );
}

export default App;
