import supabase from "./supabaseClient";
import { useEffect, useState } from "react";

function TestCases() {
  const [fetchError, setFetchError] = useState(null);
  const [userList, setUserList] = useState({});

  useEffect(() => {
    const fetchUserList = async () => {
      let { data: users, error } = await supabase.from("users").select("id");

      console.log(await supabase.from("users").select("id"));
      if (error) {
        setFetchError("Could not fetch the login information");
        setUserList(null);
        console.log(error.message);
      }

      if (users) {
        setUserList(users);
        setFetchError(null);
      }
    };
    fetchUserList();
  }, []);

  return <h1>GGGGGGGGGGG</h1>;
}

export default TestCases;
