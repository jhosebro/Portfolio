import { Fab, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import type { Lang } from "../../i18n/translations";

const LanguageSwitcher = () => {
  const theme = useTheme();
  const { lang, setLang } = useLanguage();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const select = (l: Lang) => {
    setLang(l);
    handleClose();
  };

  return (
    <>
      <Fab
        size="small"
        aria-label="cambiar idioma"
        onClick={handleClick}
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: theme.zIndex.speedDial,
          backgroundColor: alpha(theme.palette.primary.main, 0.15),
          border: `1px solid ${alpha(theme.palette.primary.main, 0.35)}`,
          backdropFilter: "blur(8px)",
          color: theme.palette.primary.main,
          boxShadow: `0 8px 24px rgba(0,0,0,0.35), 0 0 16px ${alpha(theme.palette.primary.main, 0.15)}`,
          fontWeight: 700,
          fontSize: "0.8rem",
          transition: "all 0.25s ease",
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.background.paper,
            boxShadow: `0 0 24px ${alpha(theme.palette.primary.main, 0.4)}`,
          },
        }}
      >
        <Typography sx={{ fontSize: 14, fontWeight: 700 }}>{lang.toUpperCase()}</Typography>
      </Fab>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              minWidth: 160,
              background: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
            },
          },
        }}
      >
        {(["es", "en"] as Lang[]).map((l) => (
          <MenuItem
            key={l}
            onClick={() => select(l)}
            selected={lang === l}
            sx={{
              minHeight: 40,
              fontWeight: lang === l ? 700 : 500,
              color: lang === l ? theme.palette.primary.main : theme.palette.text.primary,
              "&:hover": {
                backgroundColor: alpha(theme.palette.primary.main, 0.06),
              },
            }}
          >
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
              <Typography sx={{ width: 24, fontSize: "0.8rem", fontWeight: 700 }}>
                {l.toUpperCase()}
              </Typography>
              <Typography sx={{ fontSize: "0.875rem" }}>
                {l === "es" ? "Español" : "English"}
              </Typography>
            </Stack>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

function alpha(color: string, value: number) {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${value})`;
}

export default LanguageSwitcher;