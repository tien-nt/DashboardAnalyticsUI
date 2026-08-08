export interface DashboardStat {
  title: string;
  value: string;
  percentage: string;
  description: string;
  icon: string;
}

export interface DashboardSummary {
  totalRevenue: number;
  totalOrders: number;
  customers: number;
  conversionRate: number;
}