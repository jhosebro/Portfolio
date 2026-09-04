import { Box, Typography, Stack, Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { useLanguage } from "../../i18n/LanguageContext";

const AboutSection = () => {
  const theme = useTheme();
  const { t } = useLanguage();

  const stack = ["React", "React Native", "TypeScript", "JavaScript", "Supabase", "Material UI"];

  return (
    <Box component="section" sx={{ py: { xs: 4, md: 6 }, borderTop: `1px solid ${theme.palette.divider}` }}>
      <SectionHeading title={t.about.title} subtitle={t.about.subtitle} />

      <Stack spacing={3} sx={{ maxWidth: 720 }}>
        {[t.about.p1, t.about.p2].map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Typography variant="body1">{p}</Typography>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
            {t.about.stackTitle}
          </Typography>
          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
            {stack.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                variant="outlined"
                sx={{
                  borderColor: theme.palette.divider,
                  color: theme.palette.text.primary,
                  fontWeight: 500,
                  "&:hover": {
                    borderColor: alpha(theme.palette.primary.main, 0.3),
                    backgroundColor: alpha(theme.palette.primary.main, 0.04),
                  },
                }}
              />
            ))}
          </Stack>
        </motion.div>
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

export default AboutSection;