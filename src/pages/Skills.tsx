import { Box } from "@mui/material";
import CertificationsSection from "../components/sections/CertificationsPreview";

const Skills = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, maxWidth: 900, mx: "auto", py: { xs: 4, md: 6 } }}>
      <CertificationsSection />
    </Box>
  );
};

export default Skills;