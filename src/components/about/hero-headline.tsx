import React from "react";

const HeroHeadline = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-5xl leading-12 tracking-[-1.2%] font-extrabold tablet:text-left">
        Architecting {" "}
        <span className="italic text-primary">
          production-ready AI systems
        </span>{" "}
        that deliver measurable value
      </h1>
      <h2 className="text-2xl leading-8 tracking-[-0.6%]">
      Bringing extensive experience across all layers of product development - from ideation to scalable cloud architecture
      </h2>
    </div>
  );
};

export default HeroHeadline;
