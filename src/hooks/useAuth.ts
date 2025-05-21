import { useState, useEffect } from "react";
import { supabase } from "../services/supabaseClient";

export const useAuth = () => {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const session = supabase.auth.getSession();
    setUser(session?.user || null);

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return { user };
};
