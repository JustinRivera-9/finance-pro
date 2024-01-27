import { useEffect, useState } from "react";
import supabase from "./supabase";

function useGetTargetBudget(id) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTargetBudget() {
      try {
        let { data: budget, error } = await supabase
          .from("budget")
          .select("*")
          .eq("user_id", id);
        if (error) throw new Error(error.message);
        setData(budget[0]);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTargetBudget();
  }, [id]);

  // console.log(data);

  return { data, isLoading, error };
}

export default useGetTargetBudget;
