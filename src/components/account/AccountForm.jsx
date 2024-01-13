import { Backdrop, Button, TextField } from "@mui/material";
import { useState } from "react";

function AccountForm({ formOpen, setFormOpen, onSubmit }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleForm(e) {
    e.preventDefault();
    onSubmit({ firstName, lastName });
    setFormOpen(false);
    resetForm();
  }

  function handleCancel() {
    setFormOpen(false);
    resetForm();
  }

  function resetForm() {
    setFirstName("");
    setLastName("");
  }

  return (
    <Backdrop open={formOpen}>
      <div className="flex flex-col bg-[#303030] p-8 rounded-xl">
        <form className="flex flex-col" onSubmit={handleForm}>
          <TextField
            sx={{ marginTop: "1.5rem" }}
            id="outlined-required"
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <TextField
            sx={{ marginTop: "1.5rem" }}
            id="outlined-required"
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ marginTop: "1.5rem" }}
          >
            Save
          </Button>
          <Button sx={{ marginTop: ".75rem" }} onClick={handleCancel}>
            Cancel
          </Button>
        </form>
      </div>
    </Backdrop>
  );
}

export default AccountForm;
