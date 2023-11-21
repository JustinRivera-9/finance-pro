import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function useUserData() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // console.log("User:", user);

  useEffect(() => {
    async function fetchUserData() {
      setIsLoading(true);
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          setUser(value.data.user);
        }
      });
      setIsLoading(false);
    }
    fetchUserData();
  }, []);

  return { user, isLoading };
}
