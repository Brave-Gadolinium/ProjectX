import { PerformanceChart } from "../components/analytics/PerformanceChart";

export const AnalyticsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Аналитика</h1>
      <PerformanceChart />
    </div>
  );
};
