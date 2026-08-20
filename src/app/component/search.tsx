"use client";

import { Autocomplete, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { searchList } from "../lib/constants/searchWords";

interface SearchComponentProps {
  handleInputChange: (
    event: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => void;
}

export const Search: React.FC<SearchComponentProps> = ({
  handleInputChange,
}) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ width: 300 }}>
      <Autocomplete
        disablePortal
        filterOptions={(_options, state) => {
          const searchedInput = state.inputValue;
          if (searchedInput === "") {
            return searchList.map((option) => option.label);
          }

          const result: string[] = [];
          searchList.forEach((item) => {
            if (
              item.label.toLowerCase().includes(searchedInput.toLowerCase())
            ) {
              result.push(item.label);
            }

            const searchedItem = item.keys.find((item) => {
              return item.toLowerCase().includes(searchedInput.toLowerCase());
            });
            if (searchedItem != undefined) {
              result.push(searchedItem);
            }
          });

          return result.sort();
        }}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={[""]}
        onChange={handleInputChange}
        slotProps={{
          paper: {
            sx: {
              background: "rgba(15, 16, 20, 0.98)",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 12px 48px rgba(0, 0, 0, 0.4)",
              "& .MuiAutocomplete-listbox": {
                padding: "8px 0",
              },
              "& .MuiAutocomplete-option": {
                background: "transparent !important",
                color: "#ffffff !important",
                padding: "12px 16px !important",
                transition: "all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
                fontSize: "14px",
                fontWeight: 500,

                "&:hover": {
                  background: "rgba(91, 141, 239, 0.15) !important",
                  color: "#5b8def !important",
                  paddingLeft: "24px !important",
                  borderLeft: "3px solid rgba(91, 141, 239, 0.8)",
                },

                "&[aria-selected='true']": {
                  background: "rgba(91, 141, 239, 0.22) !important",
                  color: "#5b8def !important",
                  borderLeft: "3px solid rgba(91, 141, 239, 0.8)",
                  paddingLeft: "24px !important",
                  fontWeight: 600,
                },
              },
            },
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            slotProps={{
              htmlInput: {
                ...params.inputProps,
                type: "search",
              },
            }}
            placeholder={t("search")}
            sx={{
              "& .MuiOutlinedInput-root": {
                width: "250px",
                height: "40px",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                transition: "all 0.3s ease",
                color: "#ffffffdc",

                "&:hover": {
                  background: "rgba(255, 255, 255, 0.08)",
                  borderColor: "rgba(91, 141, 239, 0.35)",
                },

                "&.Mui-focused": {
                  background: "rgba(255, 255, 255, 0.1)",
                  borderColor: "rgba(91, 141, 239, 0.6)",
                  boxShadow: "0 0 0 3px rgba(91, 141, 239, 0.15)",
                },
              },

              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },

              "& .MuiInputBase-input": {
                color: "#ffffffdc",
                fontSize: "14px",
                fontWeight: 500,

                "&::placeholder": {
                  color: "rgba(255, 255, 255, 0.5)",
                  opacity: 1,
                },
              },
            }}
          />
        )}
      />
    </Box>
  );
};
