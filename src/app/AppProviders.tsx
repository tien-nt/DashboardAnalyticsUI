
import { CssBaseline, ThemeProvider } from "@mui/material";

import { theme } from "../theme";

interface AppProvidersProps {
  children: React.ReactNode;
}

export default function AppProviders({
  children,
}: AppProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {children}
    </ThemeProvider>
  );
}