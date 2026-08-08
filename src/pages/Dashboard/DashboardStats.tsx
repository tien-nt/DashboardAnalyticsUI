import {
  Grid,
} from "@mui/material";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PeopleIcon from "@mui/icons-material/People";
import PercentIcon from "@mui/icons-material/Percent";

import StatCard from "../../components/common/StatCard";
import type { DashboardSummary, DashboardStat } from "../../types/dashboard";
interface DashboardStatsProps {
  data: DashboardSummary,
}
export default function DashboardStats({
  data
}: DashboardStatsProps) {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatCard
          title="Total Revenue"
          value={`$${data.totalRevenue.toLocaleString()}`}
          percentage="+12.2%"
          description="vs last month"
          icon={AttachMoneyIcon}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatCard
          title="Total Orders"
          value="2,845"
          percentage="+8.2%"
          description="vs last month"
          icon={ShoppingCartOutlinedIcon}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatCard
          title="Customers"
          value="18,294"
          percentage="+5.4%"
          description="vs last month"
          icon={PeopleIcon}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatCard
          title="Conversion Rate"
          value="4.82%"
          percentage="+1.2%"
          description="vs last month"
          icon={PercentIcon}
        />
      </Grid>
    </Grid>
  );
}