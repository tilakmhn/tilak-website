import React from "react";

const HeroHeadline = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="heading-1 font-extrabold text-center tablet:text-left">
        Architecting {" "}
        <span className="italic text-blue-600">
          production-ready AI systems
        </span>{" "}
        that deliver measurable business value
      </h1>
      <h2 className="heading-4">
        Bringing extensive experience across all layers of product development -
        from ideation to scalable cloud architecture
      </h2>
    </div>
  );
};

export default HeroHeadline;
