import { Mars } from "lucide-react";
import React from "react";
import { Bar, BarChart, Line, XAxis, YAxis } from "recharts";

const NumberCharts = () => {
  const studentMarks = [
    { subject: "Math", marks: 85 },
    { subject: "English", marks: 68 },
    { subject: "Science", marks: 92 },
    { subject: "History", marks: 74 },
    { subject: "Geography", marks: 60 },
  ];
  return (
    <div>
      <BarChart md:width={500} height={500} data={studentMarks}>
        <XAxis dataKey={"subject"}></XAxis>
        <YAxis></YAxis>
        <Bar dataKey={"marks"} stroke="blue " fill="#8884d8"></Bar>
      </BarChart>
    </div>
  );
};

export default NumberCharts;
