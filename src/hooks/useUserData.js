// import supabase from "../config/supabaseClient";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router";

// export default function useUserData() {
//   const [userId, setUserId] = useState({});
//   const [userdata, setUserData] = useState({});
//   const [isLoading, setIsLoading] = useState(false);

//   // console.log(user);

//   useEffect(() => {
//     async function fetchUserData() {
//       try {
//         setIsLoading(true);

//         ////////// Get authenticated user's ID
//         await supabase.auth.getUser().then((value) => {
//           if (value.data?.user.id) {
//             setUserId(value.data.user.id);
//           }
//         });

//         ////////// Fetch user data based on ID
//         let { data: users, error } = await supabase
//           .from("users")
//           .select("user_id")
//           .eq("user_id", userId);

//         console.log(users);
//         // setUserData(users)

//         setIsLoading(false);
//       }
//     } catch (err) {
//       console.log(err)
//     } finally {
//       setIsLoading(false)
//     }

//     fetchUserData();
//   }, [userId]);

//   return { userId, isLoading };
// }
import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

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
          .from("user_activity")
          .select("*")
          .eq("user_id", userId);
        setUserData(users);

        console.log(users);
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
