import { Backdrop, Button } from "@mui/material";

function CacheNotAvailableError({ alertOpen, setAlertOpen }) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={alertOpen}
      onClick={() => setAlertOpen(false)}
    >
      <div className="flex flex-col items-center space-y-6 bg-[#404040] h-fit w-4/5 text-center rounded-3xl p-6">
        <p className="text-2xl">
          {`Please visit the "Planned" tab before modifying expenses. Sorry for
          any inconvenience.`}
        </p>
        <Button sx={{ fontSize: "1rem" }}>Close</Button>
      </div>
    </Backdrop>
  );
}

export default CacheNotAvailableError;
