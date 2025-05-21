import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";

export const useLessons = (month: string) => {
  const [lessons, setLessons] = useState<any[]>([]);

  useEffect(() => {
    const fetchLessons = async () => {
      const { data, error } = await supabase
        .from("lessons")
        .select("*")
        .gte("date", `${month}-01`)
        .lte("date", `${month}-31`);
      if (error) throw error;
      setLessons(data);
    };

    fetchLessons();
  }, [month]);

  return lessons;
};
