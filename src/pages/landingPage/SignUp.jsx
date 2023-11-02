import {
  Backdrop,
  Button,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import Landing from "./Landing";
import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";

function SignUp() {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => console.log(data);

  // console.log(watch("example")); // watch input value by passing the name of it

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
              label="Full Name"
              variant="standard"
            />
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
            <TextField
              fullWidth
              id="standard-basic"
              label="Confirm Password"
              variant="standard"
            />
            <div className="flex space-x-4">
              <label id="track-budget" className="text-black text-2xl">
                Do you currently track your budget?
              </label>
              <Select
                labelId="track-budget"
                id="track-budget"
                label="track-budget"
                sx={{ width: "13.2rem", marginLeft: "3rem" }}
                variant="standard"
              >
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </Select>
            </div>
            <div className="flex space-x-8">
              <label id="track-investments" className="text-black text-2xl">
                Do you currently have an investment portfolio?
              </label>
              <Select
                labelId="track-investments"
                id="track-investments"
                label="track-investments"
                sx={{ width: "5rem" }}
                variant="standard"
              >
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </Select>
            </div>
            <div className="flex space-x-6 justify-center">
              <Link to="/login">
                <Button variant="outlined">Go to Login</Button>
              </Link>
              <Button variant="contained">Sign-up</Button>
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

export default SignUp;
