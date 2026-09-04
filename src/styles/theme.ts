import { createTheme, alpha } from "@mui/material/styles";

const PRIMARY = "#00FF9C";
const ACCENT = "#00E5FF";

export const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: PRIMARY,
      light: "#5CFFC2",
      dark: "#00C97A",
    },

    secondary: {
      main: ACCENT,
    },

    background: {
      default: "#06080C",
      paper: "#0C1018",
    },

    text: {
      primary: "#E8FFF2",
      secondary: "#8CFBD0",
    },

    divider: alpha(PRIMARY, 0.1),
  },

  typography: {
    fontFamily: `"Inter", "Poppins", system-ui, sans-serif`,

    h3: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
      lineHeight: 1.15,
    },

    h4: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
      lineHeight: 1.2,
    },

    h5: {
      fontWeight: 600,
      letterSpacing: "0.01em",
    },

    h6: {
      fontWeight: 600,
    },

    body1: {
      lineHeight: 1.75,
      color: "#B0F0D4",
    },

    body2: {
      lineHeight: 1.6,
      color: "#8CFBD0",
    },

    button: {
      fontWeight: 600,
      letterSpacing: "0.02em",
    },
  },

  shape: {
    borderRadius: 12,
  },

  spacing: 8,

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#06080C",
          backgroundImage: `
            radial-gradient(circle at 15% 10%, rgba(0,255,156,0.04), transparent 35%),
            radial-gradient(circle at 85% 5%, rgba(0,229,255,0.03), transparent 35%)
          `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh",
          scrollBehavior: "smooth",
        },
        "::-webkit-scrollbar": {
          width: 5,
        },
        "::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#1A2030",
          borderRadius: 999,
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "#253040",
        },
        "*::selection": {
          backgroundColor: alpha(PRIMARY, 0.2),
          color: "#fff",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: "none",
          fontWeight: 600,
          transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
          padding: "10px 24px",
        },
      },

      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            background: `linear-gradient(135deg, ${PRIMARY}, #00C97A)`,
            boxShadow: `0 0 20px ${alpha(PRIMARY, 0.25)}`,
            color: "#040507",

            "&:hover": {
              boxShadow: `0 0 30px ${alpha(PRIMARY, 0.5)}`,
              transform: "translateY(-1px)",
            },
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderColor: alpha(PRIMARY, 0.35),
            color: PRIMARY,

            "&:hover": {
              borderColor: PRIMARY,
              backgroundColor: alpha(PRIMARY, 0.06),
              boxShadow: `0 0 12px ${alpha(PRIMARY, 0.25)}`,
            },
          },
        },
      ],
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#0C1018",
          border: `1px solid ${alpha(PRIMARY, 0.06)}`,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          border: `1px solid ${alpha(PRIMARY, 0.08)}`,
          backgroundColor: alpha("#0C1018", 0.6),
          backdropFilter: "blur(12px)",
          boxShadow: "none",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

          "&:hover": {
            borderColor: alpha(PRIMARY, 0.25),
            boxShadow: `0 0 24px ${alpha(PRIMARY, 0.1)}, 0 8px 32px rgba(0,0,0,0.3)`,
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderColor: alpha(PRIMARY, 0.12),
          backgroundColor: alpha(PRIMARY, 0.04),
          fontWeight: 500,
          fontSize: "0.75rem",
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: alpha(PRIMARY, 0.15),
            },
            "&:hover fieldset": {
              borderColor: alpha(PRIMARY, 0.3),
            },
            "&.Mui-focused fieldset": {
              borderColor: PRIMARY,
            },
          },
        },
      },
    },
  },
});
