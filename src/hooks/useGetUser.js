import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";

export default function useGetUser() {
  const [userId, setUserId] = useState({});
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
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

        setUserData(users[0]);
        // if (error) throw new Error(error.message);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUserData();
  }, [userId, error]);

  return { userId, userData, isLoading };
}
