"use client";

import { Stack, Avatar, Box, Paper, Grow, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();
  const [showProfile, setShowProfile] = useState(false);
const profileRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowProfile(entry.isIntersecting)
      },
      {
        threshold: 0.2
      }
    )
    if(profileRef.current){
      observer.observe(profileRef.current)
    }
    return()=>{
      if(profileRef.current){
        observer.unobserve(profileRef.current)
      }
    }

  }, []);

  const data = [
    {
      title: "aboutMe",
      avatar1: {
        alt: "Remy Sharp",
        src: "/cat.png",
      },
      description1: "describeMyself",
      description2: "hobby",
    },
    {
      title: "contact",
      avatar1: {
        alt: "Remy Sharp",
        src: <GitHubIcon sx={{ width: 40, height: 40 }} />,
      },
      description1: "describeMyself",
      description2: "hobby",
    },
  ];
  return (
    <Box sx={{ height: 180 }} ref={profileRef}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grow in={showProfile} timeout={2000}>
          <Paper elevation={3} sx={{ p: 5, width: "60%", textAlign: "center" }}>
            <Typography variant="body1" id="about">
              {t("aboutMe")}
            </Typography>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                padding: "30px 50px ",
                justifyContent: "center",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="/cat.png"
                sx={{ width: 56, height: 56 }}
              />
              <Stack direction="column" spacing={2}>
                <Typography variant="body1">{t("describeMyself")}</Typography>
                <Typography variant="body1">{t("hobby")}</Typography>
              </Stack>
            </Stack>
          </Paper>
        </Grow>
        <Grow
          in={showProfile}
          style={{ transformOrigin: "0 0 0" }}
          {...(showProfile ? { timeout: 3000 } : {})}
        >
          <Paper
            elevation={3}
            sx={{ p: 5, width: "60%", textAlign: "center", mt: 3 }}
          >
            <Typography variant="h5" id="contact">
              {t("contact")}
            </Typography>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                padding: "30px 50px",
                justifyContent: "center",
              }}
            >
              <Stack direction="column" spacing={2}>
                <GitHubIcon sx={{ width: 40, height: 40 }} />
                <LinkedInIcon sx={{ width: 40, height: 40 }} color="primary" />
              </Stack>
              <Stack direction="column" spacing={4} alignItems={"flex-start"}>
                <Link
                  variant="body1"
                  href="https://github.com/Shishimai1996"
                  underline="always"
                >
                  {"https://github.com/Shishimai1996"}
                </Link>

                <Link
                  variant="body1"
                  href="https://www.linkedin.com/in/mai-shimizu-73b2892a8/"
                  underline="always"
                >
                  {"https://www.linkedin.com/in/mai-shimizu-73b2892a8/"}
                </Link>
              </Stack>
            </Stack>
          </Paper>
        </Grow>
      </Box>
    </Box>
  );
};

export default Profile;
