import { HasAccountContext } from "@/contexts/HasAccountContext";
import { AuthAPI } from "@/pages/api/auth/AuthAPI";
import {
  Box,
  Grid,
  Typography,
  Alert,
  TextField,
  Button,
  Link,
} from "@mui/material";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";

export default function ConfirmForgotPasswordForm(props: any) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const [success, setSuccess] = useState(false);
  const { setIsForgotPassword } = useContext(HasAccountContext);

  const onSubmit = handleSubmit((data) => {
    AuthAPI.forgotPasswordSubmit(props.email, data.code, data.password)
    .then(
        () => {
            setSuccess(true);
        }
    )
    .catch(
      (err) => {
        setError("code", { type: "server", message: err.message });
      }
    );
  });

  return (
    <Box>
      <Grid item xs={12} sx={{ mb: 5 }}>
        <Typography variant="h2" sx={{ fontSize: "1.5rem", mb: 1 }}>
          Reset your password 🔒
        </Typography>
        <Typography variant="h5">
          Please enter your new password and the verification code that
          we&apos;ve sent to <Link sx={{ textDecoration: "none" }}>{props.email}</Link>
        </Typography>
      </Grid>
      <form noValidate onSubmit={onSubmit}>
        <Grid item>
          {errors.code?.type === "server" && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {errors.code?.message?.toString()}
            </Alert>
          )}
          {success && 
            <Alert severity="success" sx={{ mb: 2 }}>
                Your password has been reset successfully! Please sign in with your new password.
            </Alert>
          }
          <TextField
            {...(errors.password?.type === "required" && {
              error: true,
              helperText: "Please fill in the field",
            })}
            {...(errors.password?.type === "minLength" && {
                error: true,
                helperText: "Password must be at least 6 characters",
              })}
            {...(errors.code?.type === "server" && {
              error: true,
            })}
            {...register("password", { required: true, minLength: 6 })}
            variant="outlined"
            label="New Password"
            fullWidth
            sx={{ mb: 1 }}
          />
          <TextField
            {...(errors.code?.type === "required" && {
              error: true,
              helperText: "Please fill in the field",
            })}
            {...(errors.code?.type === "server" && {
              error: true,
            })}
            {...register("code", { required: true })}
            variant="outlined"
            label="Verification Code"
            fullWidth
            sx={{ mb: 1.5 }}
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 2 }}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Reset Password
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
  );
}
