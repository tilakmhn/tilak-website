"use client";

import React, { useEffect } from "react";

const HubSpotForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/48703427.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="hs-form-frame heading-5"
      data-region="na1"
      data-form-id="58f29677-b92c-4100-81c9-79b806762aca"
      data-portal-id="48703427"
    />
  );
};

const ContactForm = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h5 className="heading-5 font-semibold">
        If Time Slots are not Available:
      </h5>
      <div className="w-full">
        <HubSpotForm />
      </div>
    </div>
  );
};

export default ContactForm;
