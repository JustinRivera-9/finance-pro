import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import supabase from "../../../config/supabaseClient";

function Account() {
  const navigate = useNavigate();

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <div>
      <h1 className="flex justify-center text-3xl mt-24">
        Update settings, logout, change password, etc.
      </h1>
      <Button onClick={() => signOutUser()} size="large">
        LOGOUT
      </Button>
    </div>
  );
}

export default Account;
