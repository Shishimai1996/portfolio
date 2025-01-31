"use client";

import { Box, Grid2, Stack, Typography } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { skillList } from "../lib/constants/skillList";
import { Popover } from "./popover";
import { useState } from "react";
import Image from "next/image";

const Skill = () => {
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
    <>
      <Box sx={{ width: "100%", margin: "5%" }}>
        <Grid2 container rowSpacing={9} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {skillList.map((skill) => (
            <Grid2 size={{ xs: 10.5, md: 5 }} key={skill.id}>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h3" id="language">
                  {t(skill.title)}
                </Typography>
                <Stack
                  direction="row"
                  spacing={3}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 3,
                  }}
                >
                  {skill.items.map((item, index) => (
                    <React.Fragment key={index}>
                      <Image
                        src={item.src}
                        tabIndex={item.tabIndex}
                        data-date={item.date}
                        alt={item.alt}
                        style={{ width: item.style, height: "3%" }}
                        aria-owns={open ? "mouse-over-popover" : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                      />
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
      </Box>
    </>
  );
};

export default Skill;
