import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ResultsCharts = () => {
  const salesData = [
    { month: "Jan", sales: 1200, buy: 700 },
    { month: "Feb", sales: 2100, buy: 1500 },
    { month: "Mar", sales: 1800, buy: 2000 },
    { month: "Apr", sales: 2600, buy: 1800 },
    { month: "may", sales: 1800, buy: 2200 },
    { month: "jun", sales: 1500, buy: 1000 },
    { month: "jul", sales: 3000, buy: 2500 },
    { month: "aug", sales: 3200, buy: 1500 },
  ];
  return (
    <div className="flex justify-center">
      <LineChart width={500} height={300} data={salesData}>
        <XAxis dataKey={"month"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="buy" stroke="red"></Line>
        <Line dataKey={"sales"} stroke="green"></Line>
        <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default ResultsCharts;
