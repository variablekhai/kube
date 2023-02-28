import { Box, Chip } from "@mui/material";
import { BiTimeFive } from "react-icons/bi";

export default function DueDateChip() {
  return (
    <Box>
      <Chip
        icon={<BiTimeFive />}
        size="small"
        label="Due in 5 days"
        color="warning"
        sx={{ color: "#fff" }}
      />
    </Box>
  );
}
