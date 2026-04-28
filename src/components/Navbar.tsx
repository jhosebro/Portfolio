import { AppBar, Toolbar, Box, Button, Stack } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import logo from "../assets/logo.png";

const links = [
  { label: "Inicio", path: "/" },
  { label: "Proyectos", path: "/projects" },
  { label: "Sobre mí", path: "/about" },
  { label: "Contacto", path: "/contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "rgba(10,13,18,0.7)",
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar
        sx={{
          maxWidth: 1200,
          width: "100%",
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="Logo"
          onClick={() => navigate("/")}
          sx={{
            width: 42,
            height: 42,
            objectFit: "contain",
            transition: "all 0.3s ease",
            filter: `drop-shadow(0 0 6px ${theme.palette.primary.main}60)`,

            "&:hover": {
              transform: "scale(1.05)",
              filter: `drop-shadow(0 0 12px ${theme.palette.primary.main})`,
            },
          }}
        ></Box>

        <Stack direction="row" spacing={3}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive
                  ? theme.palette.primary.main
                  : theme.palette.text.secondary,
                fontSize: 14,
                letterSpacing: "0.05em",
                position: "relative",
              })}
            >
              {({ isActive }) => (
                <Box sx={{ position: "relative" }}>
                  {link.label}

                  <Box
                    sx={{
                      position: "absolute",
                      left: 0,
                      bottom: -4,
                      width: isActive ? "100%" : "0%",
                      height: 2,
                      background: theme.palette.primary.main,
                      transition: "all 0.3s ease",
                    }}
                  />
                </Box>
              )}
            </NavLink>
          ))}
        </Stack>

        {/* 🔹 CTA */}
        <Button variant="contained" color="primary" href="/contact">
          Trabajemos juntos
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
