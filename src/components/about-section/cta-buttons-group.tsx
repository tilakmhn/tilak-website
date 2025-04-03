import React from "react";

const CTAButtonsGroup = () => {
  return (
    <div className="flex flex-col gap-4 text-base items-center">
      <button className="bg-primary text-primary-foreground px-10 py-2.5 rounded-[6px] shadow-md font-bold">
        Book Your AI Strategy Consultation
      </button>
      <button className="border-1 border-slate-400 rounded-[6px] py-2.5 px-5 font-medium">
        View Recent AI Projects
      </button>
    </div>
  );
};

export default CTAButtonsGroup;
