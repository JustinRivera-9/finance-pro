import { Backdrop, Button, Stack, TextField } from "@mui/material";
import Landing from "./Landing";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <Landing />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <form className="bg-slate-100 p-8 rounded-3xl">
          <Stack spacing={3}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Email"
              variant="standard"
            />
            <TextField
              fullWidth
              id="standard-basic"
              label="Password"
              variant="standard"
            />
            <div className="flex space-x-6 justify-center">
              <Link to="/sign-up">
                <Button variant="outlined">Go to Sign Up</Button>
              </Link>
              <Button variant="contained">Login</Button>
              <Link to="/">
                <Button>Cancel</Button>
              </Link>
            </div>
          </Stack>
        </form>
      </Backdrop>
    </>
  );
}

export default LoginPage;
