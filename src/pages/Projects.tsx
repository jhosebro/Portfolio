import { Box, Grid } from "@mui/material";
import { projects } from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";
import { motion } from "framer-motion";
import SectionHeading from "../components/ui/SectionHeading";
import { useLanguage } from "../i18n/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  return (
    <Box sx={{ px: { xs: 2.5, md: 6 }, py: { xs: 8, md: 10 }, maxWidth: 1100, mx: "auto" }}>
      <SectionHeading title={t.projectsPage.title} subtitle={t.projectsPage.subtitle} />

      <Grid container spacing={{ xs: 3, md: 5 }} sx={{ alignItems: "stretch" }}>
        {projects.map((project) => (
          <Grid size={{ xs: 12, md: 6 }} key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                project={{
                  ...project,
                  description: t.projects[project.id as keyof typeof t.projects]?.description ?? project.description,
                  impact: t.projects[project.id as keyof typeof t.projects]?.impact ?? project.impact,
                }}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;