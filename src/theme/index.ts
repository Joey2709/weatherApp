import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark", // Indica que este es un tema oscuro
    primary: {
      main: "#1e1e1e", // Color principal
    },
    secondary: {
      main: "#ff9800", // Color secundario
    },
    // ...otros ajustes de color
  },
  // ...otros ajustes de estilo
});
