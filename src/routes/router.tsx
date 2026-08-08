import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";

import DashboardPage from "../pages/Dashboard/DashboardPage";
import UsersPage from "../pages/Users/UsersPage";
import ReportsPage from "../pages/Reports/ReportsPage";
import SettingsPage from "../pages/Settings/SettingsPage";
import AnalyticsPage from "../pages/Analytics/AnalyticsPage";
import OrdersPage from "../pages/Orders/OrdersPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,

    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
 {
        path: "analytics",
        element: <AnalyticsPage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
{
        path: "orders",
        element: <OrdersPage />,
      },
      {
        path: "reports",
        element: <ReportsPage />,
      },

      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

export default router;