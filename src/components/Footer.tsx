import { Box, Typography, Stack, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const links = [
    { label: "Inicio", path: "/" },
    { label: "Proyectos", path: "/projects" },
    { label: "Sobre mí", path: "/about" },
    { label: "Contacto", path: "/contact" },
  ];

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
          {links.map((link) => (
            <Link
              key={link.path}
              component="button"
              onClick={() => navigate(link.path)}
              underline="none"
              color="text.secondary"
              sx={{
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              {link.label}
            </Link>
          ))}
        </Stack>

        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Jhoan Rojas. Todos los derechos reservados.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;