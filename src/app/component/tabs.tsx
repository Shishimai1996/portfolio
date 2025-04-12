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
import { Typography } from "@mui/material";
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
        <Box sx={{ p: 3 }}>
          <Typography variant="h1">{children}</Typography>
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

const TabSetting = ({ tabIndex }: { tabIndex: number }) => {
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
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Box sx={{ borderBottom: 1, borderColor: "#dcdfd3" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          aria-label="basic tabs example"
          TabIndicatorProps={{ style: { backgroundColor: "#720acec5" } }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={isReady ? t(tab.label) : tab.label}
              {...a11yProps(index)}
              sx={{
                color: "#720acec5",
                "&.Mui-selected": {
                  color: "#720acec5",
                  fontFamily: "Zain, sans-serif",
                  fontSize: "1.2rem",
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
