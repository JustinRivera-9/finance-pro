import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import supabase from "../../../config/supabaseClient";
import useGetSettings from "../../../hooks/useGetSettings";

function Account() {
  const { settings, isLoading, error } = useGetSettings(
    "090886e5-3913-48bd-8582-6aa150cf0cf2"
  );
  const { first_name, last_name, email } = settings;
  const navigate = useNavigate();

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <div className="flex flex-col justify-center text-3xl mt-24">
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
