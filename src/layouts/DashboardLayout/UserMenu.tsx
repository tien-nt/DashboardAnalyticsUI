import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

import { useState } from "react";

export default function UserMenu() {
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
      <IconButton
        onClick={handleOpen}
        size="small"
        sx={{
          ml: 1,
        }}
      >
        <Avatar
          sx={{
            width: 36,
            height: 36,
            fontSize: 14,
          }}
        >
          JD
        </Avatar>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
         slotProps={{
            paper: {
            elevation: 3,
            sx: {
                mt: 1,
                minWidth: 200,
                borderRadius: 2,
            },
            },
        }}
      >
        <Box
          sx={{
            px: 2,
            py: 1.5,
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 700,
            }}
          >
            John Developer
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
            }}
          >
            john@example.com
          </Typography>
        </Box>

        <Divider />

        <MenuItem>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>

          Profile
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <SettingsOutlinedIcon fontSize="small" />
          </ListItemIcon>

          Settings
        </MenuItem>

        <Divider />

        <MenuItem>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>

          Logout
        </MenuItem>
      </Menu>
    </>
  );
}