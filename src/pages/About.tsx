import { Box, Typography, Stack, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  const theme = useTheme();
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 10, maxWidth: 900, mx: "auto" }}>
      <Stack spacing={3}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography
            variant="h4"
            sx={{
              textShadow: `0 0 20px ${theme.palette.primary.main}40`,
            }}
          >
            Sobre mí
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Stack spacing={2}>
            <Typography variant="body1">
              Soy desarrollador frontend enfocado en la creación de aplicaciones
              modernas con{" "}
              <Box component="span" sx={{ color: theme.palette.primary.main }}>
                React y React Native
              </Box>{" "}
            </Typography>

            <Typography variant="body1">
              Me especializo en construir interfaces escalables, mantenibles y
              orientadas al rendimiento.
            </Typography>

            <Typography variant="body1">
              He trabajado en proyectos donde la arquitectura, la experiencia de
              usuario y la integración con servicios como{" "}
              <Box component="span" sx={{ color: theme.palette.primary.main }}>
                Supabase
              </Box>{" "}
              generan valor real.
            </Typography>

            <Typography variant="body1">
              Actualmente busco crecer en arquitectura frontend y desarrollo de
              productos digitales con impacto real.
            </Typography>
          </Stack>
        </motion.div>
      </Stack>
    </Box>
  );
};

export default About;
