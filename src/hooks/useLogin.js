import { useState, useEffect } from "react";

function findUser(db, userData) {
  let error = "";
  const userExists = db.find((user) => user.email === userData.email);

  if (!userExists) error = "Could not find account with that email.";

  const user = userExists
    ? userExists
    : {
        email: "",
        error,
        id: null,
        password: "",
        userID: null,
      };

  return { ...user, error };
}

export default function useLogin(userData, callback) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    callback?.();
    const controller = new AbortController();

    async function fetchUsers() {
      try {
        setIsLoading(true);
        setIsLoggedIn(false);

        const res = await fetch("http://localhost:9000/users");
        if (!res.ok)
          throw new Error("Something went wrong getting the user data");

        const data = await res.json();
        if (data.Response === "False") throw new Error(data);

        ////////// Checks user data and sets isLoggedIn
        const loginCheck = findUser(data, userData);
        console.log(loginCheck);

        if (!loginCheck.user) setError(loginCheck.error);

        if (loginCheck.user) {
          setIsLoggedIn(true);
          setUserID(loginCheck.user?.userID);
        }

        setUserID(null);
        setError("");
      } catch (err) {
        console.error(err.message);
        if (err.name !== "Abort Error") setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    ////////// Doesn't fetch on component mount
    if (!userData) return;

    fetchUsers();

    return () => controller.abort();
  }, [userData, callback, error]);

  console.log(isLoggedIn, isLoading, error, userID);
  return { isLoggedIn, isLoading, error, userID };
}
