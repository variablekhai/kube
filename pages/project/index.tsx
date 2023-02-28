import ProjectCard from "@/components/elements/projects/ProjectCard";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";

export default function ProjectList() {
    return (
        <>
        <Box sx={{ mb: 3 }}>
            <Typography variant="h2">Project List</Typography>
            <Typography variant="h5">Add and manage your projects here.</Typography>
        </Box>
        <Grid container xs={12} gap={2}>
            <Grid item xs={12} md={5} lg={3}>
                <ProjectCard />
            </Grid>
            <Grid item xs={12} md={5} lg={3}>
                <ProjectCard />
            </Grid>
            <Grid item xs={12} md={5} lg={3}>
                <ProjectCard />
            </Grid>
            <Grid item xs={12} md={5} lg={3}>
                <Paper
                sx={{ 
                boxShadow: "rgb(58 53 65 / 10%) 0px 2px 10px 0px",
                }}
                >
                    <Button variant="outlined" sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", p: 2 }}>
                        <Typography variant="h2" sx={{ fontSize: "1rem" }}>
                            + Add Project
                        </Typography>
                    </Button>
                </Paper>
            </Grid>
        </Grid>
        </>
    )
}