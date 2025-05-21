// src/components/StudentList.tsx
import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { fetchStudents } from "../../services/api";
import { StudentCard } from "./StudentCard";

export const StudentList = () => {
  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {
    fetchStudents()
      .then((data) => setStudents(data))
      .catch((err) => console.error("Ошибка загрузки учеников:", err));
  }, []);

  return (
    <Grid container spacing={2}>
      {students.length > 0 ? (
        students.map((student) => (
          <Grid item xs={12} sm={6} md={4} key={student.id}>
            <StudentCard student={student} />
          </Grid>
        ))
      ) : (
        <Typography>Нет учеников</Typography>
      )}
    </Grid>
  );
};
