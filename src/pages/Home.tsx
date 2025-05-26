// src/pages/Home.tsx
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import { fetchStudents } from "../services/api";
import { StudentCard } from "../components/students/StudentCard";
import "../assets/style/loader.css";
import "../assets/style/boxEffects.css";

export const Home = () => {
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  // Проверяем, был ли уже показан лоадер в этой сессии
  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenLoader");

    if (!hasSeen) {
      setShowLoader(true);
      sessionStorage.setItem("hasSeenLoader", "true");
    } else {
      setShowLoader(false);
    }
  }, []);

  useEffect(() => {
    fetchStudents()
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка загрузки учеников:", err);
        setLoading(false);
      });
  }, []);

  // Показ лоадера на 10 секунд
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ p: 10, margin: 0 }}>
      {/* Loader - полный экран */}
      {showLoader && (
        <>
          <div className="loader-container">
            <div className="loader"></div>
            <ul className="background">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </>
      )}

      {!showLoader && (
        <>
          <Typography variant="h4" gutterBottom>
            Добро пожаловать в Teacher App!
          </Typography>
          <Typography variant="body1" mb={4}>
            Управление учениками, уроками и материалами.
          </Typography>

          {/* Статистика */}
          <Grid container spacing={3} mb={4}>
            <Grid item xs={12} sm={4}>
              <Card
                elevation={3}
                sx={{ textAlign: "center", p: 3 }}
                className="studentCardEffect"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <Typography variant="h5" color="primary.main">
                  {students.length}
                </Typography>
                <Typography color="text.secondary">Учеников</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card
                elevation={3}
                sx={{ textAlign: "center", p: 3 }}
                className="studentCardEffect"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>

                <Typography variant="h5" color="success.main">
                  100+
                </Typography>
                <Typography color="text.secondary">Уроков</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card
                elevation={3}
                sx={{ textAlign: "center", p: 3 }}
                className="studentCardEffect"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>

                <Typography variant="h5" color="secondary.main">
                  100+
                </Typography>
                <Typography color="text.secondary">Материалов</Typography>
              </Card>
            </Grid>
          </Grid>

          {/* Список учеников */}
          <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
            Список учеников
          </Typography>
          {loading ? (
            <Typography>Загрузка...</Typography>
          ) : students.length > 0 ? (
            <Grid container spacing={2}>
              {students.map((student) => (
                <Grid item xs={12} sm={6} md={4} key={student.id}>
                  <StudentCard student={student} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography>Нет учеников</Typography>
          )}
        </>
      )}
    </Box>
  );
};
