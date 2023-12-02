import { useEffect, useState } from "react";
import supabase from "../../config/supabaseClient";

function useGetSettings(id) {
  const [settings, setSettings] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    // useEffect(() => {
    fetchUserSettings();
  }, [id]);

  return { settings, isLoading, error };
}

export default useGetSettings;
