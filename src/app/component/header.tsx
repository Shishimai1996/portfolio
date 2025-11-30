"use client";

import MenuIcon from "@mui/icons-material/Menu";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { menuButton } from "../lib/constants/menuButton";
import { searchList } from "../lib/constants/searchWords";
import { HeartButton } from "./heartButton";
import { Search } from "./search";
import { TranslationButton } from "./translationButton";
import ShinyText from "../../components/ShinyText";

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
    if (!debouncedValue.trim()) return;
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

  const menuRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) && //if clicked part is not inside of element
        searchRef.current &&
        !searchRef.current.contains(event.target as Node) && //close menu if outside of search is clicked
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(false);
      }
    };
    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          color: "#ffffffdc",
          backgroundColor: "#2424240",
          borderRadius: 20,
          borderColor: "2px solid #ffffff",
          width: "100%",
          height: "65px",
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
            ref={menuButtonRef}
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "block", md: "none" } }}
            onClick={handleOpenMenu}
          >
            <MenuIcon />
          </IconButton>
          <ShinyText
            text={t("portfolio")}
            disabled={false}
            speed={3}
            className="custom-class"
          />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Search handleInputChange={handleInputChange} />
            <HeartButton
              isHeartClicked={isHeartClicked}
              handleClickHeart={handleClickHeart}
            />
            <TranslationButton handleLanguageToggle={handleLanguageToggle} />
          </Box>
        </Toolbar>
        {openMenu && (
          <Box
            ref={menuRef}
            sx={{
              width: "100%",
              maxWidth: 300,
              backgroundColor: "#f2f6f9",
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
                        <ListItemIcon sx={{ pointerEvents: "none" }}>
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
                <Box ref={searchRef}>
                  <Search handleInputChange={handleInputChange} />
                </Box>
              </List>
            </nav>
          </Box>
        )}
      </AppBar>
    </>
  );
};
