import { HasAccountContext } from "@/contexts/HasAccountContext";
import { Alert, AlertColor, Snackbar } from "@mui/material";
import { useContext, useState } from "react";

export default function AlertSnackbar(props: any) {
  
  const [open, setOpen] = useState(props.trigger);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={props.severity}
        sx={{ width: "100%" }}
      >
        {props.message}
      </Alert>
    </Snackbar>
  );
}
