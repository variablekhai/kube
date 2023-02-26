import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { HasAccountContext } from "@/contexts/HasAccountContext";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
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
      <form noValidate onSubmit={onSubmit}>
        <Grid item>
          <TextField
            {...(errors.email?.type === "required" && {
              error: true,
              helperText: "Please fill in the field",
            })}
            {...(errors.email?.type === "pattern" && {
              error: true,
              helperText: "Please enter a valid email",
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
      </form>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography variant="h5">
          Already have an account?
          <Link onClick={() => setHasAccount(true)} sx={{ textDecoration: "none", ml: 1, cursor: "pointer" }}>
            Sign in here
          </Link>
        </Typography>
      </Grid>
    </>
  );
}
