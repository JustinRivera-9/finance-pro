import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";

export default function useUserData() {
  const [userId, setUserId] = useState({});
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchUserData() {
      try {
        setIsLoading(true);

        ////////// Get authenticated user's ID
        await supabase.auth.getUser().then((value) => {
          if (value.data?.user.id) {
            setUserId(value.data.user.id);
          }
        });

        ////////// Fetch user data based on ID
        const { data: users, error } = await supabase
          .from("users")
          .select("*")
          .eq("user_id", userId);

        console.log(users);
        setUserData(users);
        if (error) throw new Error(error.message);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUserData();
  }, [userId]);

  return { userId, userData, isLoading };
}
