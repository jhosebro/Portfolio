// components/Footer.tsx

import { Box, Typography, Stack, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        px: { xs: 2, md: 8 },
        py: 4,
        borderTop: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Stack
        spacing={3}
        sx={{
          maxWidth: 1200,
          mx: "auto",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* 🔹 Links */}
        <Stack direction="row" spacing={3}>
          <Link
            sx={{
              transition: "0.3s",
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
            href="/"
            underline="none"
            color="text.secondary"
          >
            Inicio
          </Link>
          <Link
            sx={{
              transition: "0.3s",
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
            href="/projects"
            underline="none"
            color="text.secondary"
          >
            Proyectos
          </Link>
          <Link
            sx={{
              transition: "0.3s",
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
            href="/about"
            underline="none"
            color="text.secondary"
          >
            Sobre mí
          </Link>
          <Link
            sx={{
              transition: "0.3s",
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
            href="/contact"
            underline="none"
            color="text.secondary"
          >
            Contacto
          </Link>
        </Stack>

        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Jhoan Rojas. Todos los derechos
          reservados.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
