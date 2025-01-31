"use client";

import React from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import chartJs from "@assets/image/chartJs.png";
import grafana from "@assets/image/grafana.png";
import reactTypescript from "@assets/image/reactTypescript.png";
import Image from "next/image";

const images = [
  {
    url: reactTypescript,
    title: "React x Typescript",
    width: "50%",
    link: "https://shishimai1996.github.io/eCommerce-Website/",
  },
  {
    url: grafana,
    title: "Grafana",
    width: "50%",
    link: "",
  },
  {
    url: chartJs,
    title: "Chart.js",
    width: "50%",
    link: "",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
    height: 100,
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

const handleClickWork = (link: string) => {
  window.location.href = link;
};
export default function Work() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "center",
          minWidth: 300,
          width: "100%",
          margin: "30px",
        }}
      >
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
              margin: "10px",
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
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "10px" }}
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
