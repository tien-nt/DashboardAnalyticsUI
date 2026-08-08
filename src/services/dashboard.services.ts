import type {
  DashboardSummary,
} from "../types/dashboard";

export async function getDashboardSummary(): Promise<DashboardSummary> {
  return Promise.resolve({
    totalRevenue: 128430,
    totalOrders: 2845,
    customers: 18294,
    conversionRate: 4.82,
  });
}