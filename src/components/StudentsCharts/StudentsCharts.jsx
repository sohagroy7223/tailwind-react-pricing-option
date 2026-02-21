import React, { use } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const StudentsCharts = ({ studentsData }) => {
  const studentsDetails = use(studentsData);
  const allStudentData = studentsDetails.data;

  //   data processing for the charts

  const studentsChartData = allStudentData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      roll: studentData.roll,
      class: studentData.class,
      section: studentData.section,
      math: studentData.marks.math,
      english: studentData.marks.english,
      science: studentData.marks.science,
      total: studentData.total,
      grade: studentData.grade,
    };
    return student;
  });

  //   console.log(studentsChartData);

  return (
    <div className="flex justify-center">
      <BarChart width={500} height={300} data={studentsChartData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Bar dataKey="total" fill="blue"></Bar>
        <Bar dataKey={"math"} fill="green"></Bar>
        <Tooltip
          contentStyle={{ background: "#2f2937", borderRadius: "20px" }}
        ></Tooltip>
      </BarChart>
    </div>
  );
};

export default StudentsCharts;
