// src/App.tsx
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import WholesaleFormGrid from "./components/ContactForm";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2f3e9e", // фирменный синий или другой стиль
    },
    secondary: {
      main: "#e91e63",
    },
  },
  shape: {
    borderRadius: 12,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WholesaleFormGrid />
    </ThemeProvider>
  );
}

export default App;
