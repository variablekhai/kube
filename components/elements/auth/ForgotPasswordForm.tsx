import { HasAccountContext } from "@/contexts/HasAccountContext";
import { AuthAPI } from "@/pages/api/auth/AuthAPI";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Alert,
  Button,
  Link,
} from "@mui/material";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import ConfirmForgotPasswordForm from "./ConfirmForgotPasswordForm";

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const { isForgotPassword, setIsForgotPassword, setIsResettingPassword, isResettingPassword } =
    useContext(HasAccountContext);

    const [email, setEmail] = useState("");

  const onSubmit = handleSubmit((data) => {
    AuthAPI.forgotPassword(data.email)
      .then(() => {
        setEmail(data.email);
        setIsResettingPassword(true);
      })
      .catch((err) => {
        setError("email", { type: "server", message: err.message });
      });
  });

  return (
    <Box>
      {!isResettingPassword ? (
        <Box>
          <Grid item xs={12} sx={{ mb: 5 }}>
            <Typography variant="h2" sx={{ fontSize: "1.5rem", mb: 1 }}>
              Forgot your password? 🤔
            </Typography>
            <Typography variant="h5">
              Enter your email address and we&apos;ll send you a code to reset
              your password.
            </Typography>
          </Grid>
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
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                variant="outlined"
                label="Email"
                fullWidth
                sx={{ mb: 1.5 }}
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Send Code
              </Button>
            </Grid>
          </form>
          <Grid
            item
            xs={12}
            sx={{ mb: 2, display: "flex", justifyContent: "flex-end" }}
          >
            <Typography variant="h5">
              <Link
                onClick={() => setIsForgotPassword(false)}
                sx={{ textDecoration: "none", cursor: "pointer" }}
              >
                Back to sign in
              </Link>
            </Typography>
          </Grid>
        </Box>
      ) : (
        <ConfirmForgotPasswordForm email={email}/>
      )
      }
    </Box>
  );
}
