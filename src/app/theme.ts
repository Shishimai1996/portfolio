import { createTheme } from "@mui/material/styles";

export const themeEn = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
  },
  typography: {
    fontFamily: "Zain, sans-serif",
    h1: {
      fontSize: "9rem",
      fontWeight: 900,
      lineHeight: 1.2,
      color: "#000000dc",
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 800,
      lineHeight: 1.2,
      color: "#000000dc",
    },
    h3: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
      color: "#000000dc",
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 500,
      lineHeight: 1.2,
      color: "#000000dc",
    },
    h5: {
      fontSize: "2rem",
      fontWeight: 300,
      lineHeight: 1.2,
      color: "#000000dc",
    },
    body1: {
      fontSize: "1.5rem",
      fontWeight: 200,
      lineHeight: 1.2,
      color: "#000000dc",
    },
    body2: {
      fontSize: "1.3rem",
      fontWeight: 200,
      lineHeight: 1.2,
      color: "#000000dc",
    },
  },
});

export const themeJa = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff9800",
    },
  },
  typography: {
    fontFamily: "Zen Maru Gothic,serif",
    h1: {
      fontSize: "6rem",
      fontWeight: 900,
      lineHeight: 1.3,
      color: "#000000dc",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 800,
      lineHeight: 1.3,
      color: "#000000dc",
    },
    h3: {
      fontSize: "2.0rem",
      fontWeight: 700,
      lineHeight: 1.3,
      color: "#000000dc",
    },
    h4: {
      fontSize: "2.5rem",
      fontWeight: 400,
      lineHeight: 1.3,
      color: "#000000dc",
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 300,
      lineHeight: 1.3,
      color: "#000000dc",
    },
    body1: {
      fontSize: "1.3rem",
      fontWeight: 200,
      lineHeight: 1.3,
      color: "#000000dc",
    },
  },
});
