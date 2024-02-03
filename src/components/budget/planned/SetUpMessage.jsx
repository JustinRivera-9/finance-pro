import { Button } from "@mui/material";

function SetUpMessage({ openForm }) {
  return (
    <div className="space-y-4 text-center">
      <p className="text-3xl text-[#48ff00]">
        Customize your budget categories!
      </p>
      <p className="text-2xl">
        Try starting with your income or your fixed monthly expenses!
      </p>
      <Button onClick={() => openForm(true)} variant="contained">
        Set Up
      </Button>
    </div>
  );
}

export default SetUpMessage;
