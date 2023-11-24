import { Button, Skeleton } from "@mui/material";
import { useNavigate } from "react-router";
import supabase from "../../../config/supabaseClient";
import useGetSettings from "../../../hooks/useGetSettings";

function Account({ userId }) {
  const { settings, isLoading, error } = useGetSettings(userId);
  const { first_name, last_name, email } = settings;
  const navigate = useNavigate();

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    navigate("/");
  }

  ////////// Loading animation
  if (isLoading) {
    return (
      <div className="flex flex-col items-center text-3xl mt-24 space-y-8">
        <Skeleton variant="rounded">
          <div>First Name: Justin Rivera</div>
        </Skeleton>
        <Skeleton variant="rounded">
          <div>Last Name: Justin Rivera</div>
        </Skeleton>
        <Skeleton variant="rounded">
          <div>Email: Justin.rivera.cm@gmail.com</div>
        </Skeleton>
      </div>
    );
  }

  ////////// Content from Databse
  return (
    <div className="flex flex-col justify-center text-center text-3xl mt-24 space-y-8">
      <h1>
        <strong>First Name: </strong>
        {first_name}
      </h1>
      <h1>
        <strong>Last Name: </strong>
        {last_name}
      </h1>
      <h1>
        <strong>Email: </strong>
        {email}
      </h1>
      <Button onClick={() => signOutUser()} size="large">
        Sign Out
      </Button>
    </div>
  );
}

export default Account;
