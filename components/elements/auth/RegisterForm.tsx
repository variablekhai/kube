import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Link,
  Snackbar,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { HasAccountContext } from "@/contexts/HasAccountContext";
import { AuthAPI } from "@/pages/api/auth/AuthAPI";
import VerificationForm from "./VerificationForm";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const [isVerifying, setIsVerifying] = useState(false);
  const [username, setUsername] = useState("");

  const onSubmit = handleSubmit((data) => {
    AuthAPI.signUp(data.email, data.password)
      .then(() => {
        setUsername(data.email);
        setIsVerifying(true);
      })
      .catch((err) => {
        setError("email", { type: "server", message: err.message });
      });
  });

  const { setHasAccount } = useContext(HasAccountContext);

  return (
    <>
      <Grid item xs={12} sx={{ mb: 5 }}>
        <Typography variant="h2">Your adventure starts here! 🚀</Typography>
        <Typography variant="h5">
          Plan, collaborate and manage your projects better with kube.
        </Typography>
      </Grid>
      {!isVerifying ? (
        <form noValidate onSubmit={onSubmit}>
          <Grid item>
            {errors.email?.type === "server" && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {errors.email?.message?.toString()}
              </Alert>
            )}
            <TextField
              {...(errors.email?.type === "required" && {
                error: true,
                helperText: "Please fill in the field",
              })}
              {...(errors.email?.type === "pattern" && {
                error: true,
                helperText: "Please enter a valid email",
              })}
              {...(errors.email?.type === "server" && {
                error: true,
              })}
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              variant="outlined"
              label="Email"
              fullWidth
              sx={{ mb: 1.5 }}
            />
            <TextField
              {...(errors.password?.type === "required" && {
                error: true,
                helperText: "Please fill in the field",
              })}
              {...(errors.password?.type === "minLength" && {
                error: true,
                helperText: "Password must be at least 6 characters",
              })}
              {...(errors.email?.type === "server" && {
                error: true,
              })}
              {...register("password", { required: true, minLength: 6 })}
              variant="outlined"
              label="Password"
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <Typography variant="h5">
                    I agree to the
                    <Link href="#" sx={{ textDecoration: "none", ml: 1 }}>
                      terms and policy
                    </Link>{" "}
                  </Typography>
                }
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Button type="submit" variant="contained" fullWidth>
              Sign Up
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography variant="h5">
              Already have an account?{" "}
              <Link
                onClick={() => setHasAccount(true)}
                sx={{ textDecoration: "none", ml: 1, cursor: "pointer" }}
              >
                Sign In
              </Link>
            </Typography>
          </Grid>
        </form>
      ) : (
        <VerificationForm username={username} />
      )}
    </>
  );
}
