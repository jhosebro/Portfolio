import { Box, Typography, Stack, Card, CardContent, Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { useLanguage } from "../../i18n/LanguageContext";

const Education = () => {
  const theme = useTheme();
  const { t } = useLanguage();

  return (
    <Box component="section" sx={{ py: { xs: 4, md: 6 }, borderTop: `1px solid ${theme.palette.divider}` }}>
      <SectionHeading title={t.education.title} subtitle={t.education.subtitle} />

      <Stack spacing={2.5} sx={{ maxWidth: 720 }}>
        {t.education.items.map((item, i) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Card
              sx={{
                p: { xs: 2, md: 3 },
                borderRadius: 3,
                cursor: "default",
                borderLeft: `3px solid ${theme.palette.primary.main}`,
                "&:hover": {
                  transform: "translateY(-2px)",
                },
                transition: "transform 0.25s ease",
              }}
            >
              <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, flexWrap: "wrap" }}>
                  <Stack spacing={0.5}>
                    <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
                      {item.degree}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: theme.palette.secondary.main, fontWeight: 500 }}>
                      {item.institution}
                    </Typography>
                  </Stack>
                  <Typography
                    variant="caption"
                    sx={{ color: theme.palette.primary.main, fontWeight: 600, alignSelf: "flex-start" }}
                  >
                    {item.period}
                  </Typography>
                </Box>
                <Chip
                  label={item.type}
                  size="small"
                  sx={{
                    mt: 1.5,
                    height: 24,
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: theme.palette.text.secondary,
                    borderColor: theme.palette.divider,
                    backgroundColor: alpha(theme.palette.primary.main, 0.04),
                    "&:hover": {
                      borderColor: alpha(theme.palette.primary.main, 0.3),
                    },
                  }}
                  variant="outlined"
                />
              </CardContent>
            </Card>
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

export default Education;