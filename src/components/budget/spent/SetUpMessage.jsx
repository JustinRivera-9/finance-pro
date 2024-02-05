import { Button } from "@mui/material";

function SetUpMessage({ openForm }) {
  return (
    <div className="flex flex-col mt-4 space-y-4 text-center">
      <p className="text-3xl text-[#48ff00]">Set up your planned budget!</p>
      <p className="text-2xl">
        This page will automatically pull from your planned budget categories.
        Set up your categories to get started.
      </p>
    </div>
  );
}

export default SetUpMessage;
