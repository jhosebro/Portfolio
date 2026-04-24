// components/Mockup.tsx

import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

type Props = {
  image: string;
};

const Mockup = ({ image }: Props) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Box
        sx={{
          position: "relative",
          width: 280,
          height: 560,
          borderRadius: "32px",
          overflow: "hidden",
          boxShadow: `0 20px 60px rgba(0,0,0,0.5)`,
          background: theme.palette.background.paper,
        }}
      >
        {/* Pantalla */}
        <Box
          component="img"
          src={image}
          alt="project mockup"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Glow effect */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(
              180deg,
              transparent,
              rgba(0,0,0,0.4)
            )`,
          }}
        />
      </Box>
    </motion.div>
  );
};

export default Mockup;