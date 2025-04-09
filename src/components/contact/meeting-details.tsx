"use client";

import React, { useEffect } from "react";

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
  return <MeetingCalendar />;
};

export default MeetingDetails;
