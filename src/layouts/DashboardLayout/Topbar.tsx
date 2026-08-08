import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import { useLocation } from "react-router-dom";

import UserMenu from "./UserMenu";
import LanguageMenu from "./LanguageMenu";
import SettingsMenu from "./SettingsMenu";

import { getPageTitle } from "../../utils/navigation.utils";
import { useAppTheme } from "../../theme/ThemeProvider";

interface TopbarProps {
  onMenuClick: () => void;
}

export default function Topbar({
  onMenuClick,
}: TopbarProps) {
  const location = useLocation();

  const pageTitle = getPageTitle(
    location.pathname
  );

  const {
    mode,
    toggleMode,
  } = useAppTheme();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        zIndex: (theme) =>
          theme.zIndex.drawer + 1,

        backgroundColor:
          "background.paper",

        color: "text.primary",

        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar
        sx={{
          minHeight:
            "72px !important",

          px: {
            xs: 2,
            md: 3,
          },
        }}
      >
        {/* Mobile menu */}

        <IconButton
          edge="start"
          onClick={onMenuClick}
          sx={{
            display: {
              xs: "inline-flex",
              md: "none",
            },

            mr: 1,
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Page title */}

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            flexGrow: 1,
          }}
        >
          {pageTitle}
        </Typography>

        {/* Actions */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: {
              xs: 0,
              sm: 0.5,
            },
          }}
        >
          {/* Language */}

          <LanguageMenu />

          {/* Settings */}

          <SettingsMenu
            mode={mode}
            onToggleMode={toggleMode}
          />

          {/* Notifications */}

          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>

          {/* User */}

          <UserMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
}