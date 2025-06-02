import { useState, useEffect } from "react";
// import { AddStudentForm } from "../components/students/AddStudentForm";
import { getStudents } from "../services/api";
// import { StudentList } from "../components/students/StudentList";
import { Typography, Grid, Box, Divider } from "@mui/material";
import { StudentCard } from "../components/students/StudentCard";

export const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const groupStudents = (students: any[]) => {
    const groups: Record<string, any[]> = {};

    students.forEach((student) => {
      if (!groups[student.group_name]) {
        groups[student.group_name] = [];
      }
      groups[student.group_name].push(student);
    });

    return groups;
  };

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data: any = await getStudents();
        setStudents(data);
      } catch (error) {
        console.error("Ошибка загрузки учеников:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return <Typography>Загрузка...</Typography>;
  }

  if (students.length === 0) {
    return <Typography>Нет учеников</Typography>;
  }

  const groupedStudents = groupStudents(students);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Ученики
      </Typography>
      {/* <AddStudentForm />
      <StudentList /> */}

      {/* Список учеников по группам */}
      {Object.entries(groupedStudents).map(([groupName, groupData]) => (
        <Box key={groupName} mb={4}>
          <Typography variant="h5" gutterBottom>
            {groupName}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Grid container spacing={2}>
            {groupData.map((student) => (
              <Box>
                <StudentCard student={student} />
              </Box>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};
