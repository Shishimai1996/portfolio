"use client";

import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Container } from "@mui/material";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const images = [
  {
    url: `${BASE_PATH}/assets/image/reactTypescript.png`,
    title: "React x Typescript",
    width: "20%",
    link: "https://shishimai1996.github.io/eCommerce-Website/",
  },
  {
    url: `${BASE_PATH}/assets/image/next-JS-framework.png`,
    title: "Next x API app",
    width: "20%",
    link: "https://unsplash-ad8gxniii-maishis-projects.vercel.app/",
  },
  {
    url: `${BASE_PATH}/assets/image/chartJs.png`,
    title: "Chart.js",
    width: "40%",
    link: "https://shishimai1996.github.io/chartJs/",
  },
  {
    url: `${BASE_PATH}/assets/image/weatherapp.png`,
    title: "OpenWeather API",
    width: "40%",
    link: "https://shishimai1996.github.io/weatherApp/",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  borderRadius: "16px",
  overflow: "hidden",
  background: "rgba(255, 255, 255, 0.02)",
  border: "1px solid rgba(209, 27, 241, 0.1)",
  backdropFilter: "blur(10px)",
  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",

  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
    height: 120,
  },

  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    transform: "translateY(-8px) scale(1.02)",
    background: "rgba(255, 255, 255, 0.04)",
    border: "1px solid rgba(209, 27, 241, 0.3)",
    boxShadow:
      "0 12px 40px rgba(209, 27, 241, 0.2), 0 20px 60px rgba(100, 200, 255, 0.1)",

    "& .MuiImageBackdrop-root": {
      opacity: 0.2,
    },
    "& .MuiImageMarked-root": {
      opacity: 1,
      transform: "scale(1.2)",
    },
    "& .MuiTypography-root": {
      color: "#64c8ff",
      textShadow: "0 0 20px rgba(100, 200, 255, 0.5)",
    },
  },
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  borderRadius: "16px",
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: "opacity 0.4s ease",
}));

const ImageF = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
  zIndex: 2,
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 4,
  width: 24,
  backgroundColor: "#64c8ff",
  position: "absolute",
  bottom: -12,
  left: "calc(50% - 12px)",
  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
  opacity: 0,
  borderRadius: "2px",
  boxShadow: "0 0 12px rgba(100, 200, 255, 0.6)",
}));

export default function Work() {
  const router = useRouter();

  const handleClickWork = (link: string) => {
    router.push(link);
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 6, md: 10 },
        background:
          "linear-gradient(135deg, rgba(209, 27, 241, 0.03) 0%, rgba(100, 200, 255, 0.03) 100%)",
      }}
    >
      <Box
        sx={{
          px: { xs: 2, md: 4 },
          maxWidth: "100%",
          mx: "auto",
        }}
      >
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
                key={image.title}
                onClick={() => handleClickWork(image.link)}
                aria-label={image.title}
                sx={{
                  width: "100%",
                  minWidth: 200,
                  height: { xs: 150, md: 220 },
                }}
              >
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  style={{
                    borderRadius: "16px",
                    objectFit: "cover",
                  }}
                />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <ImageF aria-hidden="true">
                  <Typography
                    component="span"
                    variant="h6"
                    fontWeight={700}
                    color="inherit"
                    sx={{
                      position: "relative",
                      p: 2,
                      textAlign: "center",
                      letterSpacing: "0.5px",
                      transition: "all 0.4s ease",
                    }}
                  >
                    {image.title}
                    <ImageMarked className="MuiImageMarked-root" />
                  </Typography>
                </ImageF>
              </ImageButton>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
