import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import type { SvgIconComponent } from "@mui/icons-material";

export interface MenuItemConfig {
  label: string;
  path: string;
  icon: SvgIconComponent;
}

export const menuConfig: MenuItemConfig[] = [
  {
    label: "Dashboard",
    path: "/",
    icon: DashboardOutlinedIcon,
  },
  {
    label: "Analytics",
    path: "/analytics",
    icon: AnalyticsOutlinedIcon,
  },
  {
    label: "Users",
    path: "/users",
    icon: PeopleIcon,
  },
  {
    label: "Orders",
    path: "/orders",
    icon: ShoppingCartOutlinedIcon,
  },
  {
    label: "Reports",
    path: "/reports",
    icon: AssessmentOutlinedIcon,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: SettingsOutlinedIcon,
  },
];