
////////////////////////////////////////////
////////////////// УРОКИ //////////////////
//////////////////////////////////////////

// Расчет продолжительности урока
export const calculateDuration = (
  startTime: string,
  endTime: string
): string => {
  const start = new Date(startTime);
  const end = new Date(endTime);
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return "Не указано";
  }
  const durationMs = end.getTime() - start.getTime();
  const hours = Math.floor(durationMs / (1000 * 60 * 60));
  const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
  if (hours === 0 && minutes === 0) {
    return "Не указано";
  }
  let result = "";
  if (hours > 0) {
    result += `${hours} час${hours !== 1 ? "ов" : ""} `;
  }
  if (minutes > 0) {
    result += `${minutes} минут${minutes !== 1 ? "ы" : ""}`;
  }
  return result.trim();
};

// функция, которая сравнивает только дни
export const isSameDay = (date1: string, date2: string): boolean => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
  
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  };