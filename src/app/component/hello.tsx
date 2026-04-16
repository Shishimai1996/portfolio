"use client";

import { useEffect, useState } from "react";
import { Box, Fade } from "@mui/material";
import { useTranslation } from "react-i18next";
import SplitText from "../../components/SplitText";

export default function HelloOverlay() {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 10);
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
          zIndex: 1300,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(20, 20, 40, 0.95) 0%, rgba(30, 20, 50, 0.95) 100%)",
          backdropFilter: "blur(10px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(209, 27, 241, 0.15) 0%, transparent 70%)",
            borderRadius: "50%",
            top: "-100px",
            left: "-100px",
            animation: "float 6s ease-in-out infinite",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(100, 200, 255, 0.15) 0%, transparent 70%)",
            borderRadius: "50%",
            bottom: "-50px",
            right: "-50px",
            animation: "float 8s ease-in-out infinite reverse",
          },
          "@keyframes float": {
            "0%, 100%": {
              transform: "translateY(0px)",
            },
            "50%": {
              transform: "translateY(30px)",
            },
          },
        }}
      >
        {/* Floating particles */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            "&::before": {
              content: '""',
              position: "absolute",
              width: "2px",
              height: "2px",
              background: "rgba(209, 27, 241, 0.4)",
              borderRadius: "50%",
              top: "20%",
              left: "10%",
              animation: "pulse 2s ease-in-out infinite",
            },
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <SplitText
            tag="h1"
            text={t("hello")}
            className="hello-text"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />

          {/* Decorative line */}
          <Box
            sx={{
              width: "100px",
              height: "4px",
              background:
                "linear-gradient(90deg, transparent 0%, #64c8ff 50%, transparent 100%)",
              margin: "20px auto 0",
              borderRadius: "2px",
              animation: "slideIn 0.8s ease-out 0.3s forwards",
              opacity: 0,
              "@keyframes slideIn": {
                "0%": {
                  opacity: 0,
                  transform: "scaleX(0)",
                },
                "100%": {
                  opacity: 1,
                  transform: "scaleX(1)",
                },
              },
            }}
          />
        </Box>

        {/* Corner accent */}
        <Box
          sx={{
            position: "absolute",
            top: "30px",
            right: "30px",
            width: "100px",
            height: "100px",
            border: "2px solid rgba(209, 27, 241, 0.2)",
            borderRadius: "20px",
            opacity: 0.5,
          }}
        />
      </Box>
    </Fade>
  );
}
