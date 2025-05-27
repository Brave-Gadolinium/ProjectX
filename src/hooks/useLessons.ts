import { useEffect, useState } from "react";
import { getLessons } from "../services/api";

export const useLessons = (month: string) => {
  const [lessons, setLessons] = useState<any[]>([]);

  useEffect(() => {
    getLessons()
      .then((data) => setLessons(data))
      .catch((err) => console.error("Ошибка загрузки уроков:", err));
  }, [month]);

  return lessons;
};
