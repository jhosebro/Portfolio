import { Box, Typography, Stack, Button, Grid, Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLanguage } from "../../i18n/LanguageContext";

type Props = {
  project: {
    name: string;
    description: string;
    impact: string;
    tech: string[];
    image: string;
    github: string;
    demo?: string;
  };
};

const ProjectCard = ({ project }: Props) => {
  const theme = useTheme();
  const { t } = useLanguage();

  return (
    <Card
      sx={(theme) => ({
        p: { xs: 3, md: 4 },
        borderRadius: 3,
        cursor: "pointer",
        minHeight: 260,

        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: alpha(theme.palette.primary.main, 0.3),
        },

        ".MuiCard-root:hover & .project-img": {
          transform: "scale(1.04)",
        },
      })}
    >
      <Grid
        container
        spacing={{ xs: 3, md: 4 }}
        sx={{ alignItems: "center", height: "100%" }}
      >
        {/* Icono / placeholder */}
        <Grid size={{ xs: 12, sm: 4 }}>
          <Box sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-start" } }}>
            <Box
              className="project-img"
              sx={{
                width: 200,
                height: 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 3,
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.25)}, ${alpha(theme.palette.secondary.main, 0.15)})`,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: "4rem",
                  letterSpacing: "0.02em",
                  WebkitTextFillColor: "transparent",
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: "text",
                }}
              >
                {project.name.slice(0, 2).toUpperCase()}
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Contenido */}
        <Grid size={{ xs: 12, sm: 8 }}>
          <Stack spacing={2}>
            <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
              {project.name}
            </Typography>

            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
              {project.description}
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: theme.palette.primary.main, fontWeight: 500, fontSize: "0.8rem" }}
            >
              {project.impact}
            </Typography>

            <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1, mt: 0.5 }}>
              {project.tech.map((tech) => (
                <Box
                  key={tech}
                  sx={{
                    px: 1.5,
                    py: 0.4,
                    borderRadius: "6px",
                    border: `1px solid ${theme.palette.divider}`,
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    color: theme.palette.text.secondary,
                  }}
                >
                  {tech}
                </Box>
              ))}
            </Stack>

            <Stack direction="row" spacing={1.5} sx={{ mt: 0.5 }}>
              <Button
                variant="outlined"
                color="primary"
                href={project.github}
                target="_blank"
                size="small"
                sx={{ fontSize: "0.8rem", px: 2 }}
              >
                {t.projectsPage.github}
              </Button>
              {project.demo && (
                <Button
                  variant="contained"
                  color="primary"
                  href={project.demo}
                  target="_blank"
                  size="small"
                  sx={{ fontSize: "0.8rem", px: 2 }}
                >
                  {t.projectsPage.demo}
                </Button>
              )}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};

function alpha(color: string, value: number) {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${value})`;
}

export default ProjectCard;