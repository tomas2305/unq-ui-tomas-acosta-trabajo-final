import { ThemeProvider } from "@emotion/react";
import AppTheme from "./AppTheme";

export default function AppThemeProvider({ children }) {
  return <ThemeProvider theme={AppTheme}>{children}</ThemeProvider>;
}
