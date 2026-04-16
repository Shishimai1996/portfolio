"use client";

import { Box, Grid2, Stack, Typography, Container } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { skillList } from "../lib/constants/skillList";
import { Popover } from "./popover";
import { useState } from "react";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Skill = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 6, md: 8 },
        background:
          "linear-gradient(135deg, rgba(209, 27, 241, 0.03) 0%, rgba(100, 200, 255, 0.03) 100%)",
        overflow: "visible",
      }}
    >
      <Container maxWidth="xl" sx={{ overflow: "visible" }}>
        <Grid2
          container
          spacing={{ xs: 4, md: 3 }}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
            },
          }}
        >
          {skillList.map((skill) => (
            <Grid2
              size={{ xs: 12, md: 12 }}
              key={skill.id}
              sx={{
                display: "flex",
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: { xs: 3, md: 4 },
                  borderRadius: "16px",
                  background: "rgba(255, 255, 255, 0.02)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(209, 27, 241, 0.1)",
                  transition: "all 0.3s ease",
                  width: "100%",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.04)",
                    borderColor: "rgba(209, 27, 241, 0.2)",
                    boxShadow: "0 8px 32px rgba(209, 27, 241, 0.1)",
                  },
                }}
              >
                <Typography
                  variant={isMdUp ? "h4" : "h5"}
                  sx={{
                    textAlign: "center",
                    fontWeight: 700,
                    background:
                      "linear-gradient(135deg, #d11bf1cf 0%, #64c8ff 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 4,
                    letterSpacing: "-0.5px",
                  }}
                >
                  {t(skill.title)}
                </Typography>
                <Stack
                  direction="row"
                  spacing={{ xs: 2, md: 3 }}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 2.5,
                  }}
                >
                  {skill.items.map((item, index) => (
                    <React.Fragment key={index}>
                      <Box
                        sx={{
                          display: "inline-flex",
                          borderRadius: "14px",
                          transition:
                            "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                          cursor: "pointer",
                          padding: "8px",
                          background: "rgba(255, 255, 255, 0.02)",
                          border: "1px solid rgba(209, 27, 241, 0.1)",

                          "&:hover": {
                            transform: "translateY(-8px) scale(1.08)",
                            boxShadow: `
                              0 12px 24px rgba(209, 27, 241, 0.2),
                              0 20px 40px rgba(100, 200, 255, 0.15),
                              inset 0 1px 2px rgba(255, 255, 255, 0.2)
                            `,
                            background: "rgba(209, 27, 241, 0.08)",
                            borderColor: "rgba(209, 27, 241, 0.3)",
                          },
                          "&:hover img": {
                            filter:
                              "brightness(1.25) drop-shadow(0 0 8px rgba(209, 27, 241, 0.4))",
                          },
                        }}
                      >
                        <Image
                          src={item.src}
                          tabIndex={item.tabIndex}
                          data-date={item.date}
                          alt={item.alt}
                          width={item.style}
                          height={50}
                          aria-owns={open ? "mouse-over-popover" : undefined}
                          aria-haspopup="true"
                          onMouseEnter={handlePopoverOpen}
                          onMouseLeave={handlePopoverClose}
                          style={{ transition: "all 0.3s ease" }}
                        />
                      </Box>
                      <Popover
                        label={item.alt}
                        date={item.date}
                        anchorEl={anchorEl}
                        open={anchorEl?.getAttribute("alt") === item.alt}
                        handlePopoverClose={handlePopoverClose}
                      />
                    </React.Fragment>
                  ))}
                </Stack>
              </Stack>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};

export default Skill;
