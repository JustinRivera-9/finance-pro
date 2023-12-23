import { Button, Skeleton } from "@mui/material";
import { useNavigate } from "react-router";
import { useState } from "react";
import supabase from "../../../config/supabaseClient";
import useGetSettings from "../../../hooks/supabase/useGetSettings";
import AccountForm from "../../../components/app/account/AccountForm";

function Account({ userId }) {
  ////////// Fetches user settings from DB
  const { settings, isLoading, error } = useGetSettings(userId);
  const { first_name, last_name, email } = settings;

  const [formOpen, setFormOpen] = useState(false);
  const [firstName, setFirstName] = useState(first_name);
  const [lastName, setLastName] = useState(last_name);
  const [isUpdated, setIsUpdated] = useState(false);
  const navigate = useNavigate();

  ////////// Handles user sign out
  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    navigate("/");
  }

  ////////// Handles edit form submission - If the form has been updated it will update the DB and show form data ILO re-fetching from DB
  async function handleUpdate(formData) {
    setFirstName(formData.firstName);
    setLastName(formData.lastName);
    setIsUpdated(true);

    const { data, error } = await supabase
      .from("settings")
      .update({ first_name: formData.firstName, last_name: formData.lastName })
      .eq("user_id", userId)
      .select();

    if (error) console.log("error", error);
  }

  ////////////////////////////// VIEW LOGIC //////////////////////////////
  ////////// Loading animation
  if (isLoading) {
    return (
      <div className="flex flex-col items-center text-3xl mt-4 space-y-8">
        <Skeleton variant="rounded">
          <div>First Name: First Name</div>
        </Skeleton>
        <Skeleton variant="rounded">
          <div>Last Name: Last Name</div>
        </Skeleton>
        <Skeleton variant="rounded">
          <div>Email: First Name_Last Name@gmail.com</div>
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
    <div className="flex flex-col flex-wrap text-lg justify-center text-center mt-4 space-y-6 md:text-3xl">
      <h1>
        <strong>First Name: </strong>
        {isUpdated ? firstName : first_name}
      </h1>
      <h1>
        <strong>Last Name: </strong>
        {isUpdated ? lastName : last_name}
      </h1>
      <h1>
        <strong>Email: </strong>
        {email}
      </h1>
      <div className="flex flex-col w-fit mx-auto space-y-2">
        <Button variant="contained" onClick={() => setFormOpen(true)}>
          Update
        </Button>
        <Button onClick={() => signOutUser()} size="medium">
          Sign Out
        </Button>
      </div>
    </div>
  );
}

export default Account;
