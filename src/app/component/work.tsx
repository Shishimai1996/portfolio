"use client";

import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const images = [
  {
    id: "rag",
    url: `${BASE_PATH}/assets/image/rag.png`,
    titleKey: "work.rag.title",
    descriptionKey: "work.rag.description",
    tech: "React · TypeScript · Node.js · OpenAI API",
    width: "40%",
    link: "https://rag-two-brown.vercel.app/",
  },
  {
    id: "todo",
    url: `${BASE_PATH}/assets/image/todoapp.png`,
    titleKey: "work.todo.title",
    descriptionKey: "work.todo.description",
    tech: "Next.js · TypeScript · PostgreSQL · REST API",
    width: "40%",
    link: "http://52.194.34.190/",
  },
  {
    id: "ecommerce",
    url: `${BASE_PATH}/assets/image/reactTypescript.png`,
    titleKey: "work.ecommerce.title",
    descriptionKey: "work.ecommerce.description",
    tech: "React · TypeScript · Redux · Tailwind CSS",
    width: "20%",
    link: "https://shishimai1996.github.io/eCommerce-Website/",
  },
  {
    id: "unsplash",
    url: `${BASE_PATH}/assets/image/next-JS-framework.png`,
    titleKey: "work.unsplash.title",
    descriptionKey: "work.unsplash.description",
    tech: "Next.js · TypeScript · Unsplash API",
    width: "20%",
    link: "https://unsplash-ad8gxniii-maishis-projects.vercel.app/",
  },
  {
    id: "chart",
    url: `${BASE_PATH}/assets/image/chartJs.png`,
    titleKey: "work.chart.title",
    descriptionKey: "work.chart.description",
    tech: "React · Chart.js · TypeScript",
    width: "40%",
    link: "https://shishimai1996.github.io/chartJs/",
  },
  {
    id: "weather",
    url: `${BASE_PATH}/assets/image/weatherapp.png`,
    titleKey: "work.weather.title",
    descriptionKey: "work.weather.description",
    tech: "JavaScript · OpenWeather API · CSS",
    width: "40%",
    link: "https://shishimai1996.github.io/weatherApp/",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 240,
  borderRadius: "8px",
  overflow: "hidden",
  background: "rgba(255, 255, 255, 0.04)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  transition: "all 0.4s ease",

  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
    height: 120,
  },

  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    transform: "translateY(-2px)",
    background: "rgba(255, 255, 255, 0.055)",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.25)",

    "& .MuiImageBackdrop-root": {
      opacity: 0.5,
    },
    "& .MuiImageMarked-root": {
      opacity: 1,
      transform: "scale(1.1)",
    },
    "& .project-title": {
      color: "#ffffff",
    },
    "& .project-details": {
      opacity: 1,
      display: "block",
    },
  },
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  borderRadius: "8px",
  backgroundColor: theme.palette.common.black,
  opacity: 0.35,
  transition: "opacity 0.3s ease",
}));

const ImageF = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
  zIndex: 2,
  padding: theme.spacing(2),
  textAlign: "center",
}));

const ImageMarked = styled("span")(() => ({
  height: 3,
  width: 20,
  backgroundColor: "#5b8def",
  position: "absolute",
  bottom: -10,
  left: "calc(50% - 10px)",
  transition: "all 0.3s ease",
  opacity: 0,
  borderRadius: "2px",
}));

export default function Work() {
  const router = useRouter();
  const { t } = useTranslation();

  const handleClickWork = (link: string) => {
    router.push(link);
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 8, md: 14 },
      }}
    >
      <Box
        sx={{
          px: { xs: 2, md: 4 },
          maxWidth: "100%",
          mx: "auto",
        }}
      >
        <Box sx={{ mb: 8, textAlign: { xs: "left", md: "center" }, maxWidth: 760, mx: "auto" }}>
          <Typography
            variant="overline"
            sx={{
              display: "inline-block",
              color: "rgba(91, 141, 239, 0.8)",
              letterSpacing: "0.3em",
              mb: 2,
              fontWeight: 500,
              fontSize: "0.75rem",
            }}
          >
            {t("work.overline")}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "#ffffff",
              fontWeight: 600,
              letterSpacing: "-0.015em",
              mb: 1,
              lineHeight: 1.3,
              fontSize: { xs: "1.75rem", md: "2rem" },
            }}
          >
            {t("work.headline")}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 3, md: 4 },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: { xs: 2, md: 3 },
              width: "100%",
            }}
          >
            {images.map((image) => (
              <ImageButton
                focusRipple
                key={image.id}
                onClick={() => handleClickWork(image.link)}
                aria-label={t(image.titleKey)}
                sx={{
                  width: "100%",
                  minWidth: 200,
                  height: { xs: 150, md: 220 },
                }}
              >
                <Image
                  src={image.url}
                  alt={t(image.titleKey)}
                  fill
                  style={{
                    borderRadius: "16px",
                    objectFit: "cover",
                  }}
                />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <ImageF aria-hidden="true">
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Typography
                      className="project-title"
                      component="span"
                      variant="h6"
                      fontWeight={700}
                      color="inherit"
                      sx={{
                        letterSpacing: "0.5px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {t(image.titleKey)}
                    </Typography>
                    <Box
                      className="project-details"
                      sx={{
                        opacity: 0,
                        display: "none",
                        transition: "all 0.3s ease",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: "rgba(255, 255, 255, 0.85)",
                          fontSize: "0.75rem",
                          lineHeight: 1.4,
                          display: "block",
                          mb: 0.5,
                        }}
                      >
                        {t(image.descriptionKey)}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "rgba(91, 141, 239, 0.85)",
                          fontSize: "0.7rem",
                          display: "block",
                        }}
                      >
                        {image.tech}
                      </Typography>
                    </Box>
                    <ImageMarked className="MuiImageMarked-root" />
                  </Box>
                </ImageF>
              </ImageButton>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
