"use client";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import { useEffect, useState } from "react";
import Profile from "./profile";
import Resume from "./resume";
import Skill from "./skill";
import Work from "./work";
import { useTranslation } from "react-i18next";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 2, md: 3 }, animation: "fadeIn 0.4s ease-in-out" }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface TabComponentProps {
  tabIndex: number;
}

const TabSetting: React.FC<TabComponentProps> = ({ tabIndex }) => {
  const { t, i18n } = useTranslation();
  const isReady = i18n.isInitialized;
  const [value, setValue] = useState(tabIndex);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    setValue(tabIndex);
  }, [tabIndex]);

  const tabs = [
    {
      label: "tabs.profile",
      component: <Profile />,
    },
    {
      label: "tabs.skill",
      component: <Skill />,
    },
    {
      label: "tabs.work",
      component: <Work />,
    },
    {
      label: "tabs.resume",
      component: <Resume />,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        "@keyframes fadeIn": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      }}
    >
      <Box
        sx={{
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          background: "rgba(255, 255, 255, 0.03)",
          borderRadius: "12px 12px 0 0",
          mb: 2,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          aria-label="basic tabs example"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#5b8def",
              height: "3px",
              borderRadius: "2px",
            },
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={isReady ? t(tab.label) : tab.label}
              {...a11yProps(index)}
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                fontWeight: 600,
                fontSize: { xs: "0.9rem", md: "0.95rem" },
                textTransform: "uppercase",
                letterSpacing: "0.4px",
                transition: "all 0.2s ease",
                position: "relative",
                px: { xs: 2, md: 3 },
                py: 1.25,

                "&:hover": {
                  color: "rgba(255, 255, 255, 0.95)",
                  background: "rgba(255, 255, 255, 0.04)",
                },

                "&.Mui-selected": {
                  color: "#ffffff",
                  fontWeight: 700,
                },
              }}
            />
          ))}
        </Tabs>
      </Box>

      {tabs.map((tab, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {tab.component}
        </CustomTabPanel>
      ))}
    </Box>
  );
};

export default TabSetting;
