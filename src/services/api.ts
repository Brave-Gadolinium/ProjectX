import { supabase } from "./supabaseClient.ts";

export const getStudents = async () => {
  const { data, error } = await supabase.from("students").select("*");
  console.log(data);
  console.log("!!!!!!!!");
  if (error) throw error;
  return data;
};

export const addStudent = async (student: { name: string; email: string }) => {
  const { data, error } = await supabase.from("students").insert([student]);
  if (error) throw error;
  return data;
};

export const updateStudent = async (id: number, updates: any) => {
  const { data, error } = await supabase
    .from("students")
    .update(updates)
    .eq("id", id);
  if (error) throw error;
  return data;
};

export const deleteStudent = async (id: number) => {
  const { error } = await supabase.from("students").delete().eq("id", id);
  if (error) throw error;
};

export const uploadFile = async (file: File, bucket: string, path: string) => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file);
  if (error) throw error;
  return data;
};

export const getLessons = async () => {
  const { data, error } = await supabase.from("lessons").select("*");
  if (error) throw new Error(error.message);
  return data;
};

export const getFileUrl = async (bucket: string, path: string) => {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
};

export const fetchStudents = async () => {
  const { data, error } = await supabase.from("students").select("*");
  if (error) throw new Error(error.message);
  return data as any[];
};
