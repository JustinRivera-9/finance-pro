import { Button } from "@mui/material";

function Account() {
  return (
    <div>
      <h1 className="flex justify-center text-3xl mt-24">
        Update settings, logout, change password, etc.
      </h1>
      <Button size="large">LOGOUT</Button>
    </div>
  );
}

export default Account;
