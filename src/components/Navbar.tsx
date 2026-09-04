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
import { useLanguage } from "../i18n/LanguageContext";

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  const links = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.projects, path: "/projects" },
    { label: t.nav.skills, path: "/skills" },
    { label: t.nav.contact, path: "/contact" },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: alpha(theme.palette.background.default, 0.8),
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1100,
            width: "100%",
            mx: "auto",
            justifyContent: "space-between",
          }}
        >
          <Box
            component="img"
            src={logo}
            onClick={() => navigate("/")}
            sx={{
              width: 38,
              cursor: "pointer",
              filter: `drop-shadow(0 0 4px ${theme.palette.primary.main}40)`,
              transition: "filter 0.2s ease",
              "&:hover": {
                filter: `drop-shadow(0 0 8px ${theme.palette.primary.main}60)`,
              },
            }}
          />

          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
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
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      transition: "all 0.2s ease",

                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {link.label}
                    <Box
                      sx={{
                        position: "absolute",
                        left: 0,
                        bottom: -4,
                        width: isActive ? "100%" : "0%",
                        height: 2,
                        background: theme.palette.primary.main,
                        borderRadius: 1,
                        transition: "all 0.3s ease",
                      }}
                    />
                  </Box>
                )}
              </NavLink>
            ))}

          </Stack>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button variant="contained" size="small" onClick={() => navigate("/contact")}>
              {t.nav.cta}
            </Button>
          </Box>

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

      <Drawer
        variant="temporary"
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        ModalProps={{ keepMounted: true }}
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
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {links.map((link) => (
              <ListItemButton
                key={link.path}
                onClick={() => {
                  navigate(link.path);
                  setOpen(false);
                }}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  "&:hover": {
                    backgroundColor: alpha(theme.palette.primary.main, 0.06),
                  },
                }}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
            onClick={() => {
              navigate("/contact");
              setOpen(false);
            }}
          >
            {t.nav.cta}
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

function alpha(color: string, value: number) {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${value})`;
}

export default Navbar;