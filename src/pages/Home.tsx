import { Box } from "@mui/material";
import Hero from "../components/sections/Hero";
import AboutSection from "../components/sections/AboutSection";
import Experience from "../components/sections/Experience";
import Education from "../components/sections/Education";
import TechStack from "../components/sections/TechStack";
import Languages from "../components/sections/Languages";

const Home = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, maxWidth: 1100, mx: "auto" }}>
      <Hero />
      <AboutSection />
      <Experience />
      <Education />
      <TechStack />
      <Languages />
    </Box>
  );
};

export default Home;