import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import shadows from "./components/mui/shadows";
import { ToastProvider } from "react-toast-notifications";

// components
import Header from "./components/header";
import Home from "./views/home";

// redux
import { useSelector } from "react-redux";

function App() {
  const helper = useSelector((state) => state.helper);

  // theming
  let themeOptions = {
    hover: "rgba(0,0,0,0.1)",
  };

  if (helper.themeName === "light") {
    themeOptions.type = "light";
    themeOptions.bg = "#fff";
    themeOptions.paperLight = "#ecf0ec";
    themeOptions.primary = "#159947";
    themeOptions.secondary = "#1f5f5b";
    themeOptions.tertiary = "#06373a";
    themeOptions.textPrimary = "#061a23";
    themeOptions.textSecondary = "#697a98";
    themeOptions.divider = "#e4e4e4";
    themeOptions.dark = "#06373a";
  } else {
    themeOptions.type = "dark";
    themeOptions.bg = "#090c09";
    themeOptions.paperLight = "#061a23";
    themeOptions.primary = "#06373a";
    themeOptions.secondary = "#1f5f5b";
    themeOptions.tertiary = "#06373a";
    themeOptions.textPrimary = "#faf7fc";
    themeOptions.textSecondary = "#ccc";
    themeOptions.divider = "#06373a";
    themeOptions.dark = "#062229";
  }

  const appTheme = createMuiTheme({
    overrides: {
      MUIDataTableToolbar: {
        root: {
          backgroundColor: themeOptions.priLight,
          borderRadius: "4px 4px 0 0",
        },
      },
      MuiTableHead: {
        root: {
          // backgroundColor: themeOptions.primary,
          boxShadow: shadows[4],
        },
      },
      MuiTableFooter: {
        root: {
          backgroundColor: themeOptions.priLight,
          borderRadius: "0 0 4px 4px",
        },
      },
      MuiTable: {
        root: {
          backgroundColor: themeOptions.bg,
          borderCollapse: "collapse",
        },
      },
      MuiTableRow: {
        root: {
          borderTop: `2px solid ${themeOptions.divider}`,
          cursor: "pointer",
        },
      },
    },
    palette: {
      type: themeOptions.type,
      background: {
        dark: themeOptions.dark,
        bg: themeOptions.bg,
        paper: themeOptions.paperLight,
        paperDark: themeOptions.paperDark,
      },
      action: {
        hover: themeOptions.hover,
      },
      primary: {
        main: themeOptions.primary,
        light: themeOptions.priLight,
      },
      secondary: {
        main: themeOptions.secondary,
      },
      text: {
        primary: themeOptions.textPrimary,
        secondary: themeOptions.textSecondary,
      },
      divider: themeOptions.divider,
    },
    shadows,
  });

  return (
    <ThemeProvider theme={appTheme}>
      <ToastProvider placement="bottom-center">
        <div className="App">
          <Header />
          <Home />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
