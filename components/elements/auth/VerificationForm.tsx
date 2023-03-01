import { Button, Grid, Link, TextField, Typography, Alert } from "@mui/material";
import { useForm } from "react-hook-form";
import { AuthAPI } from "@/pages/api/auth/AuthAPI";
import { useEffect } from "react";

export default function VerificationForm(props: any) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    AuthAPI.confirmSignUp(props.username, data.code).catch((err) => {
      setError("code", { type: "server", message: err.message });
    });
  });

  useEffect(() => {
    console.log("VerificationForm props -> ", props);
  }, [props]);

  return (
    <form noValidate onSubmit={onSubmit}>
      <Typography variant="h2" sx={{ fontSize: "1.2rem", mb: 1 }}>
        Verify your account 📬
      </Typography>
      <Typography variant="h5" sx={{ fontSize: "0.9rem", mb: 2 }}>
        Please enter the verification code sent to <Link>{props.username}</Link>
        .
      </Typography>
      <Grid item>
        {errors.code?.type === "server" && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errors.code?.message?.toString()}
          </Alert>
        )}
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
      <Grid item xs={12} sx={{ mb: 3 }}>
        <Button type="submit" variant="contained" fullWidth>
          Verify
        </Button>
      </Grid>
    </form>
  );
}
