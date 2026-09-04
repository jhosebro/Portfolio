import { Box, Typography, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { useLanguage } from "../../i18n/LanguageContext";

const widthByLevel: Record<string, number> = {
  native: 100,
  intermediate: 60,
};

const Languages = () => {
  const theme = useTheme();
  const { t } = useLanguage();

  return (
    <Box component="section" sx={{ py: { xs: 4, md: 6 }, borderTop: `1px solid ${theme.palette.divider}` }}>
      <SectionHeading title={t.languages.title} subtitle={t.languages.subtitle} />

      <Stack spacing={4} sx={{ maxWidth: 560 }}>
        {t.languages.items.map((lang, i) => (
          <motion.div
            key={lang.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.1 }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <Typography variant="body1" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                {lang.name}
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                {lang.level}
              </Typography>
            </Box>
            <Box sx={{ mt: 1.5, height: 6, borderRadius: "999px", backgroundColor: theme.palette.divider }}>
              <Box
                sx={{
                  height: 6,
                  width: `${widthByLevel[lang.levelKey] ?? 50}%`,
                  borderRadius: "999px",
                  background: `linear-gradient(90deg, ${alpha(theme.palette.primary.main, 0.6)}, ${theme.palette.primary.main})`,
                  boxShadow: `0 0 10px ${alpha(theme.palette.primary.main, 0.4)}`,
                }}
              />
            </Box>
          </motion.div>
        ))}
      </Stack>
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

export default Languages;