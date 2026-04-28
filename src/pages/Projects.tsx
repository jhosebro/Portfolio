// pages/Projects.tsx

import { Grid, Box, Typography } from "@mui/material";
import { projects } from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";
import { motion } from "framer-motion";
import { theme } from "../styles/theme";

const Projects = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 2 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h4"
          sx={{
            textShadow: `0 0 20px ${theme.palette.primary.main}40`,
            py: 2,
          }}
        >
          Proyectos
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid size={{ xs: 12, md: 6 }} key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
