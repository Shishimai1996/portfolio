"use client";

import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const images = [
  {
    url: `${BASE_PATH}/assets/image/reactTypescript.png`,
    title: "React x Typescript",
    width: "20%",
    link: "https://shishimai1996.github.io/eCommerce-Website/",
  },
  // {
  //   url: `${BASE_PATH}/assets/image/grafana.png`,
  //   title: "Grafana",
  //   width: "40%",
  //   link: "",
  // },
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
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
    height: 90,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

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
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  borderRadius: "10px",
  backgroundColor: theme.palette.common.black,
  opacity: 0.3,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function Work() {
  const router = useRouter();
  const handleClickWork = (link: string) => {
    router.push(link);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          // flexWrap: "wrap",
          maxWidth: { md: "800px", xs: "300px" },
          margin: "0 auto",
          p: "30px 16px",
          // minWidth: 200,
          // borderRadius: "10px",
          // width: "100%",
          // alignContent: "center",
        }}
      >
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            sx={{
              width: { xs: 90, sm: 250, md: 300 },
              height: "100px",
              margin: "10px",
              borderRadius: "10px",
            }}
            onClick={() => handleClickWork(image.link)}
            aria-label={image.title}
          >
            {/* <ImageSrc
              style={{ backgroundImage: `url(${image.url})` }}
              aria-hidden="true"
            /> */}
            <Image
              src={image.url}
              alt={image.title}
              fill
              style={{ borderRadius: "10px", objectFit: "cover" }}
            />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <ImageF aria-hidden="true">
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  fontFamily: "Zain, sans-serif",
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </ImageF>
          </ImageButton>
        ))}
      </Box>
    </>
  );
}
