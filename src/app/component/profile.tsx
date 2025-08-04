"use client";

import { Stack, Avatar, Box, Paper, Grow, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";
import { useTranslation } from "react-i18next";
import { useTheme, useMediaQuery } from "@mui/material";
import Image from "next/image";

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
      }
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
    <Box sx={{ height: 180 }} ref={profileRef}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grow in={showProfile} timeout={{ enter: 3000, exit: 500 }}>
          <Paper
            elevation={3}
            sx={{
              p: { md: 5, xs: 3 },
              width: { md: "60%", xs: "90%" },
              textAlign: "center",
              // visibility: showProfile ? "visible" : "hidden",
            }}
          >
            <Typography variant="body1" id="about" sx={{ m: 2 }}>
              {t("aboutMe")}
            </Typography>
            <Stack
              direction={isMdUp ? "row" : "column"}
              spacing={3}
              sx={{
                // padding: "30px 50px ",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <Avatar
                alt="Remy Sharp"
                src="/cat.png"
                sx={{ width: 56, height: 56 }}
              /> */}
              <Image
                src={"/cat.png"}
                alt={"Remy Sharp"}
                width={56}
                height={56}
              />
              <Stack direction="column" spacing={2}>
                <Typography variant="body2" sx={{ textAlign: "left" }}>
                  {t("describeMyself")}
                </Typography>
                <Typography variant="body2" sx={{ textAlign: "left" }}>
                  {t("hobby")}
                </Typography>
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
            sx={{
              p: { md: 5, xs: 3 },
              width: { md: "60%", xs: "90%" },
              textAlign: "center",
              mt: 3,
            }}
          >
            <Typography variant="body1" id="contact">
              {t("contact")}
            </Typography>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                px: { xs: 0, md: 2 }, // 横 padding を responsive に抑える
                py: 3,
                justifyContent: "center",
                alignItems: "center", // 縦揃えも追加すると綺麗
                // flexWrap: "wrap", // 狭い画面でも折り返す
              }}
            >
              <Stack direction="column" spacing={2}>
                <GitHubIcon sx={{ width: 40, height: 40 }} />
                <LinkedInIcon sx={{ width: 40, height: 40 }} color="primary" />
              </Stack>
              <Stack direction="column" spacing={4} alignItems={"flex-start"}>
                <Link
                  variant="body2"
                  href="https://github.com/Shishimai1996"
                  underline="always"
                  sx={{
                    wordBreak: "break-all", // 長いURLも折り返し
                  }}
                >
                  {"https://github.com/Shishimai1996"}
                </Link>

                <Link
                  variant="body2"
                  href="https://www.linkedin.com/in/mai-shimizu-73b2892a8/"
                  underline="always"
                  sx={{ textAlign: "left", wordBreak: "break-all" }}
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
