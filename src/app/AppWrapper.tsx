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
    <>
      <header>
        <Header onValueChange={handleValueChange} />
      </header>

      <main data-tab-index={tabIndex}>
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
    </>
  );
}
