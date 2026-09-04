import { Box, Typography, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { useLanguage } from "../../i18n/LanguageContext";

const Experience = () => {
  const theme = useTheme();
  const { t } = useLanguage();

  return (
    <Box component="section" sx={{ py: { xs: 4, md: 6 }, borderTop: `1px solid ${theme.palette.divider}` }}>
      <SectionHeading title={t.experience.title} subtitle={t.experience.subtitle} />

      <Stack spacing={5} sx={{ position: "relative", ml: 1 }}>
        {t.experience.items.map((item, i) => (
          <motion.div
            key={item.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <Box sx={{ display: "flex", gap: 3 }}>
              <Box
                sx={{
                  mt: 1.5,
                  width: 12,
                  height: 12,
                  flexShrink: 0,
                  borderRadius: "50%",
                  backgroundColor: theme.palette.primary.main,
                  boxShadow: `0 0 12px ${alpha(theme.palette.primary.main, 0.5)}`,
                }}
              />

              <Box sx={{ flex: 1, position: "relative" }}>
                <Typography
                  variant="caption"
                  sx={{ color: theme.palette.primary.main, fontWeight: 600, letterSpacing: "0.05em" }}
                >
                  {item.period}
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, flexWrap: "wrap" }}>
                  <Typography variant="h6" sx={{ mt: 0.5, color: theme.palette.text.primary }}>
                    {item.role}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: theme.palette.text.secondary, opacity: 0.7, fontWeight: 500, alignSelf: "center" }}
                  >
                    {item.location}
                  </Typography>
                </Box>

                <Typography variant="subtitle2" sx={{ color: theme.palette.secondary.main, fontWeight: 600 }}>
                  {item.company}
                </Typography>

                <Stack spacing={1} sx={{ mt: 1.5 }}>
                  {item.points.map((point, j) => (
                    <Box key={j} sx={{ display: "flex", gap: 1.5 }}>
                      <Box
                        sx={{
                          mt: 0.75,
                          width: 6,
                          height: 6,
                          flexShrink: 0,
                          borderRadius: "50%",
                          backgroundColor: alpha(theme.palette.primary.main, 0.8),
                        }}
                      />
                      <Typography variant="body2" component="span" sx={{ color: theme.palette.text.secondary }}>
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
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

export default Experience;