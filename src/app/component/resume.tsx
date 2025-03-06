"use client";

import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { Divider, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Resume() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "20px",
      }}
    >
      <Paper elevation={3} sx={{ width: "70%", height: "500px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            padding: "30px",
            gap: 3,
          }}
        >
          <Stack
            sx={{
              alignItems: "flex-start",
            }}
            spacing={3}
          >
            <Stack direction="column" spacing={1} sx={{ alignItems: "center" }}>
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
              <SchoolIcon sx={{ color: "#720acec5" }} />
              <Typography variant="body2">{t("university")}</Typography>
              <Typography variant="body2">2015-2019</Typography>
              <Typography variant="body2">{t("subject")}</Typography>
            </Stack>
          </Stack>
          <Divider orientation="vertical" flexItem sx={{ margin: "20px" }} />
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
            <Typography variant="body1">2022/8 - 2024/12</Typography>
            <Typography variant="body1">{t("engineer")}</Typography>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}
