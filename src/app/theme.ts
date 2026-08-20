import { createTheme } from "@mui/material/styles";

// Shared type scale so EN/JA switch and all sections render at consistent sizes.
const typeScale = {
  h1: { fontSize: "3.5rem", fontWeight: 800, lineHeight: 1.2 },
  h2: { fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.2 },
  h3: { fontSize: "2rem", fontWeight: 700, lineHeight: 1.3 },
  h4: { fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.3 },
  h5: { fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.3 },
  body1: { fontSize: "1rem", fontWeight: 400, lineHeight: 1.6 },
  body2: { fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.6 },
};

export const themeEn = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5b8def",
    },
    secondary: {
      main: "#5b8def",
    },
    background: {
      default: "#121212",
    },
  },
  typography: {
    fontFamily: "Zain, sans-serif",
    ...typeScale,
  },
});

export const themeJa = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5b8def",
    },
    secondary: {
      main: "#5b8def",
    },
  },
  typography: {
    fontFamily: "Zen Maru Gothic,serif",
    ...typeScale,
  },
});
