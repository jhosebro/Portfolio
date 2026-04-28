// components/Hero.tsx

import { Box, Typography, Button, Stack, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Mockup from "./Mockup";

import mockup from "../../assets/mockupBarberRank.jpg";

const Hero = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        mx: "auto",
        maxWidth: 1100,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          alignItems: "center",
          height: "100%",
        }}
      >
        {/* 🔹 IZQUIERDA */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={3}>
            {/* Nombre */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Typography
                variant="h3"
                sx={{
                  textShadow: `0 0 20px ${theme.palette.primary.main}40`,
                }}
              >
                Jhoan Rojas
              </Typography>
            </motion.div>

            {/* Rol */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: theme.palette.secondary.main,
                }}
              >
                Software & Mobile Developer
              </Typography>
            </motion.div>

            {/* Descripción */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Typography variant="body1">
                Desarrollo interfaces web y móviles que mejoran la conversión y
                el rendimiento, aplicando arquitectura escalable y buenas
                prácticas de frontend.
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.7 }}>
                React • React Native • TypeScript • Supabase
              </Typography>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate("/projects")}
                >
                  Ver proyectos
                </Button>

                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => navigate("/contact")}
                >
                  Contacto
                </Button>
              </Stack>
            </motion.div>
          </Stack>
        </Grid>

        {/* 🔹 DERECHA */}
        <Grid size={{ xs: 12, md: 6}}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: 500,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pt: 6
            }}
          >
            {/* Mockup */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              style={{ zIndex: 2 }}
            >
              <Mockup image={mockup} />
            </motion.div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
