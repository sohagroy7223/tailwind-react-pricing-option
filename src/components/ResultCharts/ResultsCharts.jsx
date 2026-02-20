import React from "react";
import { Line, LineChart } from "recharts";

const ResultsCharts = () => {
  const salesData = [
    { month: "Jan", sales: 1200 },
    { month: "Feb", sales: 2100 },
    { month: "Mar", sales: 1800 },
    { month: "Apr", sales: 2600 },
    { month: "may", sales: 1800 },
    { month: "jun", sales: 1500 },
    { month: "jul", sales: 3000 },
    { month: "aug", sales: 3200 },
  ];
  return (
    <div>
      <LineChart width={800} height={500} data={salesData}>
        <Line dataKey={"sales"}></Line>
      </LineChart>
    </div>
  );
};

export default ResultsCharts;
