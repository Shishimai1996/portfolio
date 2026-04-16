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
          minHeight: "calc(100vh - 80px)", // headerの高さを引く
          paddingTop: "80px", // header分のpadding
          position: "relative",
        }}
      >
        {children}

        <HelloOverlay />
        <Box
          sx={{
            position: "fixed",
            top: "80px",
            left: 0,
            right: 0,
            zIndex: 10,
            display: "flex",
            justifyContent: "center",
            transition: "top 0.3s ease",
          }}
        >
          <TabSetting tabIndex={tabIndex} />
        </Box>
      </main>
    </div>
  );
}
