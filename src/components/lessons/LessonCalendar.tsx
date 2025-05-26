// src/components/lessons/LessonCalendar.tsx
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useLessons } from "../../hooks/useLessons";

export const LessonCalendar = () => {
  const lessons = useLessons();

  const handleDateClick = (arg: any) => {
    alert(`Clicked on date: ${arg.dateStr}`);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={lessons.map((lesson) => ({
        title: lesson.title,
        start: lesson.date,
      }))}
      dateClick={handleDateClick}
    />
  );
};
