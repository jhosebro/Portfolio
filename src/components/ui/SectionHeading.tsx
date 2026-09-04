import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle?: string;
};

const SectionHeading = ({ title, subtitle }: Props) => {
  const theme = useTheme();

  return (
    <Box sx={{ mb: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <Typography
          variant="h4"
          sx={{
            color: theme.palette.text.primary,
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="body2"
            sx={{ mt: 1, color: theme.palette.text.secondary, fontWeight: 300 }}
          >
            {subtitle}
          </Typography>
        )}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
          <Box
            sx={{
              height: 2,
              width: 40,
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`,
              borderRadius: 1,
            }}
          />
          <Box
            sx={{
              height: 2,
              width: 16,
              backgroundColor: theme.palette.divider,
              borderRadius: 1,
            }}
          />
        </Box>
      </motion.div>
    </Box>
  );
};

export default SectionHeading;
