import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLanguage } from "../i18n/LanguageContext";

const Footer = () => {
  const theme = useTheme();
  const { t } = useLanguage();

  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        px: { xs: 2, md: 8 },
        py: 4,
        borderTop: `1px solid ${theme.palette.divider}`,
        textAlign: "center",
      }}
    >
      <Typography variant="body2" sx={{ opacity: 0.5, fontSize: "0.75rem" }}>
        © {new Date().getFullYear()} Jhoan Rojas. {t.footer.rights}
      </Typography>
    </Box>
  );
};

export default Footer;