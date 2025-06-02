import { LessonCalendar } from "../components/lessons/LessonCalendar";
import { DraggableLesson } from "../components/lessons/DraggableLesson";

export const LessonsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Расписание</h1>
      <LessonCalendar />
      <DraggableLesson lessons={[]} />
    </div>
  );
};
