"use client";

import { Popover as MUIPopover, Typography, Box } from "@mui/material";

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
        horizontal: "center",
      }}
      disableRestoreFocus
      PaperProps={{
        sx: {
          background: "rgba(30, 32, 38, 0.97)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(91, 141, 239, 0.3)",
          borderRadius: "12px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.35)",
          animation: "fadeInScale 0.2s ease-out",
          "@keyframes fadeInScale": {
            "0%": {
              opacity: 0,
              transform: "scale(0.95)",
            },
            "100%": {
              opacity: 1,
              transform: "scale(1)",
            },
          },
        },
      }}
    >
      <Box
        sx={{
          px: 2.5,
          py: 1.5,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            color: "#ffffff",
            letterSpacing: "0.5px",
          }}
        >
          {label}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            color: "rgba(255, 255, 255, 0.85)",
          }}
        >
          {countYear} year{countYear > 1 ? "s" : ""}
        </Typography>
      </Box>
    </MUIPopover>
  );
};
