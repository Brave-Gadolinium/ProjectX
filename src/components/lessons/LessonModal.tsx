import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { calculateDuration } from "../../utils/helpers";
interface LessonModalProps {
  open: boolean;
  onClose: () => void;
  lesson: any;
}

export const LessonModal = ({ open, onClose, lesson }: LessonModalProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Детали занятия</DialogTitle>
      <DialogContent>
        <Typography variant="h6" gutterBottom>
          Название: {lesson?.title}
        </Typography>
        <Typography variant="body1">
          Описание: {lesson?.description || "Описание отсутствует"}
        </Typography>
        <Typography variant="body1">
          Дата и время: {new Date(lesson?.start_time).toLocaleString()}
        </Typography>
        <Typography variant="body1">
          <strong>Продолжительность:</strong>{" "}
          {lesson?.end_time
            ? calculateDuration(lesson?.start_time, lesson?.end_time)
            : "Не указана"}
        </Typography>
        <Typography variant="body1">
          Группа: {lesson?.group_name || "Не указана"}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
};
