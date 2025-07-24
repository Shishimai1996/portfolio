"use client";

import { Box, Grow, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import { ThemeProviderWrapper } from "./ThemeProviderWrapper";
import { Header } from "./component/header";
import TabSetting from "./component/tabs";
import "./i18n";
import HelloOverlay from "./component/hello";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
          {/* <div className="img-container"> */}
          {/* <Image
              src={`${BASE_PATH}/assets/image/sakura.jpg`}
              className="sakura"
              alt="sakura"
              priority={true}
              width={500}
              height={300}
              style={{ width: "100%", height: "auto" }}
            /> */}
          <HelloOverlay />
          {/* <Grow in={showHello} timeout={1000} unmountOnExit>
            <Box className="text-overlay">
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "2rem", // スマホ
                    sm: "3rem", // タブレット
                    md: "4rem", // PC
                    lg: "5rem", // 大画面
                  },
                }}
              >
                {t("hello")}
              </Typography>
            </Box>
          </Grow> */}
          {/* </div> */}
          <TabSetting tabIndex={tabIndex} />
        </main>
      </Box>
    </ThemeProviderWrapper>
  );
}

export default App;
