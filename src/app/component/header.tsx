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
    value: string,
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
        !menuRef.current.contains(event.target as Node) &&
        searchRef.current &&
        !searchRef.current.contains(event.target as Node) &&
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
        elevation={0}
        sx={{
          background: "rgba(10, 12, 20, 0.92)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          color: "#ffffffdc",
          height: "70px",
          boxShadow: "0 2px 16px rgba(0, 0, 0, 0.25)",
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 2, md: 4 },
          }}
        >
          <IconButton
            ref={menuButtonRef}
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
              display: { xs: "block", md: "none" },
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
                color: "#5b8def",
              },
            }}
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

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              alignItems: "center",
            }}
          >
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
              background: "rgba(15, 16, 20, 0.97)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              position: "absolute",
              top: "70px",
              left: 0,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.35)",
              zIndex: 9999,
              animation: "slideDown 0.3s ease-out",
              "@keyframes slideDown": {
                "0%": {
                  opacity: 0,
                  transform: "translateY(-10px)",
                },
                "100%": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
            }}
          >
            <nav aria-label="main mailbox folders">
              <List>
                {menuButton.map((item, index) => {
                  const ButtonComponent = item.Component;
                  return (
                    <ListItem disablePadding key={index}>
                      <ListItemButton
                        sx={{
                          transition: "all 0.3s ease",
                          "&:hover": {
                            background: "rgba(91, 141, 239, 0.1)",
                            borderLeft: "3px solid rgba(91, 141, 239, 0.5)",
                            pl: "calc(16px - 3px)",
                          },
                        }}
                        onClick={() => {
                          if (item.title === "like") {
                            handleClickHeart();
                          } else if (item.title === "translate") {
                            handleLanguageToggle();
                          }
                          setOpenMenu(false);
                        }}
                      >
                        <ListItemIcon
                          sx={{ pointerEvents: "none", color: "#5b8def" }}
                        >
                          <ButtonComponent
                            isHeartClicked={isHeartClicked}
                            handleClickHeart={handleClickHeart}
                            handleLanguageToggle={handleLanguageToggle}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={t(item.title)}
                          sx={{
                            "& .MuiListItemText-primary": {
                              color: "rgba(255, 255, 255, 0.9)",
                              fontWeight: 500,
                            },
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
                <Box ref={searchRef} sx={{ px: 2, py: 1 }}>
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
