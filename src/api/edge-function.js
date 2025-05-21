// api/edge-function.js
import { createClient } from "@supabase/supabase-js";

supabase
  .channel("public:students")
  .on("postgres_changes", { event: "*", schema: "public" }, (payload) => {
    console.log("Change received!", payload);
  })
  .subscribe();

export default async function handler(req, res) {
  const supabase = createClient(
    process.env.VITE_SUPABASE_URL,
    process.env.VITE_SUPABASE_ANON_KEY
  );
  const { data, error } = await supabase.from("lessons").select("*");
  if (error) return res.status(500).json({ error });
  return res.status(200).json(data);
}
