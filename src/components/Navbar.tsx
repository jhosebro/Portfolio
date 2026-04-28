import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

import logo from "../assets/logo.png";

const links = [
  { label: "Inicio", path: "/" },
  { label: "Proyectos", path: "/projects" },
  { label: "Sobre mí", path: "/about" },
  { label: "Contacto", path: "/contact" },
];

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  return (
    <>
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
            justifyContent: "space-between",
          }}
        >
          {/* LOGO */}
          <Box
            component="img"
            src={logo}
            onClick={() => navigate("/")}
            sx={{
              width: 42,
              cursor: "pointer",
              filter: `drop-shadow(0 0 6px ${theme.palette.primary.main}60)`,
            }}
          />

          {/* DESKTOP */}
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                style={{ textDecoration: "none" }}
              >
                {({ isActive }) => (
                  <Box
                    sx={{
                      position: "relative",
                      color: isActive
                        ? theme.palette.primary.main
                        : theme.palette.text.secondary,
                      px: 1,
                      py: 0.5,
                      transition: "all 0.2s ease",

                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {link.label}

                    {/* 🔥 Línea animada */}
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

          {/* CTA DESKTOP */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button variant="contained" onClick={() => navigate("/contact")}>
              Trabajemos juntos
            </Button>
          </Box>

          {/* MOBILE BUTTON */}
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{
              display: { xs: "flex", md: "none" },
              color: theme.palette.primary.main,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* DRAWER CORRECTO SEGÚN DOC */}
      <Drawer
        variant="temporary" // 🔥 IMPORTANTE
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true, // 🔥 performance mobile
        }}
        slotProps={{
          paper: {
            sx: {
              width: 260,
              background: theme.palette.background.paper,
              borderLeft: `1px solid ${theme.palette.divider}`,
            },
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          {/* CLOSE */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* LINKS */}
          <List>
            {links.map((link) => (
              <ListItemButton
                key={link.path}
                onClick={() => {
                  navigate(link.path);
                  setOpen(false); // 🔥 cierre correcto
                }}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  "&:hover": {
                    background: "rgba(0,255,156,0.08)",
                  },
                }}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>

          {/* CTA */}
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
            onClick={() => {
              navigate("/contact");
              setOpen(false);
            }}
          >
            Trabajemos juntos
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
