import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import SectionHeading from "../components/ui/SectionHeading";
import { useLanguage } from "../i18n/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

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
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setSnackbar({
            open: true,
            message: t.contact.success,
            severity: "success",
          });
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error(error);
          setSnackbar({
            open: true,
            message: t.contact.error,
            severity: "error",
          });
          setLoading(false);
        },
      );
  };

  return (
    <Box
      sx={{
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 8 },
        maxWidth: 600,
        mx: "auto",
      }}
    >
      <Stack spacing={4}>
        <Box>
          <SectionHeading
            title={t.contact.title}
            subtitle={t.contact.subtitle}
          />
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2.5}>
              <TextField
                label={t.contact.name}
                name="name"
                value={form.name}
                onChange={handleChange}
                fullWidth
                required
                size="small"
              />

              <TextField
                label={t.contact.email}
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                fullWidth
                required
                size="small"
              />

              <TextField
                label={t.contact.message}
                name="message"
                value={form.message}
                onChange={handleChange}
                multiline
                rows={4}
                fullWidth
                required
                size="small"
              />

              <Button type="submit" variant="contained" disabled={loading} fullWidth>
                {loading ? t.contact.sending : t.contact.send}
              </Button>

              <Typography variant="body2" sx={{ opacity: 0.6, fontSize: "0.8rem" }}>
                {t.contact.emailLine}{" "}
                <strong>jhosebro2108@gmail.com</strong>
              </Typography>
            </Stack>
          </Box>
        </motion.div>
      </Stack>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
