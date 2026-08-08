import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";

import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

interface ThemeContextValue {
  mode: "light" | "dark";
  toggleMode: () => void;
}

const ThemeContext =
  createContext<ThemeContextValue | undefined>(
    undefined
  );

export function AppThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] =
    useState<"light" | "dark">(() => {
      const saved =
        localStorage.getItem("theme-mode");

      return saved === "dark"
        ? "dark"
        : "light";
    });

  const toggleMode = () => {
    setMode((current) => {
      const next =
        current === "light"
          ? "dark"
          : "light";

      localStorage.setItem(
        "theme-mode",
        next
      );

      return next;
    });
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,

          primary: {
            main: "#1976d2",
          },

          background: {
            default:
              mode === "light"
                ? "#f5f7fa"
                : "#121212",

            paper:
              mode === "light"
                ? "#ffffff"
                : "#1e1e1e",
          },
        },

        shape: {
          borderRadius: 10,
        },

        typography: {
          fontFamily:
            '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleMode,
      }}
    >
      <MuiThemeProvider theme={theme}>
        <CssBaseline />

        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const context =
    useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useAppTheme must be used inside AppThemeProvider"
    );
  }

  return context;
}