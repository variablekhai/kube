import { HasAccountContext } from "@/contexts/HasAccountContext";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import LoginForm from "../auth/LoginForm";
import RegisterForm from "../auth/RegisterForm";


export default function AuthForm() {

  const [hasAccount, setHasAccount] = useState(true);
  const [AuthError, setAuthError] = useState(false);
  const [AuthErrorMessage, setAuthErrorMessage] = useState("");

  return (
    <Box
      sx={{
        height: "100vh",
        width: "35%",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        sx={{
          padding: "2rem",
        }}
      >
        <HasAccountContext.Provider value={ {hasAccount, setHasAccount, AuthError, setAuthError, AuthErrorMessage, setAuthErrorMessage} }>
          { hasAccount ? <LoginForm /> : <RegisterForm />}
        </HasAccountContext.Provider> 
        <Grid item xs={12} sx={{ my: 3 }}>
          <Divider>
            <Typography variant="h5">or</Typography>
          </Divider>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <IconButton>
            <Image
              src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg"
              alt="google"
              width={20}
              height={20}
            />
          </IconButton>
          <IconButton>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="github"
              width={20}
              height={20}
            />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
