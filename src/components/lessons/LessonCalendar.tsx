// src/components/lessons/LessonCalendar.tsx
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useLessons } from "../../hooks/useLessons";
import { LessonModal } from "./LessonModal";
import { isSameDay } from "../../utils/helpers";

export const LessonCalendar = () => {
  const lessons = useLessons("2025-05");
  const [selectedLesson, setSelectedLesson] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEventClick = (info: any) => {
    // Найдём урок по ID
    const lesson = lessons.find((l) => l.id === info.event.id);
    if (lesson) {
      setSelectedLesson(lesson);
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={lessons.map((lesson) => ({
          id: lesson.id,
          title: lesson.title,
          start: lesson.start_time,
          end: lesson.end_time,
        }))}
        eventClick={handleEventClick}
      />

      {/* Модальное окно */}
      <LessonModal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedLesson(null);
        }}
        lesson={selectedLesson}
      />
    </>
  );
};
