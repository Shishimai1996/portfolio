"use client";

import MenuIcon from "@mui/icons-material/Menu";

import {
  Autocomplete,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { searchList } from "../lib/constants/searchWords";
import { HeartButton } from "./heartButton";
import { TranslationButton } from "./translationButton";
import { menuButton } from "../lib/constants/menuButton";

interface HeaderComponentProps {
  onValueChange: (value: number) => void;
}

export const Header: React.FC<HeaderComponentProps> = ({ onValueChange }) => {
  const { t } = useTranslation();
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [search, setSearch] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState(search);
  const [openMenu, setOpenMenu] = useState(false);

  const { i18n } = useTranslation();

  const handleLanguageToggle = () => {
    const newLanguage = i18n.language === "en" ? "ja" : "en";
    i18n.changeLanguage(newLanguage).catch((error) => {
      console.error("Language change error:", error);
    });
  };

  const handleInputChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setSearch(value);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(search);
    }, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    //after the user put something in the search field, this will return the page number which matches searchList and filled words.
    const result = searchList.find((item) => {
      return (
        item.keys.find((item) => item.includes(debouncedValue.toLowerCase())) ||
        item.label.toLowerCase().includes(debouncedValue.toLowerCase())
      );
    });

    const page = result ? result.page : undefined;

    if (page !== undefined) {
      onValueChange(page);
    } else {
      console.error("Value not found in searchList");
    }
  }, [debouncedValue, onValueChange]);

  const handleClickHeart = () => {
    setIsHeartClicked(true);
    setTimeout(() => {
      setIsHeartClicked(false);
    }, 400);
  };

  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          color: "#523601dc",
          backgroundColor: "#f2f6f9",
          width: "100%",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "block", md: "none" } }}
            onClick={handleOpenMenu}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h3">{t("portfolio")}</Typography>

          <Box sx={{ width: 300, ml: 10, color: "#523601dc" }}>
            <Autocomplete
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
                    item.label
                      .toLowerCase()
                      .includes(searchedInput.toLowerCase())
                  ) {
                    result.push(item.label);
                  }

                  // //if searchList keys includes search input, add it to the result array.
                  const searchedItem = item.keys.find((item) => {
                    return item
                      .toLowerCase()
                      .includes(searchedInput.toLowerCase());
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
                  label="Search"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      width: "250px",
                      height: "40px",
                      padding: "0",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#523601dc",
                    },
                    "& .MuiInputBase-input": {
                      color: "#523601dc",
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
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <HeartButton
              isHeartClicked={isHeartClicked}
              handleClickHeart={handleClickHeart}
            />
            <TranslationButton handleLanguageToggle={handleLanguageToggle} />
          </Box>
        </Toolbar>
        {openMenu && (
          <Box
            sx={{
              width: "100%",
              maxWidth: 300,
              bgcolor: "background.paper",
              position: "absolute",
              top: "64px",
              left: 0,
              boxShadow: 3,
              zIndex: 9999,
            }}
          >
            <nav aria-label="main mailbox folders">
              <List>
                {menuButton.map((item, index) => {
                  const ButtonComponent = item.Component;
                  return (
                    <ListItem disablePadding key={index}>
                      <ListItemButton
                        onClick={() => {
                          if (item.title === "like") {
                            handleClickHeart();
                          } else if (item.title === "translate") {
                            handleLanguageToggle();
                          }
                          setOpenMenu(false);
                        }}
                      >
                        <ListItemIcon>
                          <ButtonComponent
                            isHeartClicked={isHeartClicked}
                            handleClickHeart={handleClickHeart}
                            handleLanguageToggle={handleLanguageToggle}
                          />
                        </ListItemIcon>
                        <ListItemText primary={t(item.title)} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </nav>
          </Box>
        )}
      </AppBar>
    </Box>
  );
};
