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

export default function LoginForm() {

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
        <Typography variant="h2">Welcome to kube! 👋🏼</Typography>
        <Typography variant="h5">
          Please sign-in to your account to start collaborating with others.
        </Typography>
      </Grid>
      <form noValidate onSubmit={onSubmit}>
        <Grid item>
          <TextField
            {...errors.email?.type === "required" && { error: true, helperText: "Please fill in the field" }}
            {...errors.email?.type === "pattern" && { error: true, helperText: "Please enter a valid email" }}
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            variant="outlined"
            label="Email"
            fullWidth
            sx={{ mb: 1.5 }}
          />
          <TextField
            {...errors.password?.type === "required" && { error: true, helperText: "Please fill in the field" }}
            {...register("password", { required: true})}
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
              label={<Typography variant="h5">Remember me</Typography>}
            />
          </FormGroup>
          <Typography>
            <Link href="#" sx={{ textDecoration: "none" }}>
              Forgot Password?
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mb: 3 }}>
          <Button type="submit" variant="contained" fullWidth>
            Sign In
          </Button>
        </Grid>
      </form>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography variant="h5">
          New on our platform?{" "}
          <Link onClick={() => setHasAccount(false)} sx={{ textDecoration: "none", ml: 1, cursor: "pointer" }}>
            Create an account
          </Link>
        </Typography>
      </Grid>
    </>
  );
}
