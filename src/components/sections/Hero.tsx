import { Box, Typography, Button, Stack, Grid, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jhosebro/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/jhosebro",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:jhosebro2108@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
];

const Hero = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        alignItems: "center",
        minHeight: "calc(100vh - 128px)",
        py: { xs: 6, md: 10 },
      }}
    >
      <Grid container spacing={5} sx={{ alignItems: "center", width: "100%", m: 0 }}>
        {/* Info */}
        <Grid size={{ xs: 12, md: 7 }} sx={{ order: { xs: 2, md: 1 } }}>
          <Stack spacing={2.5} sx={{ maxWidth: 560 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.75rem", md: "2.5rem" },
                  background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 120%)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Jhoan Sebastian Rojas
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Typography
                variant="h5"
                sx={{ color: theme.palette.secondary.main, fontWeight: 500, fontSize: { xs: "1rem", md: "1.15rem" } }}
              >
                {t.hero.role}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#22C55E",
                    fontSize: "0.8rem",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>
                  </svg>
                </Box>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}>
                  {t.hero.location}
                </Typography>
              </Stack>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Typography variant="body1" sx={{ maxWidth: 460 }}>
                {t.hero.bio}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Stack direction="row" spacing={1.5}>
                {socials.map((s) => (
                  <Box
                    key={s.label}
                    component="a"
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 38,
                      height: 38,
                      borderRadius: 2,
                      border: `1px solid ${theme.palette.divider}`,
                      backgroundColor: alpha(theme.palette.primary.main, 0.03),
                      color: theme.palette.text.secondary,
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: alpha(theme.palette.primary.main, 0.4),
                        backgroundColor: alpha(theme.palette.primary.main, 0.08),
                        color: theme.palette.primary.main,
                        boxShadow: `0 0 12px ${alpha(theme.palette.primary.main, 0.2)}`,
                      },
                    }}
                  >
                    {s.icon}
                  </Box>
                ))}
              </Stack>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 1 }}>
                <Button variant="contained" color="primary" onClick={() => navigate("/projects")}>
                  {t.hero.viewProjects}
                </Button>
                <Button variant="outlined" color="primary" onClick={() => navigate("/contact")}>
                  {t.hero.contact}
                </Button>
              </Stack>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Stack direction="row" spacing={1.5} sx={{ mt: 1, flexWrap: "wrap", gap: 0.5 }}>
                {t.hero.highlights.map((h) => (
                  <Box
                    key={h}
                    sx={{
                      px: 1.5,
                      py: 0.4,
                      borderRadius: 1,
                      border: `1px solid ${theme.palette.divider}`,
                      backgroundColor: alpha(theme.palette.primary.main, 0.03),
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      color: theme.palette.text.secondary,
                    }}
                  >
                    {h}
                  </Box>
                ))}
              </Stack>
            </motion.div>
          </Stack>
        </Grid>

        {/* Foto de perfil */}
        <Grid size={{ xs: 12, md: 5 }} sx={{ order: { xs: 1, md: 2 }, display: "flex", justifyContent: "center" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ position: "relative" }}>
              <Avatar
                src="/profile.jpeg"
                alt="Jhoan Sebastian Rojas"
                sx={{
                  width: { xs: 200, md: 300 },
                  height: { xs: 200, md: 300 },
                  border: `2px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                  boxShadow: `0 0 40px ${alpha(theme.palette.primary.main, 0.15)}, 0 20px 60px rgba(0,0,0,0.4)`,
                  "& .MuiAvatar-img": {
                    objectPosition: "center 20%",
                  },
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 12,
                  right: 12,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: "#22C55E",
                  border: `3px solid ${theme.palette.background.default}`,
                  boxShadow: "0 0 12px rgba(34,197,94,0.5)",
                }}
              />
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

function alpha(color: string, value: number) {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${value})`;
}

export default Hero;