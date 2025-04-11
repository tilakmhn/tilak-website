"use client";

import React, { useEffect } from "react";

// To Fix type error
declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (options: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
  }
}

const HubSpotForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "48703427",
          formId: "58f29677-b92c-4100-81c9-79b806762aca",
          target: "#hubspot-form-container",
        });
      }
    });

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="hubspot-form-container" className="heading-5" />;
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
