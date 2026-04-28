import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import emailjs from "@emailjs/browser";
import { useState } from "react";


const Contact = () => {
  const theme = useTheme();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Mensaje enviado correctamente");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error(error);
          alert("Error al enviar el mensaje");
          setLoading(false);
        }
      );
  };

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
        {/* Header */}
        <Box>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <Typography
              variant="h4"
              sx={{
                textShadow: `0 0 20px ${theme.palette.primary.main}40`,
              }}
            >
              Contacto
            </Typography>
          </motion.div>

          <Typography variant="body1">
            ¿Tienes un proyecto o una oportunidad? Estoy disponible para colaborar.
          </Typography>
        </Box>

        {/* Formulario */}
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Nombre"
              name="name"
              value={form.name}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Mensaje"
              name="message"
              value={form.message}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              required
            />

            <Button
              type="submit"
              variant="contained"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar mensaje"}
            </Button>

            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              También puedes escribirme a: <strong>jhosebro2108@email.com</strong>
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Contact;