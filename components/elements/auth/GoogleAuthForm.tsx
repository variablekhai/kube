import { AuthAPI } from "@/pages/api/auth/AuthAPI";
import { Button, Grid, IconButton } from "@mui/material";
import Image from "next/image";


export default function GoogleAuthForm() {

    const handleGoogleAuth = () => {
        AuthAPI.GoogleAuth().catch((err) => {
            console.log(err);
        });
    }

    return (
        <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Button
            onClick={handleGoogleAuth}
            startIcon={<Image
              src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg"
              alt="google"
              width={20}
              height={20}
            />}
            variant="outlined"
            fullWidth
            sx={{ color: "#333", borderColor: "#333", textTransform: "none", ":hover": { borderColor: "#000" } }}
            >
                Sign in with Google
            </Button>
        </Grid>
    )
}