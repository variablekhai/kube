import Sidebar, { DrawerHeader } from "@/components/elements/layout/Sidebar";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ProjectList from "./project";

export default function Dashboard() {
    return(
        <Box sx={{ display: "flex" }}>
            <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, p: 3}}>
                <DrawerHeader />
                <ProjectList />
            </Box>
        </Box>
    )
}
