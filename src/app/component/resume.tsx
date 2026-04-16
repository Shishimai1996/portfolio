"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { Divider, Grow, Stack, Typography, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Resume() {
  const [showResume] = useState<boolean>(true);
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 6, md: 10 },
        background:
          "linear-gradient(135deg, rgba(209, 27, 241, 0.03) 0%, rgba(100, 200, 255, 0.03) 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grow in={showResume} timeout={{ enter: 1000, exit: 500 }}>
            <Paper
              elevation={0}
              sx={{
                width: { md: "90%", xs: "100%" },
                p: { md: 6, xs: 4 },
                borderRadius: "20px",
                backdropFilter: "blur(10px)",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(209, 27, 241, 0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.04)",
                  borderColor: "rgba(209, 27, 241, 0.2)",
                  boxShadow: "0 8px 32px rgba(209, 27, 241, 0.1)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    md: "row",
                  },
                  justifyContent: "space-around",
                  gap: { xs: 3, md: 6 },
                }}
              >
                {/* Education Section */}
                <Stack spacing={4} sx={{ flex: 1 }}>
                  <Box>
                    <Stack
                      direction="column"
                      spacing={2}
                      sx={{
                        alignItems: "flex-start",
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: "12px",
                            background: "rgba(209, 27, 241, 0.1)",
                            border: "1px solid rgba(209, 27, 241, 0.2)",
                          }}
                        >
                          <SchoolIcon
                            sx={{ color: "#d11bf1cf", fontSize: 28 }}
                          />
                        </Box>
                        <Typography
                          variant="h6"
                          fontWeight={700}
                          sx={{
                            background:
                              "linear-gradient(135deg, #d11bf1cf 0%, #64c8ff 100%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          Education
                        </Typography>
                      </Stack>

                      <Stack direction="column" spacing={1}>
                        <Typography
                          variant="body1"
                          fontWeight={600}
                          sx={{ color: "rgba(255, 255, 255, 0.9)" }}
                        >
                          {t("name")}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                        >
                          {t("frontendEngineer")}
                        </Typography>
                      </Stack>

                      <Stack
                        direction="column"
                        spacing={1}
                        sx={{
                          pt: 2,
                          pl: 2,
                          borderLeft: "2px solid rgba(209, 27, 241, 0.3)",
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ color: "rgba(255, 255, 255, 0.8)" }}
                        >
                          <strong>{t("university")}</strong>
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "rgba(255, 255, 255, 0.6)" }}
                        >
                          2015 - 2019
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                        >
                          {t("subject")}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>

                {/* Divider */}
                <Divider
                  orientation={isMobile ? "horizontal" : "vertical"}
                  flexItem
                  sx={{
                    borderColor: "rgba(209, 27, 241, 0.2)",
                  }}
                />

                {/* Experience Section */}
                <Stack spacing={4} sx={{ flex: 1 }}>
                  <Stack direction="column" spacing={3}>
                    {/* Job 1 */}
                    <Box>
                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                          alignItems: "center",
                          mb: 2,
                        }}
                      >
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: "12px",
                            background: "rgba(100, 200, 255, 0.1)",
                            border: "1px solid rgba(100, 200, 255, 0.2)",
                          }}
                        >
                          <WorkIcon sx={{ color: "#64c8ff", fontSize: 28 }} />
                        </Box>
                        <Typography
                          variant="h6"
                          fontWeight={700}
                          sx={{
                            background:
                              "linear-gradient(135deg, #d11bf1cf 0%, #64c8ff 100%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          Experience
                        </Typography>
                      </Stack>

                      <Stack
                        direction="column"
                        spacing={1}
                        sx={{
                          pl: 2,
                          borderLeft: "2px solid rgba(100, 200, 255, 0.3)",
                        }}
                      >
                        <Typography
                          variant="body1"
                          fontWeight={600}
                          sx={{ color: "rgba(255, 255, 255, 0.9)" }}
                        >
                          {t("company")}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "rgba(255, 255, 255, 0.6)" }}
                        >
                          2019/4 - 2026/4
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                        >
                          {t("jobContent")}
                        </Typography>
                      </Stack>
                    </Box>

                    <Divider sx={{ borderColor: "rgba(209, 27, 241, 0.1)" }} />

                    {/* Job 2 */}
                    <Box>
                      <Stack
                        direction="column"
                        spacing={1}
                        sx={{
                          pl: 2,
                          borderLeft: "2px solid rgba(100, 200, 255, 0.3)",
                        }}
                      >
                        <Typography
                          variant="body1"
                          fontWeight={600}
                          sx={{ color: "rgba(255, 255, 255, 0.9)" }}
                        >
                          {t("woven")}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "rgba(255, 255, 255, 0.6)" }}
                        >
                          2022/8 - 2025/7
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                        >
                          {t("engineer")}
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>
                </Stack>
              </Box>
            </Paper>
          </Grow>
        </Box>
      </Container>
    </Box>
  );
}
