// pages/Contact.tsx

import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import { theme } from "../styles/theme";

const Contact = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 8 },
        py: 8,
        maxWidth: 600,
        mx: "auto",
      }}
    >
      <Stack spacing={4}>
        {/* 🔹 Header */}
        <Box>
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
              Contacto
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
              ¿Tienes un proyecto o una oportunidad? Estoy disponible para
              colaborar.
            </Typography>
          </motion.div>
        </Box>

        {/* 🔹 Formulario */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {" "}
          <Stack spacing={2}>
            <TextField label="Nombre" fullWidth variant="outlined" />

            <TextField label="Email" type="email" fullWidth />

            <TextField label="Mensaje" multiline rows={4} fullWidth />

            <Button variant="contained" color="primary" size="large">
              Enviar mensaje
            </Button>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              También puedes escribirme directamente a: jhosebro2108@email.com
            </Typography>
          </Stack>
        </motion.div>
      </Stack>
    </Box>
  );
};

export default Contact;
