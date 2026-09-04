import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { useLanguage } from "../../i18n/LanguageContext";
import { certifications } from "../../data/certifications";
import { fetchCredlyBadges, CREDLY_USERNAME } from "../../services/credly";
import type { Certification } from "../../data/certifications";

const monthsByLang = {
  es: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
} as const;

const CertificationsPreview = () => {
  const theme = useTheme();
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [badges, setBadges] = useState<Certification[]>(certifications);
  const [live, setLive] = useState(false);

  useEffect(() => {
    let active = true;
    fetchCredlyBadges().then((data) => {
      if (!active) return;
      setBadges(data);
      setLive(true);
    });
    return () => {
      active = false;
    };
  }, []);

  const sorted = useMemo(
    () => [...badges].sort((a, b) => b.date.localeCompare(a.date)),
    [badges],
  );

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const cert of sorted) {
      map.set(cert.category, (map.get(cert.category) ?? 0) + 1);
    }
    return map;
  }, [sorted]);

  const categories = useMemo(
    () => [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([name]) => name),
    [counts],
  );

  const monthNames = monthsByLang[lang as keyof typeof monthsByLang] ?? monthsByLang.en;

  const formatDate = (value: string) => {
    const [year, month] = value.split("-");
    if (month) {
      const idx = Number(month) - 1;
      return `${monthNames[idx] ?? month} ${year}`;
    }
    return year;
  };

  const visible = filter === "all" ? sorted : sorted.filter((c) => c.category === filter);

  const filterProps = (active: boolean) => ({
    size: "small" as const,
    sx: {
      borderRadius: "999px",
      px: 2,
      py: 0.75,
      fontSize: "0.75rem",
      fontWeight: 600,
      textTransform: "none" as const,
      color: active ? theme.palette.background.paper : theme.palette.text.secondary,
      backgroundColor: active ? theme.palette.primary.main : "transparent",
      border: `1px solid ${active ? alpha(theme.palette.primary.main, 0.6) : theme.palette.divider}`,
      "&:hover": {
        backgroundColor: active ? theme.palette.primary.main : alpha(theme.palette.primary.main, 0.08),
        borderColor: alpha(theme.palette.primary.main, 0.5),
        color: active ? theme.palette.background.paper : theme.palette.text.primary,
      },
    },
  });

  return (
    <Box component="section" sx={{ py: { xs: 4, md: 6 } }}>
      <SectionHeading
        title={t.certifications.title}
        subtitle={t.certifications.subtitle}
      />

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4, alignItems: "center" }}>
        <Button onClick={() => setFilter("all")} {...filterProps(filter === "all")}>
          {t.certifications.all} ({sorted.length})
        </Button>

        {categories.map((cat) => (
          <Button key={cat} onClick={() => setFilter(cat)} {...filterProps(filter === cat)}>
            {cat} ({counts.get(cat)})
          </Button>
        ))}

        {live && (
          <Typography
            variant="caption"
            sx={{ ml: "auto", opacity: 0.5, fontSize: "0.7rem", color: theme.palette.text.secondary }}
          >
            {lang === "es" ? `Sincronizado con Credly (@${CREDLY_USERNAME})` : `Synced with Credly (@${CREDLY_USERNAME})`}
          </Typography>
        )}
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, minmax(0, 1fr))",
            sm: "repeat(3, minmax(0, 1fr))",
            lg: "repeat(4, minmax(0, 1fr))",
          },
          gap: { xs: 2, md: 2.5 },
        }}
      >
        {visible.map((cert, i) => (
          <Box
            component={motion.a}
            key={cert.credentialUrl}
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            layout
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              borderRadius: 3,
              border: `1px solid ${theme.palette.divider}`,
              backgroundColor: alpha(theme.palette.background.paper, 0.5),
              p: 2.5,
              textDecoration: "none",
              transition: "all 0.25s ease",
              "&:hover": {
                borderColor: alpha(theme.palette.primary.main, 0.35),
                backgroundColor: theme.palette.background.paper,
                transform: "translateY(-4px)",
                boxShadow: `0 8px 24px rgba(0,0,0,0.25), 0 0 16px ${alpha(theme.palette.primary.main, 0.12)}`,
              },
            }}
          >
            <Box
              component="img"
              src={cert.badgeImage}
              alt={cert.name}
              loading="lazy"
              decoding="async"
              sx={{
                width: { xs: 72, md: 96 },
                height: { xs: 72, md: 96 },
                objectFit: "contain",
                transition: "transform 0.25s ease",
                ".MuiBox-root:hover &": { transform: "scale(1.05)" },
              }}
            />
            <Typography
              variant="body2"
              sx={{
                mt: 1.5,
                fontWeight: 600,
                fontSize: "0.78rem",
                lineHeight: 1.35,
                color: theme.palette.text.primary,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {cert.name}
            </Typography>
            <Typography
              variant="caption"
              sx={{ mt: 0.75, fontFamily: "monospace", fontSize: "0.68rem", color: theme.palette.text.secondary }}
            >
              {formatDate(cert.date)}
            </Typography>
          </Box>
        ))}
      </Box>
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

export default CertificationsPreview;