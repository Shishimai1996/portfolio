// app/components/HelloOverlay.tsx
"use client";

import { useEffect, useState } from "react";
import { Box, Fade, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import SplitText from "../../components/SplitText";

export default function HelloOverlay() {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // 1秒後に表示
    const showTimer = setTimeout(() => setVisible(true), 10);

    // 4秒後に非表示
    const hideTimer = setTimeout(() => setVisible(false), 3000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <Fade in={visible} timeout={{ enter: 200, exit: 1000 }}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1300, // MUIのModalより上
          width: "100%",
          height: "100%",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.849)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SplitText
          tag="h1"
          text={t("hello")}
          className="hello-text text-black"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          // onLetterAnimationComplete={handleAnimationComplete}
        />
        {/* <Typography
          variant="h1"
          sx={{
            color: "#000000dc",
            fontSize: {
              xs: "4rem", // スマホ
              sm: "5rem", // タブレット
              md: "6rem", // PC
              lg: "7rem", // 大画面
            },
          }}
        >
          {t("hello")}
        </Typography> */}
      </Box>
    </Fade>
  );
}
