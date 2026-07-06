"use client";

import React, { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import { Stack, Typography, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TimelineItem = ({
  title,
  subtitle,
  date,
  description,
  bullets,
  isLeft,
  index,
}: {
  title: string;
  subtitle?: string;
  date: string;
  description?: string;
  bullets?: string[];
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
            p: 4,
            borderRadius: "8px",
            backdropFilter: "blur(8px)",
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(209, 27, 241, 0.15)",
            transition: "all 0.4s ease",
            opacity: 0,
            transform: "translateY(24px)",
            "&:hover": {
              background: "rgba(255, 255, 255, 0.055)",
              borderColor: "rgba(209, 27, 241, 0.25)",
              boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2)",
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
          {subtitle && (
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.6)",
                mb: 0.5,
              }}
            >
              {subtitle}
            </Typography>
          )}
          <Typography
            variant="body2"
            sx={{
              color: "rgba(100, 200, 255, 0.8)",
              mb: 1,
            }}
          >
            {date}
          </Typography>
          {bullets ? (
            <Stack spacing={0.75}>
              {bullets.map((bullet, i) => (
                <Typography
                  key={i}
                  variant="body2"
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    lineHeight: 1.7,
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <Box
                    component="span"
                    sx={{ color: "rgba(100, 200, 255, 0.8)", flexShrink: 0 }}
                  >
                    ▸
                  </Box>
                  <span>{bullet}</span>
                </Typography>
              ))}
            </Stack>
          ) : (
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: 1.7,
              }}
            >
              {description}
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
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 8, md: 14 },
        background:
          "linear-gradient(135deg, rgba(209, 27, 241, 0.02) 0%, rgba(100, 200, 255, 0.02) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* SVG Timeline */}
      {!isMobile && (
        <svg
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
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
            d="M 2 0 Q 3 25 2 50 T 2 100"
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
          <Box sx={{ textAlign: "center", mb: 12 }}>
            <Typography
              variant="overline"
              sx={{
                display: "inline-block",
                color: "rgba(100, 200, 255, 0.7)",
                letterSpacing: "0.3em",
                mb: 2,
                fontWeight: 500,
                fontSize: "0.75rem",
              }}
            >
              {t("resume.overline")}
            </Typography>
            <Typography
              variant="h4"
              fontWeight={600}
              sx={{
                color: "#ffffff",
                letterSpacing: "-0.015em",
                lineHeight: 1.3,
                fontSize: { xs: "1.75rem", md: "2rem" },
              }}
            >
              {t("resume.headline")}
            </Typography>
          </Box>

          {/* Timeline */}
          <Box sx={{ maxWidth: "900px", mx: "auto" }}>
            {/* Education */}
            <TimelineItem
              title={t("university")}
              date="2015 - 2019"
              description={t("resume.educationDescription")}
              isLeft={true}
              index={0}
            />

            {/* Job 1 */}
            <TimelineItem
              title={t("resume.job1.title")}
              subtitle={t("resume.job1.subtitle")}
              date="2019/4 - 2022/7"
              bullets={t("resume.job1.bullets", { returnObjects: true }) as string[]}
              isLeft={false}
              index={1}
            />

            {/* Job 2 */}
            <TimelineItem
              title={t("resume.job2.title")}
              subtitle={t("woven")}
              date="2022/8 - 2025/7"
              bullets={t("resume.job2.bullets", { returnObjects: true }) as string[]}
              isLeft={true}
              index={2}
            />
            {/* Job 3 */}
            <TimelineItem
              title={t("resume.job3.title")}
              subtitle={t("resume.job3.subtitle")}
              date="2025/8 - 2026/4"
              bullets={t("resume.job3.bullets", { returnObjects: true }) as string[]}
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
                      color: "rgba(100, 200, 255, 0.8)",
                      fontWeight: 600,
                    }}
                  >
                    {t("resume.openTo")}
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
