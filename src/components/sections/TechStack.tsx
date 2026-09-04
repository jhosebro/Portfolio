import { Box, Stack, Chip, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { useLanguage } from "../../i18n/LanguageContext";

const colors = ["#61DAFB", "#FF6B9D", "#22C55E", "#F59E0B", "#8B5CF6"];

const TechStack = () => {
  const theme = useTheme();
  const { t } = useLanguage();

  return (
    <Box component="section" sx={{ py: { xs: 4, md: 6 }, borderTop: `1px solid ${theme.palette.divider}` }}>
      <SectionHeading title={t.tech.title} subtitle={t.tech.subtitle} />

      <Stack spacing={4}>
        {t.tech.categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
          >
            <Typography
              variant="caption"
              sx={{
                color: colors[i % colors.length],
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontSize: "0.7rem",
              }}
            >
              {cat.name}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 1.5, flexWrap: "wrap", gap: 1 }}>
              {cat.items.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  variant="outlined"
                  sx={{
                    borderColor: theme.palette.divider,
                    backgroundColor: "transparent",
                    color: theme.palette.text.primary,
                    fontWeight: 500,
                    fontSize: "0.8rem",
                    height: 34,
                    transition: "all 0.2s ease",
                    "&:hover": {
                      borderColor: alpha(theme.palette.primary.main, 0.3),
                      backgroundColor: alpha(theme.palette.primary.main, 0.04),
                    },
                  }}
                />
              ))}
            </Stack>
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

export default TechStack;