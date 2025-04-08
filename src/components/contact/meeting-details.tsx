"use client";

import React from "react";



// Note that there is inner scroll inside Zcal Embed
const ZcalEmbed: React.FC = () => {
  const srcUrl = "https://zcal.co/i/FBjMuOnu?embed=1&embedType=iframe";

  return (
    <iframe
      src={srcUrl}
      loading="eager"
      id="zcal-invite"
      title="Book a Consultation"
      className="border-none w-full min-w-[320px] min-h-[544px] h-[801px] tablet:h-max overscroll-none! overflow-hidden! inline-flex [scrollbar-width:none] [-ms-overflow-style:none]"
      scrolling="none"
    ></iframe>
  );
};

const MeetingDetails = () => {
  return (
    <div className="flex flex-col justify-between items-center">
      <ZcalEmbed />
    </div>
  );
};

export default MeetingDetails;
