import { createTheme, alpha } from "@mui/material/styles";

const PRIMARY = "#00FF9C";

export const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: PRIMARY,
      light: "#5CFFC2",
      dark: "#00C97A",
    },

    secondary: {
      main: "#00E5FF", // acento frío para contraste
    },

    background: {
      default: "#040507",
      paper: "#0A0D12",
    },

    text: {
      primary: "#E6FFF4",
      secondary: "#8CFBD0",
    },

    divider: alpha(PRIMARY, 0.12),
  },

  typography: {
    fontFamily: `"Orbitron", "Inter", sans-serif`,

    h3: {
      fontWeight: 700,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      lineHeight: 1.1,
    },

    h5: {
      fontWeight: 500,
      letterSpacing: "0.06em",
    },

    body1: {
      lineHeight: 1.7,
      color: "#A6FBD8",
    },

    button: {
      fontWeight: 600,
      letterSpacing: "0.04em",
    },
  },

  shape: {
    borderRadius: 16,
  },

  spacing: 8,

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#040507",
          backgroundImage: `
    radial-gradient(circle at 20% 20%, rgba(0,255,156,0.06), transparent 40%),
    radial-gradient(circle at 80% 0%, rgba(0,255,156,0.04), transparent 40%)
  `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh"
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          textTransform: "none",
          transition: "all 0.25s ease",
        },
      },

      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            background: `linear-gradient(90deg, ${PRIMARY}, #00C97A)`,
            boxShadow: `0 0 20px ${alpha(PRIMARY, 0.35)}`,

            "&:hover": {
              boxShadow: `0 0 30px ${alpha(PRIMARY, 0.6)}`,
              transform: "translateY(-2px)",
            },
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderColor: alpha(PRIMARY, 0.5),
            color: PRIMARY,

            "&:hover": {
              borderColor: PRIMARY,
              backgroundColor: alpha(PRIMARY, 0.08),
              boxShadow: `0 0 12px ${alpha(PRIMARY, 0.4)}`,
            },
          },
        },
      ],
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#0A0D12",
          border: `1px solid ${alpha(PRIMARY, 0.08)}`,
          backdropFilter: "blur(10px)",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          border: `1px solid ${alpha(PRIMARY, 0.08)}`,
          boxShadow: "none",

          "&:hover": {
            boxShadow: `0 0 25px ${alpha(PRIMARY, 0.15)}`,
          },
        },
      },
    },
  },
});
