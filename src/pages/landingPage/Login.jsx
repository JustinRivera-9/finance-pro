import { Backdrop, Button, Stack, TextField } from "@mui/material";
import Landing from "./Landing";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";

function LoginPage() {
  const { register, handleSubmit, formState, control, reset } = useForm();
  const { errors, isSubmitSuccessful } = formState;

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Landing />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="bg-slate-100 p-8 rounded-3xl"
        >
          <Stack spacing={3}>
            <TextField
              type="email"
              label="Email"
              variant="standard"
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="standard"
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <div className="flex space-x-6 justify-center">
              <Link to="/">
                <Button variant="outlined">Cancel</Button>
              </Link>
              <Button variant="contained" type="submit">
                Login
              </Button>
              <Link to="/sign-up">
                <Button>Sign Up</Button>
              </Link>
            </div>
          </Stack>
        </form>
        <DevTool control={control} />
      </Backdrop>
    </>
  );
}

export default LoginPage;
