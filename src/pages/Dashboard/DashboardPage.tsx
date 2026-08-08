import { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Typography,
} from "@mui/material";

import DashboardStats from "./DashboardStats";
import { getDashboardSummary } from "../../services/dashboard.services";

import type { DashboardSummary } from "../../types/dashboard";
export default function DashboardPage() {

   const [summary, setSummary] =
    useState<DashboardSummary | null>(null);
 
    useEffect(() => {
    async function loadDashboard() {
      const data = await getDashboardSummary();

      setSummary(data);
    }

    loadDashboard();
  }, []);
  
  return (
    <Box>
      {/* Page Header */}
      <Stack
        direction={{
          xs: "column",
          sm: "row",
        }}
        sx={{justifyContent:"space-between",
        alignItems:{
          xs: "flex-start",
          sm: "center",
        },
        spacing:2,
        mb:3}}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700 }}
          >
            Dashboard
          </Typography>

          <Typography
            variant="body2"
            sx={{ color:"text.secondary",mt:0.5 }}
          >
            Welcome back, John. Here's what's
            happening today.
          </Typography>
        </Box>
      </Stack>

      {/* Statistics */}
          {summary && (
        <DashboardStats data={summary} />
      )}
    </Box>
  );
}