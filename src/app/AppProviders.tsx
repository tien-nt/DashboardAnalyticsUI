
import { AppThemeProvider } from "../theme/ThemeProvider";

interface AppProvidersProps {
  children: React.ReactNode;
}

export default function AppProviders({
  children,
}: AppProvidersProps) {
  return (
      <AppThemeProvider>
      {children}
    </AppThemeProvider>
  );
}