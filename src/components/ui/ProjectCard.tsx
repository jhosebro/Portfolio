import { Box, Typography, Stack, Button, Grid, Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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

  return (
    <Card
      sx={(theme) => ({
        p: { xs: 2, md: 4 },
        borderRadius: 4,
        transition: "all 0.3s ease",
        cursor: "pointer",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: `0 10px 40px ${theme.palette.primary.main}25`,
          borderColor: theme.palette.primary.main,
        },
      })}
    >
      <Grid container sx={{ spacing: 4, alignItems: "center" }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={project.image}
              alt={project.name}
              sx={{
                width: "100%",
                maxWidth: 220,
                borderRadius: 3,
                boxShadow: `0 0 30px ${theme.palette.primary.main}30`,
                transition: "transform 0.4s ease",

                ".MuiCard-root:hover &": {
                  transform: "scale(1.05)",
                },
              }}
            />
          </Box>
        </Grid>

        {/* 🔹 INFO */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={2}>
            <Typography
              variant="h5"
              sx={{
                textShadow: `0 0 20px ${theme.palette.primary.main}40`,
                py: 2,
              }}
            >
              {project.name}
            </Typography>

            <Typography variant="body2">{project.description}</Typography>

            {/* Impacto */}
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 500,
              }}
            >
              {project.impact}
            </Typography>

            {/* Tech */}
            <Stack sx={{ direction: "row", spacing: 1, flexWrap: "wrap" }}>
              {project.tech.map((t) => (
                <Box
                  key={t}
                  sx={{
                    px: 1.5,
                    py: 0.4,
                    mt: 1,
                    borderRadius: "999px",
                    border: `1px solid ${theme.palette.divider}`,
                    fontSize: 12,
                  }}
                >
                  {t}
                </Box>
              ))}
            </Stack>

            {/* CTA */}
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                color="primary"
                href={project.github}
                target="_blank"
              >
                GitHub
              </Button>

              {project.demo && (
                <Button
                  variant="contained"
                  color="primary"
                  href={project.demo}
                  target="_blank"
                >
                  Ver demo
                </Button>
              )}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProjectCard;
