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

const aiCloudSkillList = [
  {
    id: "aiEngineering",
    title: "skill.aiEngineering",
    items: ["LangChain", "Qdrant (Vector Search)", "RAG Pipelines", "Prompt Engineering"],
  },
  {
    id: "cloudBackend",
    title: "skill.cloudBackend",
    items: ["AWS (EC2 / S3)", "Docker & CI/CD", "PostgreSQL", "NestJS"],
  },
];

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
        py: { xs: 8, md: 12 },
        overflow: "visible",
      }}
    >
      <Container maxWidth="xl" sx={{ overflow: "visible" }}>
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
            {t("skill.overline")}
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
            {t("skill.headline")}
          </Typography>
        </Box>
        <Grid2
          container
          spacing={{ xs: 5, md: 4 }}
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
                  p: { xs: 4, md: 5 },
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  transition: "all 0.4s ease",
                  width: "100%",
                  backdropFilter: "blur(8px)",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.055)",
                    borderColor: "rgba(255, 255, 255, 0.12)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <Typography
                  variant={isMdUp ? "h5" : "h6"}
                  sx={{
                    textAlign: "center",
                    fontWeight: 700,
                    color: "#ffffff",
                    mb: 3,
                    letterSpacing: "0.3px",
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
                    gap: 2,
                  }}
                >
                  {skill.items.map((item, index) => (
                    <React.Fragment key={index}>
                      <Box
                        sx={{
                          display: "inline-flex",
                          borderRadius: "10px",
                          transition: "all 0.3s ease",
                          cursor: "pointer",
                          padding: "8px",
                          background: "rgba(255, 255, 255, 0.05)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",

                          "&:hover": {
                            transform: "translateY(-4px) scale(1.05)",
                            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                            background: "rgba(255, 255, 255, 0.08)",
                            borderColor: "rgba(91, 141, 239, 0.3)",
                          },
                          "&:hover img": {
                            filter: "brightness(1.15)",
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

          {aiCloudSkillList.map((category) => (
            <Grid2
              size={{ xs: 12, md: 12 }}
              key={category.id}
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
                  p: { xs: 4, md: 5 },
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  transition: "all 0.4s ease",
                  width: "100%",
                  backdropFilter: "blur(8px)",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.055)",
                    borderColor: "rgba(255, 255, 255, 0.12)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <Typography
                  variant={isMdUp ? "h5" : "h6"}
                  sx={{
                    textAlign: "center",
                    fontWeight: 700,
                    color: "#ffffff",
                    mb: 3,
                    letterSpacing: "0.3px",
                  }}
                >
                  {t(category.title)}
                </Typography>
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 1.5,
                  }}
                >
                  {category.items.map((item) => (
                    <Box
                      key={item}
                      sx={{
                        px: 2.5,
                        py: 1.25,
                        borderRadius: "999px",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-4px) scale(1.05)",
                          background: "rgba(255, 255, 255, 0.08)",
                          borderColor: "rgba(255, 255, 255, 0.2)",
                        },
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: "rgba(255, 255, 255, 0.85)", fontWeight: 500 }}
                      >
                        {item}
                      </Typography>
                    </Box>
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
