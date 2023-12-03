import { createTheme } from "@mui/material";
import colors from "../colors";

const AppTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            body {
              background-color: ${colors.secondaryMain};
            }

            /* Handle */
            ::-webkit-scrollbar {
              width: 1rem;
            }
          
            /* Handle */
            ::-webkit-scrollbar-thumb {
              background: ${colors.secondaryDark}; 
              border-radius: 2px;
            }
            `,
    },
  },
  palette: {
    primary: {
      light: colors.primaryLight,
      main: colors.primaryMain,
      dark: colors.primaryDark,
    },
    secondary: {
      light: colors.fontColor,
      main: colors.secondaryMain,
      dark: colors.secondaryDark,
    },
  },
  typography: {
    allVariants: {
      color: colors.fontColor,
      fontWeight: "700",
    },
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
});

export default AppTheme;
