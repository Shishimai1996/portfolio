"use client";

import { Stack, Box, Paper, Grow, Typography, Container } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";
import { useTranslation } from "react-i18next";
import { useTheme, useMediaQuery } from "@mui/material";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Profile = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
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
        py: { xs: 6, md: 10 },
        background:
          "linear-gradient(135deg, rgba(209, 27, 241, 0.03) 0%, rgba(100, 200, 255, 0.03) 100%)",
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
          <Grow in={showProfile} timeout={1000}>
            <Paper
              elevation={0}
              sx={{
                p: { md: 6, xs: 4 },
                width: { md: "80%", xs: "100%" },
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
              <Stack
                direction={isMdUp ? "row" : "column"}
                spacing={{ xs: 3, md: 5 }}
                alignItems={{ xs: "center", md: "flex-start" }}
              >
                {/* Avatar */}
                <Box
                  sx={{
                    position: "relative",
                    flexShrink: 0,
                  }}
                >
                  <Box
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, #d11bf1cf 0%, #64c8ff 100%)",
                      padding: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={`${basePath}/cat.png`}
                      alt="profile"
                      width={112}
                      height={112}
                      style={{
                        borderRadius: "50%",
                        display: "block",
                      }}
                    />
                  </Box>
                </Box>

                {/* Text Area */}
                <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: 600 } }}>
                  <Typography
                    variant="h4"
                    fontWeight={700}
                    mb={3}
                    sx={{
                      background:
                        "linear-gradient(135deg, #d11bf1cf 0%, #64c8ff 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {t("aboutMe")}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2.5,
                      color: "rgba(255, 255, 255, 0.9)",
                      lineHeight: 1.7,
                      letterSpacing: "0.3px",
                    }}
                  >
                    {t("describeMyself")}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 4,
                      color: "rgba(255, 255, 255, 0.8)",
                      lineHeight: 1.7,
                      letterSpacing: "0.3px",
                    }}
                  >
                    {t("hobby")}
                  </Typography>

                  {/* Contact Links */}
                  <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={3}
                    alignItems={{ xs: "flex-start", md: "center" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        px: 2.5,
                        py: 1.5,
                        borderRadius: "12px",
                        background: "rgba(209, 27, 241, 0.08)",
                        border: "1px solid rgba(209, 27, 241, 0.2)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          background: "rgba(209, 27, 241, 0.15)",
                          borderColor: "rgba(209, 27, 241, 0.3)",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      <GitHubIcon sx={{ color: "#d11bf1cf" }} />
                      <Link
                        href="https://github.com/Shishimai1996"
                        underline="none"
                        sx={{
                          color: "rgba(255, 255, 255, 0.9)",
                          fontWeight: 500,
                          "&:hover": { color: "#64c8ff" },
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
                        px: 2.5,
                        py: 1.5,
                        borderRadius: "12px",
                        background: "rgba(100, 200, 255, 0.08)",
                        border: "1px solid rgba(100, 200, 255, 0.2)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          background: "rgba(100, 200, 255, 0.15)",
                          borderColor: "rgba(100, 200, 255, 0.3)",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      <LinkedInIcon sx={{ color: "#64c8ff" }} />
                      <Link
                        href="https://www.linkedin.com/in/mai-shimizu-73b2892a8/"
                        underline="none"
                        sx={{
                          color: "rgba(255, 255, 255, 0.9)",
                          fontWeight: 500,
                          "&:hover": { color: "#d11bf1cf" },
                        }}
                      >
                        LinkedIn
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
