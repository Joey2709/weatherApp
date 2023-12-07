import { Box, ThemeProvider } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";

import AppRouter from "./routes/AppRouter";
import { useDarkmode } from "./theme";
import MenuWeather from "./components/MenuWeather";

function App() {
  const { theme, colorMode, mode } = useDarkmode();
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: "background.main", height: "100vh" }}>
        <MenuWeather colorMode={colorMode} mode={mode} />
        <AppRouter />
      </Box>
    </ThemeProvider>
  );
}

export default App;
