import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import AppTheme from "./styles/app-theme/AppTheme.js";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AlertProvider } from "./context/alert/AlertContextProvider.jsx";
import { GameProvider } from "./context/game/gameContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GameProvider>
      <AlertProvider>
        <ThemeProvider theme={AppTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </AlertProvider>
    </GameProvider>
  </React.StrictMode>
);
