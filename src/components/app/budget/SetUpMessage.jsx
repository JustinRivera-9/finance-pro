import { Button } from "@mui/material";

function SetUpMessage({ openForm }) {
  return (
    <div className="space-y-4 text-center">
      <h1 className="text-3xl">
        Set up your budget to start tracking expenses!
      </h1>
      <Button onClick={() => openForm(true)} variant="contained">
        Set Up
      </Button>
    </div>
  );
}

export default SetUpMessage;
