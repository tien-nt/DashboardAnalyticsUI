import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import { NavLink } from "react-router-dom";

import { menuConfig } from "../../config/menu.config";

import { drawerWidth } from "./DashboardLayout";

interface SidebarProps {
  mobileOpen: boolean;
  onMobileClose: () => void;
}

export default function Sidebar({
  mobileOpen,
  onMobileClose,
}: SidebarProps) {
  const drawerContent = (
    <Box>
      {/* Logo */}
      <Toolbar
        sx={{
          minHeight: "72px !important",
          px: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "primary.main",
          }}
        >
          Admin Dashboard
        </Typography>
      </Toolbar>

      <Divider />

      {/* Menu */}
      <List
        sx={{
          px: 1.5,
          py: 2,
        }}
      >
        {menuConfig.map((item) => {
          const Icon = item.icon;

          return (
            <ListItemButton
              key={item.path}
              component={NavLink}
              to={item.path}
              onClick={onMobileClose}
              sx={{
                minHeight: 44,
                mb: 0.5,
                borderRadius: 2,

                color: "text.secondary",

                "&.active": {
                  backgroundColor: "primary.main",
                  color: "primary.contrastText",

                  "& .MuiListItemIcon-root": {
                    color: "inherit",
                  },
                },

                "&:hover": {
                  backgroundColor: "action.hover",
                },

                "&.active:hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: "inherit",
                }}
              >
                <Icon fontSize="small" />
              </ListItemIcon>

              <ListItemText
                primary={item.label}
                slotProps={{
                  primary: {
                    sx: {
                      fontSize: 14,
                      fontWeight: 500,
                    },
                  },
                }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      {/* ========================================= */}
      {/* Desktop Sidebar */}
      {/* ========================================= */}

      <Drawer
        variant="permanent"
        open
        sx={{
          display: {
            xs: "none",
            md: "block",
          },

          width: drawerWidth,

          flexShrink: 0,

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",

            borderRight: "1px solid",
            borderColor: "divider",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* ========================================= */}
      {/* Mobile Sidebar */}
      {/* ========================================= */}

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: {
            xs: "block",
            md: "none",
          },

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}