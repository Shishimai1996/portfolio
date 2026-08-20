"use client";

import { Stack, Box, Paper, Grow, Typography, Container } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Link from "@mui/material/Link";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowProfile(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      },
    );
    if (profileRef.current) {
      observer.observe(profileRef.current);
    }
    return () => {
      if (profileRef.current) {
        observer.unobserve(profileRef.current);
      }
    };
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 8, md: 14 },
      }}
      ref={profileRef}
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
          <Box
            sx={{
              width: { xs: "100%", md: "80%" },
              mb: 6,
              textAlign: { xs: "left", md: "center" },
            }}
          >
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
              {t("profile.role")}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "#ffffff",
                fontWeight: 600,
                letterSpacing: "-0.015em",
                lineHeight: 1.3,
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              {t("profile.headline")}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                color: "rgba(255, 255, 255, 0.6)",
                fontWeight: 500,
              }}
            >
              {t("profile.location")}
            </Typography>
          </Box>
          <Grow in={showProfile} timeout={1000}>
            <Paper
              elevation={0}
              sx={{
                p: { md: 8, xs: 5 },
                width: "100%",
                maxWidth: { md: 760, xs: "100%" },
                mx: "auto",
                borderRadius: "8px",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                transition: "all 0.4s ease",
                backdropFilter: "blur(8px)",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.055)",
                  borderColor: "rgba(255, 255, 255, 0.12)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <Stack alignItems={{ xs: "center", md: "flex-start" }}>
                {/* Text Area */}
                <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: 600 } }}>
                  <Typography
                    variant="h4"
                    fontWeight={700}
                    mb={2}
                    sx={{
                      color: "#ffffff",
                    }}
                  >
                    {t("aboutMe")}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: "rgba(255, 255, 255, 0.85)",
                      lineHeight: 1.9,
                      letterSpacing: "0px",
                    }}
                  >
                    {t("profile.bio1")}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: "rgba(255, 255, 255, 0.75)",
                      lineHeight: 1.9,
                      letterSpacing: "0px",
                      fontWeight: 400,
                    }}
                  >
                    {t("profile.bio2")}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mb: 2,
                      color: "rgba(255, 255, 255, 0.7)",
                      lineHeight: 1.7,
                    }}
                  >
                    {t("profile.focusAreas")}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mb: 3,
                      color: "rgba(255, 255, 255, 0.8)",
                      fontWeight: 600,
                      lineHeight: 1.7,
                    }}
                  >
                    {t("profile.closing")}
                  </Typography>

                  {/* Contact Links */}
                  <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={3}
                    alignItems={{ xs: "flex-start", md: "center" }}
                    flexWrap="wrap"
                    useFlexGap
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        px: 3,
                        py: 2,
                        borderRadius: "8px",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        transition: "all 0.4s ease",
                        backdropFilter: "blur(6px)",
                        "&:hover": {
                          background: "rgba(91, 141, 239, 0.08)",
                          borderColor: "rgba(91, 141, 239, 0.3)",
                          transform: "translateY(-1px)",
                        },
                      }}
                    >
                      <GitHubIcon sx={{ color: "rgba(255, 255, 255, 0.75)" }} />
                      <Link
                        href="https://github.com/Shishimai1996"
                        underline="none"
                        sx={{
                          color: "rgba(255, 255, 255, 0.9)",
                          fontWeight: 500,
                          "&:hover": { color: "#5b8def" },
                        }}
                      >
                        GitHub
                      </Link>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        px: 3,
                        py: 2,
                        borderRadius: "8px",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        transition: "all 0.4s ease",
                        backdropFilter: "blur(6px)",
                        "&:hover": {
                          background: "rgba(91, 141, 239, 0.08)",
                          borderColor: "rgba(91, 141, 239, 0.3)",
                          transform: "translateY(-1px)",
                        },
                      }}
                    >
                      <LinkedInIcon sx={{ color: "rgba(255, 255, 255, 0.75)" }} />
                      <Link
                        href="https://www.linkedin.com/in/mai-shimizu-73b2892a8/"
                        underline="none"
                        sx={{
                          color: "rgba(255, 255, 255, 0.9)",
                          fontWeight: 500,
                          "&:hover": { color: "#5b8def" },
                        }}
                      >
                        LinkedIn
                      </Link>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        px: 3,
                        py: 2,
                        borderRadius: "8px",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        transition: "all 0.4s ease",
                        backdropFilter: "blur(6px)",
                        "&:hover": {
                          background: "rgba(91, 141, 239, 0.08)",
                          borderColor: "rgba(91, 141, 239, 0.3)",
                          transform: "translateY(-1px)",
                        },
                      }}
                    >
                      <EmailIcon sx={{ color: "rgba(255, 255, 255, 0.75)" }} />
                      <Link
                        href="mailto:maishimizu75@gmail.com"
                        underline="none"
                        sx={{
                          color: "rgba(255, 255, 255, 0.9)",
                          fontWeight: 500,
                          "&:hover": { color: "#5b8def" },
                        }}
                      >
                        {t("profile.emailLabel")}
                      </Link>
                    </Box>
                  </Stack>
                </Box>
              </Stack>
            </Paper>
          </Grow>
        </Box>
      </Container>
    </Box>
  );
};

export default Profile;
