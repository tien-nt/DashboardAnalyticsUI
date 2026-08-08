import {
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

import { useState } from "react";

interface SettingsMenuProps {
  mode: "light" | "dark";
  onToggleMode: () => void;
}

export default function SettingsMenu({
  mode,
  onToggleMode,
}: SettingsMenuProps) {
  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleOpen = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <SettingsOutlinedIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem>
          <ListItemIcon>
            <SettingsOutlinedIcon fontSize="small" />
          </ListItemIcon>

          <Typography variant="body2">
            Settings
          </Typography>
        </MenuItem>

        <Divider />

        <MenuItem
          onClick={() => {
            onToggleMode();
            handleClose();
          }}
        >
          <ListItemIcon>
            {mode === "light" ? (
              <DarkModeOutlinedIcon fontSize="small" />
            ) : (
              <LightModeOutlinedIcon fontSize="small" />
            )}
          </ListItemIcon>

          {mode === "light"
            ? "Dark mode"
            : "Light mode"}
        </MenuItem>
      </Menu>
    </>
  );
}