// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { StudentsPage } from "./pages/Students";
import { LessonsPage } from "./pages/Lessons";
import { MaterialsPage } from "./pages/Materials";
import { AnalyticsPage } from "./pages/Analytics";
import { Navbar } from "./components/common/Navbar";
import { Box } from "@mui/material";
import { Footer } from "./components/common/Footer";
import "./App.css";

export const App = () => {
  return (
    <Router>
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/lessons" element={<LessonsPage />} />
            <Route path="/materials" element={<MaterialsPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
          </Routes>
        </main>
        <Footer />
      </Box>
    </Router>
  );
};
