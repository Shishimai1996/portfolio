"use client";

import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { Divider, Stack, Typography } from "@mui/material";

export default function Resume() {
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
              <Typography variant="h5">Mai Shimizu</Typography>
              <Typography variant="body2">Frontend Engineer</Typography>
            </Stack>
            <Stack
              direction="column"
              spacing={1}
              sx={{
                alignItems: "flex-start",
              }}
            >
              <SchoolIcon sx={{ color: "#720acec5" }} />
              <Typography variant="body2">Sugiyama University</Typography>
              <Typography variant="body2">2015-2019</Typography>
              <Typography variant="body2">Cross-Culture studies</Typography>
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
            <Typography variant="body1">AISIN Co.</Typography>
            <Typography variant="body1">2019/4~ current</Typography>
            <Typography variant="body1">
              Work as an assistant for reducing ECU costs projects of vehicle
              components.
            </Typography>
            <WorkIcon />
            <Typography variant="body1">Woven by Toyota. Inc</Typography>
            <Typography variant="body1">2022/8 - 2024/12</Typography>
            <Typography variant="body1">
              Work as an associate engineer for the Inventor support division.
            </Typography>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}
