import { Backdrop, Button, Stack, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";

function SignUp() {
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
      {/* <Landing /> */}
      <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
        <form
          className="bg-slate-100 p-8 rounded-3xl w-3/8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack spacing={3}>
            <TextField
              label="Full Name"
              variant="standard"
              type="text"
              {...register("name", { required: "Please enter full name" })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            <TextField
              type="email"
              label="Email"
              variant="standard"
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label="Password"
              type="password"
              variant="standard"
              {...register("password1", { required: "Password is required" })}
              error={!!errors.password1}
              helperText={errors.password1?.message}
            />
            <TextField
              label="Confirm Password"
              type="password"
              variant="standard"
              {...register("password2", {
                required: "Please confirm password",
              })}
              error={!!errors.password2}
              helperText={errors.password2?.message}
            />
            <div className="flex space-x-6 justify-center">
              <Link to="/">
                <Button variant="outlined">Cancel</Button>
              </Link>
              <Button type="submit" variant="contained">
                Sign-up
              </Button>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </div>
          </Stack>
        </form>
        <DevTool control={control} />
      </Backdrop>
    </>
  );
}

export default SignUp;
