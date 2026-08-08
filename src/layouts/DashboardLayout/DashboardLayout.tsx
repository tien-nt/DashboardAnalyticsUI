import { Box } from "@mui/material";

import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Breadcrumb from "./Breadcrumb";
const drawerWidth = 260;

export default function DashboardLayout() {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  const handleMobileMenuOpen = () => {
    setMobileOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar
        mobileOpen={mobileOpen}
        onMobileClose={handleMobileMenuClose}
      />

      <Topbar
        onMenuClick={handleMobileMenuOpen}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,

          width: {
            xs: "100%",
            md: `calc(100% - ${drawerWidth}px)`,
          },

          minHeight: "100vh",

          backgroundColor: "background.default",

          pt: {
            xs: "72px",
            md: "72px",
          },

          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },

          pb: 4,
        }}
      >
        <Breadcrumb />
        <Outlet />
      </Box>
    </Box>
  );
}