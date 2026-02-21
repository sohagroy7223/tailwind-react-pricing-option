import { Mars } from "lucide-react";
import React from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const NumberCharts = () => {
  const studentMarks = [
    { subject: "Math", marks: 85 },
    { subject: "English", marks: 68 },
    { subject: "Science", marks: 92 },
    { subject: "History", marks: 74 },
    { subject: "Geography", marks: 60 },
  ];
  return (
    <div className="flex justify-center">
      <BarChart width={500} height={300} data={studentMarks}>
        <XAxis dataKey={"subject"}></XAxis>
        <YAxis></YAxis>
        <Bar dataKey={"marks"} stroke="blue " fill="#8884d8"></Bar>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default NumberCharts;
