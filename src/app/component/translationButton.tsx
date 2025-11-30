"use client";

import React from "react";
import { IconButton } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";

export const TranslationButton = ({
  handleLanguageToggle,
}: {
  handleLanguageToggle: () => void;
}) => {
  return (
    <IconButton
      size="large"
      sx={{ color: "#ffffffdc" }}
      onClick={handleLanguageToggle}
    >
      <TranslateIcon />
    </IconButton>
  );
};
