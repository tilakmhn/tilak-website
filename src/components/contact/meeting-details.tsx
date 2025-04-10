"use client";

import React, { useEffect } from "react";

import Cal, { getCalApi } from "@calcom/embed-react";

const GoogleCalendar = () => {
  return (
    <div className="w-full h-[600px] max-w-[800px] mx-auto">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKathmandu&showPrint=0&showTabs=0&src=Y182Njk3NTQ5YmFjNGMxNGViZDQzMjNkYWZiN2I3NGIwNzI0MDFiNDM1NmZjNjAwNmJjZDgyOTMzOGVlNjU1YWE5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%2155dfc"
        className="w-full h-full border border-[#777]"
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
};

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
      config={{ layout: "month_view", theme: "light" }}
    />
  );
};

const MeetingCalendar = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full">
      <div
        className="meetings-iframe-container"
        data-src="https://meetings.hubspot.com/nitesh-pant/discovery-workshop?embed=true"
      />
    </div>
  );
};

const MeetingDetails = () => {
  return (
    <>
      <MeetingCalendar />
      <CalCalendar />
      <GoogleCalendar />
    </>
  );
};

export default MeetingDetails;
