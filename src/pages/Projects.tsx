// pages/Projects.tsx

import { Grid, Box, Typography } from "@mui/material";
import { projects } from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";

const Projects = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 8 }}>
      <Typography variant="h4" gutterBottom sx={{py: 2}}>
        Proyectos
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid size={{ xs: 12, md: 6 }} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;