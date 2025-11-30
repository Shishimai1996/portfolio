"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { Divider, Grow, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Resume() {
  const [showResume, setShowResume] = useState<boolean>(true);
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column", // スマホ・小さい画面：縦並び
          md: "row", // 中画面以上：横並び
        },
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "20px",
      }}
    >
      <Grow in={showResume} timeout={{ enter: 3000, exit: 500 }}>
        <Paper elevation={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              justifyContent: "space-evenly",
              padding: "30px",
              gap: 3,
              bgcolor: "#ffffff58",
            }}
          >
            <Stack
              sx={{
                alignItems: "flex-start",
              }}
              spacing={3}
            >
              <Stack
                direction="column"
                spacing={1}
                sx={{ alignItems: "center" }}
              >
                <Typography variant="h5">{t("name")}</Typography>
                <Typography variant="body2">{t("frontendEngineer")}</Typography>
              </Stack>
              <Stack
                direction="column"
                spacing={1}
                sx={{
                  alignItems: "flex-start",
                }}
              >
                <SchoolIcon />
                <Typography variant="body2">{t("university")}</Typography>
                <Typography variant="body2">2015-2019</Typography>
                <Typography variant="body2">{t("subject")}</Typography>
              </Stack>
            </Stack>
            <Divider
              orientation={isMobile ? "horizontal" : "vertical"}
              flexItem
              sx={{ margin: "20px" }}
            />
            <Stack
              direction="column"
              spacing={1}
              sx={{
                alignItems: "flex-start",
              }}
            >
              <WorkIcon />
              <Typography variant="body1">{t("company")}</Typography>
              <Typography variant="body1">{t("workYear")}</Typography>
              <Typography variant="body1">{t("jobContent")}</Typography>
              <WorkIcon />
              <Typography variant="body1">{t("woven")}</Typography>
              <Typography variant="body1">2022/8 - 2025/7</Typography>
              <Typography variant="body1">{t("engineer")}</Typography>
            </Stack>
          </Box>
        </Paper>
      </Grow>
    </Box>
  );
}
