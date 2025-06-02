import { useEffect, useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
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
          <Box>
            <StudentCard student={student} />
          </Box>
        ))
      ) : (
        <Typography>Нет учеников</Typography>
      )}
    </Grid>
  );
};
