"use client";

import { Box, Grow, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import sakura from "@assets/image/sakura.jpg";
import "./App.css";
import { ThemeProviderWrapper } from "./ThemeProviderWrapper";
import { Header } from "./component/header";
import TabSetting from "./component/tabs";
import "./i18n";

function App() {
  const { t } = useTranslation();

  const [showHello, setShowHello] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHello(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const [tabIndex, setTabIndex] = useState<number>(0);

  //get the page number from the page.tsx and set it to the page controller
  const handleValueChange = (value: number) => {
    setTabIndex(value);
  };

  return (
    <ThemeProviderWrapper>
      <Box sx={{ width: "100%" }}>
        <header>
          <Header onValueChange={handleValueChange} />
        </header>
        <main>
          <div className="img-container">
            <Image
              src={sakura}
              className="sakura"
              alt="sakura"
              priority={true}
            />

            <Grow in={showHello} timeout={1000} unmountOnExit>
              <Box className="text-overlay">
                <Typography variant="h1">{t("hello")}</Typography>
              </Box>
            </Grow>
          </div>
          <TabSetting tabIndex={tabIndex} />
        </main>
      </Box>
    </ThemeProviderWrapper>
  );
}

export default App;
