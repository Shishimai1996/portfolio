"use client";

import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { Stack, Typography, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TimelineItem = ({
  icon: Icon,
  title,
  date,
  description,
  description2,
  isLeft,
  index,
}: {
  icon: React.ElementType;
  title: string;
  date: string;
  description: string;
  description2?: string;
  isLeft: boolean;
  index: number;
}) => {
  const dotRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dotRef.current || !itemRef.current || !contentRef.current) return;

    // スクロール連動の光る効果
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: itemRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
    });

    timeline.fromTo(
      dotRef.current,
      {
        scale: 0.95,
        boxShadow: "0 0 12px rgba(209, 27, 241, 0.25)",
      },
      {
        scale: 1.3,
        boxShadow:
          "0 0 40px #d11bf1cf, 0 0 80px rgba(209, 27, 241, 0.9), 0 0 120px rgba(209, 27, 241, 0.6)",
        duration: 0.7,
        ease: "power2.out",
        delay: index * 0.15,
      },
    );

    timeline.fromTo(
      contentRef.current,
      {
        opacity: 0,
        y: 24,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      },
      0,
    );

    // ホバー効果
    const handleMouseEnter = () => {
      gsap.to(dotRef.current, {
        scale: 1.5,
        boxShadow:
          "0 0 50px #64c8ff, 0 0 100px rgba(100, 200, 255, 0.95), 0 0 150px rgba(100, 200, 255, 0.6)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(dotRef.current, {
        scale: 1.3,
        boxShadow:
          "0 0 40px #d11bf1cf, 0 0 80px rgba(209, 27, 241, 0.8), 0 0 120px rgba(209, 27, 241, 0.4)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    itemRef.current.addEventListener("mouseenter", handleMouseEnter);
    itemRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (timeline.scrollTrigger) {
        timeline.scrollTrigger.kill();
      }
      timeline.kill();
      if (itemRef.current) {
        itemRef.current.removeEventListener("mouseenter", handleMouseEnter);
        itemRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [index]);

  return (
    <Box
      ref={itemRef}
      sx={{
        display: "flex",
        justifyContent: isLeft ? "flex-end" : "flex-start",
        mb: 4,
        position: "relative",
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "calc(50% - 40px)" },
          pr: isLeft ? 4 : 0,
          pl: !isLeft ? 4 : 0,
        }}
      >
        <Box
          ref={contentRef}
          sx={{
            p: 3,
            borderRadius: "12px",
            backdropFilter: "blur(10px)",
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(209, 27, 241, 0.2)",
            transition: "all 0.3s ease",
            opacity: 0,
            transform: "translateY(24px)",
            "&:hover": {
              background: "rgba(255, 255, 255, 0.06)",
              borderColor: "rgba(209, 27, 241, 0.4)",
              boxShadow: "0 8px 32px rgba(209, 27, 241, 0.15)",
            },
          }}
        >
          <Typography
            variant="body1"
            fontWeight={700}
            sx={{
              color: "rgba(255, 255, 255, 0.95)",
              mb: 1,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "rgba(100, 200, 255, 0.8)",
              mb: 1,
            }}
          >
            {date}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
            }}
          >
            {description}
          </Typography>
          {description2 && (
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.6)",
                mt: 1,
              }}
            >
              {description2}
            </Typography>
          )}
        </Box>
      </Box>

      {/* Center dot */}
      <Box
        ref={dotRef}
        sx={{
          position: "absolute",
          left: "50%",
          top: "20px",
          transform: "translateX(-50%)",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #d11bf1cf 0%, #64c8ff 100%)",
          border: "3px solid rgba(0, 0, 0, 0.8)",
          boxShadow: "0 0 20px #d11bf1cf, 0 0 40px rgba(209, 27, 241, 0.5)",
          zIndex: 10,
          transition: "all 0.3s ease",
        }}
      />
    </Box>
  );
};

export default function Resume() {
  const [showResume] = useState<boolean>(true);
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 6, md: 10 },
        background:
          "linear-gradient(135deg, rgba(209, 27, 241, 0.03) 0%, rgba(100, 200, 255, 0.03) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* SVG Timeline */}
      {!isMobile && (
        <svg
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            transform: "translateX(-50%)",
            width: "4px",
            height: "100%",
            zIndex: 1,
          }}
        >
          <defs>
            <linearGradient id="neonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d11bf1cf" stopOpacity="1" />
              <stop offset="50%" stopColor="#64c8ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#d11bf1cf" stopOpacity="1" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d={`M 2 0 Q 8 200 2 400 T 2 800`}
            stroke="url(#neonGradient)"
            strokeWidth="3"
            fill="none"
            filter="url(#glow)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      )}

      <Container maxWidth="lg">
        <Box sx={{ position: "relative", zIndex: 2 }}>
          {/* Title */}
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{
                background:
                  "linear-gradient(135deg, #d11bf1cf 0%, #64c8ff 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              My Journey
            </Typography>
          </Box>

          {/* Timeline */}
          <Box sx={{ maxWidth: "900px", mx: "auto" }}>
            {/* Education */}
            <TimelineItem
              icon={SchoolIcon}
              title={t("university")}
              date="2015 - 2019"
              description={t("subject")}
              isLeft={true}
              index={0}
            />

            {/* Job 1 */}
            <TimelineItem
              icon={WorkIcon}
              title={t("company")}
              date="2019/4 - 2022/7"
              description={t("jobContent")}
              isLeft={false}
              index={1}
            />

            {/* Job 2 */}
            <TimelineItem
              icon={WorkIcon}
              title={t("woven")}
              date="2022/8 - 2025/7"
              description={t("engineer")}
              isLeft={true}
              index={2}
            />
            {/* Job 3 */}
            <TimelineItem
              icon={WorkIcon}
              title={t("company")}
              date="2025/8 - 2026/4"
              description={t("webEngineer")}
              isLeft={false}
              index={3}
            />
            {/* Future */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  transform: "translateX(-50%)",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, #64c8ff 0%, #d11bf1cf 100%)",
                  border: "3px solid rgba(0, 0, 0, 0.8)",
                  boxShadow:
                    "0 0 20px #64c8ff, 0 0 40px rgba(100, 200, 255, 0.5)",
                  zIndex: 10,
                }}
              />
              <Box
                sx={{
                  width: { xs: "100%", md: "calc(50% - 40px)" },
                  ml: { xs: 0, md: "calc(50% + 40px)" },
                  mt: 2,
                }}
              >
                <Box
                  sx={{
                    p: 3,
                    borderRadius: "12px",
                    backdropFilter: "blur(10px)",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "2px dashed rgba(100, 200, 255, 0.3)",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(100, 200, 255, 0.6)",
                    }}
                  >
                    Coming Soon...
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
