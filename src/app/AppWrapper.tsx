"use client";

import { useState } from "react";
import { Header } from "../app/component/header";
import HelloOverlay from "./component/hello";
import { Box } from "@mui/material";
import TabSetting from "./component/tabs";

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const handleValueChange = (value: number) => {
    setTabIndex(value);
  };

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <header>
        <Header onValueChange={handleValueChange} />
      </header>

      <main
        data-tab-index={tabIndex}
        style={{
          minHeight: "auto",
          position: "relative",
          paddingTop: "85px",
          paddingBottom: "10px",
        }}
      >
        {children}

        <HelloOverlay />
        <Box
          sx={{
            position: "sticky",
            top: "80px",
            left: 0,
            right: 0,
            zIndex: 10,
            display: "flex",
            justifyContent: "center",
            transition: "top 0.3s ease",
            background: "rgba(0, 0, 0, 0.05)",
            backdropFilter: "blur(5px)",
          }}
        >
          <TabSetting tabIndex={tabIndex} />
        </Box>
      </main>
    </div>
  );
}
