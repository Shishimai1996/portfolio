"use client";

import { Autocomplete, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { searchList } from "../lib/constants/searchWords";

interface SearchComponentProps {
  handleInputChange: (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => void;
}

export const Search: React.FC<SearchComponentProps> = ({
  handleInputChange,
}) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ width: 300, ml: 3, color: "#000000dc" }}>
      <Autocomplete
        disablePortal
        filterOptions={(options, state) => {
          //user put something in the search field.
          const searchedInput = state.inputValue;
          //if the user do not put anything in the search field, it shows list.
          if (searchedInput === "") {
            return searchList.map((option) => option.label);
          }

          const result: string[] = [];
          searchList.forEach((item) => {
            //if searchList label item includes search input from users, add it to the result array
            if (
              item.label.toLowerCase().includes(searchedInput.toLowerCase())
            ) {
              result.push(item.label);
            }

            // //if searchList keys includes search input, add it to the result array.
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
        options={[""]} //will be handled by filterOptions
        onChange={handleInputChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label={t("search")}
            sx={{
              "& .MuiOutlinedInput-root": {
                width: "250px",
                height: "40px",
                padding: "0",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#000000dc",
              },
              "& .MuiInputBase-input": {
                color: "#000000dc",
              },
              "& .MuiInputLabel-root": {
                fontSize: "1.5rem",
              },
            }}
            InputLabelProps={{
              sx: {
                top: "-8px", // Adjust this value to align the label
              },
            }}
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Box>
  );
};
