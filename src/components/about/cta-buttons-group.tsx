import Link from "next/link";
import React from "react";

const CTAButtonsGroup = () => {
  return (
    <div className="flex flex-col mobile:flex-row gap-4 items-center heading-6 text-center">
      <Link
        href="/contact"
        className="bg-primary text-primary-foreground px-4 tablet:px-10 py-2.5 rounded-[6px] shadow-md font-bold"
      >
        Book Your AI Strategy Consultation
      </Link>
      <Link
        href="#projects"
        className="border-1 border-border rounded-[6px] py-2.5 px-5 font-medium"
      >
        View Recent AI Projects
      </Link>
    </div>
  );
};

export default CTAButtonsGroup;
