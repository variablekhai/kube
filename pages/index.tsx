import AuthForm from "@/components/elements/layout/AuthForm";
import Box from "@mui/material/Box";
import Image from "next/image";
import Spline from '@splinetool/react-spline';
import { CircularProgress, Typography } from "@mui/material";
import { useState } from "react";

export default function Home() {

  const [loading, setLoading] = useState(true);

  return (
    <>
    <Box
        sx={{ 
          display: "flex",
          position: "absolute",
          zIndex: 2,
          padding: "2rem",
          alignItems: "center",
          textAlign: "center"
         }}
      >
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        <Typography variant="h2" sx={{ ml: 0.5 }}>kube</Typography>
    </Box>
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      {loading && 
        <Box
        sx={{
          display: "flex",
          position: "absolute",
          top: "50%",
          left: "40%",
          transform: "translate(-40%, -50%)",
          
        }}
        >
          <CircularProgress disableShrink/>
        </Box> 
      }
      <Spline onLoad={() => setLoading(false)} style={{ height: "100vh" }} scene="https://prod.spline.design/7MfmRto6JTy5jQT8/scene.splinecode" />
      <AuthForm />
    </Box>
    </>
  )
}