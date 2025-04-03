import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Introduction = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <Avatar className="w-[200px] sm:20px h-[200px] shadow-md">
        <AvatarImage src="/profile.png" />
        <AvatarFallback>TJ</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2.5 items-center font-semibold text-center">
        <h3 className="heading-3">Tilak Joshi</h3>
        <h4 className=" text-xl leading-7 tracking-[-0.5%]">
          Generative AI & Enterprise Solutions Experts
        </h4>
      </div>
    </div>
  );
};

export default Introduction;
