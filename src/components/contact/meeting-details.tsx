"use client";

import React, { useEffect } from "react";

import Cal, { getCalApi } from "@calcom/embed-react";

const CalCalendar = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#155dfc" },
          dark: { "cal-brand": "#155dfc" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <Cal
      namespace="30min"
      calLink="gopal-khadka-k8a1hp/30min"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", theme: "auto" }}
    />
  );
};

const MeetingDetails = () => {
  return <CalCalendar />;
};

export default MeetingDetails;
