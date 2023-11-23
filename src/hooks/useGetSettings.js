import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

function useGetSettings(id) {
  const [settings, setSettings] = useState({});

  const fetchUserSettings = async () => {
    try {
      const { data, error } = await supabase
        .from("settings")
        .select("*")
        .eq("user_id", id);

      if (error) throw new Error(error.message);
      setSettings(data[0]);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchUserSettings();
  }, []);

  return { settings };
}

export default useGetSettings;
