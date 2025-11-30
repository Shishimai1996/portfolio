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
    <Box sx={{ width: 300, mt: 0.8, color: "#ffffff63" }}>
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
            placeholder={t("search")}
            sx={{
              "& .MuiOutlinedInput-root": {
                width: "250px",
                height: "40px",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ffffffdc",
              },
              "& .MuiInputBase-input": {
                color: "#ffffffdc",
              },
              "&::placeholder": {
                color: "#ffffff",
                opacity: 1,
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
