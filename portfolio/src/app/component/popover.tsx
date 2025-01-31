"use client";

import React from "react";
import { Popover as MUIPopover, Typography } from "@mui/material";

export const Popover = ({
  label,
  date,
  anchorEl,
  open,
  handlePopoverClose,
}: {
  label: string;
  date: string;
  anchorEl: HTMLElement | null;
  open: boolean;
  handlePopoverClose: () => void;
}) => {
  if (!open || !anchorEl) return null;

  const currentDate: Date = new Date();
  const targetDate = date ? new Date(date) : new Date();
  const diffInMilliSeconds = currentDate.getTime() - targetDate.getTime();
  const diffInYears = diffInMilliSeconds / (1000 * 60 * 60 * 24 * 365.25);
  const countYear = Math.round(diffInYears * 10) / 10;

  return (
    <MUIPopover
      id="mouse-over-popover"
      sx={{
        pointerEvents: "none",
      }}
      open={open}
      anchorEl={anchorEl}
      onClose={handlePopoverClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      disableRestoreFocus
    >
      <Typography variant="body1" sx={{ p: 1 }}>
        {label}: {countYear} year
        {countYear > 1 ? "s" : ""}
      </Typography>
    </MUIPopover>
  );
};
