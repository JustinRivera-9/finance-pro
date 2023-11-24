import { Button, Skeleton } from "@mui/material";
import { useNavigate } from "react-router";
import supabase from "../../../config/supabaseClient";
import useGetSettings from "../../../hooks/useGetSettings";
import { useState } from "react";
import AccountForm from "../../../components/app/account/AccountForm";

function Account({ userId }) {
  const [formOpen, setFormOpen] = useState(false);
  const navigate = useNavigate();

  ////////// Fetches user settings from DB
  const { settings, isLoading, error } = useGetSettings(userId);
  const { first_name, last_name, email } = settings;

  ////////// Handles user sign out
  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    navigate("/");
  }

  ////////// Handles edit form submission
  function handleUpdate(formData) {
    const { firstName, lastName } = formData;
    console.log(firstName, lastName);
  }

  ////////////////////////////// VIEW LOGIC //////////////////////////////
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
        <Skeleton>
          <button>Update</button>
        </Skeleton>
        <Skeleton>
          <button>Sign Out</button>
        </Skeleton>
      </div>
    );
  }

  ////////// Form Modal
  if (formOpen) {
    return (
      <AccountForm
        formOpen={formOpen}
        setFormOpen={setFormOpen}
        onSubmit={handleUpdate}
      />
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
      <Button
        variant="contained"
        onClick={() => setFormOpen(true)}
        size="large"
      >
        Update
      </Button>
      <Button onClick={() => signOutUser()} size="large">
        Sign Out
      </Button>
    </div>
  );
}

export default Account;
