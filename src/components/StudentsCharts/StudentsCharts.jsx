import React, { use } from "react";

const StudentsCharts = ({ studentsData }) => {
  const studentsDetails = use(studentsData);
  const allStudentData = studentsDetails.data;

  console.log(allStudentData);
  return (
    <div>
      <h3>hello{allStudentData.length}</h3>
    </div>
  );
};

export default StudentsCharts;
