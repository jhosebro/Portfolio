import { Box, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { theme } from "../styles/theme";

const About = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 8, maxWidth: 900, mx: "auto" }}>
      <Stack spacing={3}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
          {" "}
          <Typography variant="body1">
            Soy desarrollador frontend enfocado en la creación de aplicaciones
            modernas con React y React Native. Mi enfoque está en construir
            interfaces que no solo sean visualmente atractivas, sino también
            escalables, mantenibles y orientadas al rendimiento. He trabajado en
            proyectos donde la organización de la lógica, la experiencia de
            usuario y la integración con servicios como Supabase son clave para
            generar valor real. Me interesa seguir creciendo en arquitectura
            frontend y desarrollo de productos digitales que impacten usuarios
            reales.
          </Typography>
        </motion.div>
      </Stack>
    </Box>
  );
};

export default About;
