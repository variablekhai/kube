import { Avatar, AvatarGroup, Box, Card, CardContent, Chip, IconButton, Paper, Typography } from "@mui/material";
import LinearProgressWithLabel from "../misc/LinearProgressWithLabel";
import { MdOpenInNew } from "react-icons/md";
import DueDateChip from "../misc/DueDateChip";

export default function ProjectCard() {
    return (
       <Box>
        <Paper
        sx={{ 
            boxShadow: "rgb(58 53 65 / 10%) 0px 2px 10px 0px",
         }}
        >
            <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                    <DueDateChip />
                    <AvatarGroup>
                        <Avatar sx={{ width: "32px", height: "32px" }} src="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/1.png"/>
                        <Avatar sx={{ width: "32px", height: "32px" }} src="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/2.png"/>
                        <Avatar sx={{ width: "32px", height: "32px" }} src="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/3.png"/>
                    </AvatarGroup>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography variant="h2" sx={{ fontSize: "1rem" }}>
                                Project Name
                            </Typography>
                            <Typography variant="h5" sx={{ fontSize: "0.9rem" }}>
                                Project Description
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <LinearProgressWithLabel value={56}/>
                            <IconButton>
                                <MdOpenInNew />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Paper>
       </Box>
    )
}