// src/components/StudentCard.tsx
import React from "react";
import { Box, Card, Typography, Avatar } from "@mui/material";
import "../../assets/style/studentCard.css";

export const StudentCard = ({ student }: StudentProps) => {
  return (
    <Card className="holographic-container " sx={{ width: "335px", margin: 1 }}>
      <Box
        className="holographic-card"
        sx={{ display: "flex", alignItems: "center", p: 2 }}
      >
        <Avatar src={student.photo_url || ""} alt={student.full_name} />
        <Box sx={{ ml: 2 }}>
          <Typography variant="h6">{student.full_name}</Typography>
          <Typography color="text.secondary">{student.email}</Typography>
          <Typography color="text.secondary">
            Группа: {student.group_name}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
